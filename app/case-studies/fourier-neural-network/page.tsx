import { ArrowLeft, Github, ExternalLink } from 'lucide-react';
import Link from 'next/link';
import { SectionTitle, Footer } from '@/components/common';

export default function FourierNeuralNetworkCaseStudy() {
  return (
    <>
      <Link href="/#projects" className="inline-flex items-center gap-2 text-primary hover:text-primaryDark mb-8 mt-8">
        <ArrowLeft size={16} />
        Back to Projects
      </Link>

      <div className="mb-16">
        <div className="mb-8">
          <div className="text-6xl mb-6">📡</div>
          <h1 className="text-5xl font-semibold text-text mb-4">Fourier Neural Network</h1>
          <p className="text-xl text-muted leading-8">
            Spectral Learning for Predictive Maintenance on CWRU Bearing Dataset
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-3 mb-12">
          <div className="rounded-3xl border border-border bg-white p-6">
            <p className="text-xs uppercase tracking-[0.24em] text-muted mb-3">Status</p>
            <p className="text-lg font-semibold text-text">Research Published</p>
          </div>
          <div className="rounded-3xl border border-border bg-white p-6">
            <p className="text-xs uppercase tracking-[0.24em] text-muted mb-3">Accuracy</p>
            <p className="text-lg font-semibold text-text">~96% vs 92% CNN</p>
          </div>
          <div className="rounded-3xl border border-border bg-white p-6">
            <p className="text-xs uppercase tracking-[0.24em] text-muted mb-3">Role</p>
            <p className="text-lg font-semibold text-text">ML Researcher</p>
          </div>
        </div>
      </div>

      <div className="grid gap-16 mb-20">
        <section>
          <SectionTitle title="Research Motivation" subtitle="" />
          <div className="prose prose-sm max-w-4xl">
            <p className="text-lg text-muted leading-8 mb-4">
              Why Fourier Neural Networks beat traditional approaches for bearing fault detection:
            </p>
            <ul className="space-y-3 text-muted leading-7 ml-4">
              <li><strong>LSTM Limitation:</strong> Processes signals sequentially O(N), misses long-range periodic patterns</li>
              <li><strong>CNN Limitation:</strong> Fixed receptive field, struggles with frequency-domain features</li>
              <li><strong>FNN Advantage:</strong> Global receptive field via FFT in O(N log N) time. Naturally detects characteristic fault frequencies</li>
              <li><strong>Bearing Faults Create Peaks:</strong> Outer race faults produce energy spikes at ~107 Hz. FNN detects these directly in frequency domain</li>
            </ul>
            <p className="text-lg text-muted leading-8 mt-6">
              <strong>Key Insight:</strong> Bearing failure is a <em>frequency phenomenon</em>. By learning in frequency domain with learnable complex weights, the model directly captures fault signatures.
            </p>
          </div>
        </section>

        <section>
          <SectionTitle title="Architecture: Fourier Neural Operator" subtitle="" />
          <div className="rounded-3xl border border-border bg-white p-10">
            <div className="font-mono text-sm text-muted leading-8 bg-gray-50 p-6 rounded-xl overflow-x-auto mb-6">
{`Input Signal x: (B, 1, L)
        ↓
┌─────────────────┐
│ Input Projection│  Conv1d(1 → width)
└────────┬────────┘
         ↓
    ┌────┴────┐  ×depth
    │ Fourier  │
    │  Block   │
    │          │
    │ ┌──────┐ │  SpectralConv1d
    │ │ FFT  │ │  → keep k_max modes
    │ │ R_φ  │ │  → learned complex weights
    │ │ IFFT │ │
    │ └──┬───┘ │
    │    ↓     │
    │ ┌──────┐ │  Local Conv1d(1×1)
    │ │  W   │ │
    │ └──┬───┘ │
    │    +     │
    │  GELU    │
    │  BNorm   │
    └────┬─────┘
         ↓
┌────────────────┐
│ GlobalAvgPool  │
│ FC(width→128)  │
│ GELU + Dropout │
│ FC(128→4)      │
└────────────────┘
Output: (B, 4) logits`}
            </div>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-text mb-2">Key Equation per Fourier Block:</h3>
                <p className="text-muted font-mono text-sm">
                  v_{'{t+1}'} (x) = σ( W·v_{'{t}'} (x) + F⁻¹(R_φ · F(v_{'{t}'})) (x) )
                </p>
                <p className="text-muted text-sm mt-2">
                  Where F = FFT, F⁻¹ = IFFT, R_φ = learnable complex weights (first k_max modes only)
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-text mb-2">Why This Works for Bearing Faults:</h3>
                <ul className="space-y-2 text-muted text-sm ml-4">
                  <li>• FFT extracts characteristic frequencies of each fault type</li>
                  <li>• R_φ (complex weights) learns to amplify fault-specific frequencies</li>
                  <li>• IFFT reconstructs time-domain signal with emphasis on fault features</li>
                  <li>• Global view of spectrum = O(N log N) instead of O(N²) attention</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section>
          <SectionTitle title="Experimental Results" subtitle="" />
          <div className="rounded-3xl border border-border bg-white p-6">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 px-4 text-text font-semibold">Model</th>
                    <th className="text-left py-3 px-4 text-text font-semibold">Accuracy</th>
                    <th className="text-left py-3 px-4 text-text font-semibold">F1 Score</th>
                    <th className="text-left py-3 px-4 text-text font-semibold">Train Time</th>
                    <th className="text-left py-3 px-4 text-text font-semibold">Parameters</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border">
                    <td className="py-3 px-4 text-muted">CNN</td>
                    <td className="py-3 px-4 text-muted">~92%</td>
                    <td className="py-3 px-4 text-muted">~0.91</td>
                    <td className="py-3 px-4 text-muted">60s</td>
                    <td className="py-3 px-4 text-muted">180K</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-3 px-4 text-muted">LSTM</td>
                    <td className="py-3 px-4 text-muted">~88%</td>
                    <td className="py-3 px-4 text-muted">~0.87</td>
                    <td className="py-3 px-4 text-muted">120s</td>
                    <td className="py-3 px-4 text-muted">130K</td>
                  </tr>
                  <tr className="bg-primary/5">
                    <td className="py-3 px-4 text-text font-semibold">FNN</td>
                    <td className="py-3 px-4 text-text font-semibold">~96%</td>
                    <td className="py-3 px-4 text-text font-semibold">~0.95</td>
                    <td className="py-3 px-4 text-text font-semibold">45s</td>
                    <td className="py-3 px-4 text-text font-semibold">85K</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-muted text-sm mt-4">
              <strong>Key Finding:</strong> FNN achieves highest accuracy with fewest parameters and fastest training. Superior noise robustness compared to baselines.
            </p>
          </div>
        </section>

        <section>
          <SectionTitle title="FNN vs Baselines: Property Comparison" subtitle="" />
          <div className="rounded-3xl border border-border bg-white p-6">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 px-4 text-text font-semibold">Property</th>
                    <th className="text-left py-3 px-4 text-text font-semibold">LSTM</th>
                    <th className="text-left py-3 px-4 text-text font-semibold">CNN</th>
                    <th className="text-left py-3 px-4 text-text font-semibold">FNN</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border">
                    <td className="py-3 px-4 text-muted"><strong>Receptive Field</strong></td>
                    <td className="py-3 px-4 text-muted">Local (sequential)</td>
                    <td className="py-3 px-4 text-muted">Local (kernel)</td>
                    <td className="py-3 px-4 text-text font-semibold">Global (full signal)</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-3 px-4 text-muted"><strong>Complexity</strong></td>
                    <td className="py-3 px-4 text-muted">O(N)</td>
                    <td className="py-3 px-4 text-muted">O(N·k)</td>
                    <td className="py-3 px-4 text-text font-semibold">O(N log N)</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-3 px-4 text-muted"><strong>Periodic Patterns</strong></td>
                    <td className="py-3 px-4 text-muted">Indirect</td>
                    <td className="py-3 px-4 text-muted">Indirect</td>
                    <td className="py-3 px-4 text-text font-semibold">Direct (spectral)</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 text-muted"><strong>Noise Robustness</strong></td>
                    <td className="py-3 px-4 text-muted">Low</td>
                    <td className="py-3 px-4 text-muted">Medium</td>
                    <td className="py-3 px-4 text-text font-semibold">High</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section>
          <SectionTitle title="Dataset & Methodology" subtitle="" />
          <div className="grid gap-5 lg:grid-cols-2">
            <div className="rounded-3xl border border-border bg-white p-6">
              <h3 className="text-lg font-semibold text-text mb-3">CWRU Bearing Dataset</h3>
              <ul className="space-y-2 text-muted text-sm ml-4">
                <li>• 4 classes: Normal, Inner Race, Ball Fault, Outer Race</li>
                <li>• Sampling rate: 12,000 Hz</li>
                <li>• Drive-end accelerometer (DE_time)</li>
                <li>• Source: engineering.case.edu/bearingdatacenter</li>
              </ul>
            </div>
            <div className="rounded-3xl border border-border bg-white p-6">
              <h3 className="text-lg font-semibold text-text mb-3">Signal Processing</h3>
              <ul className="space-y-2 text-muted text-sm ml-4">
                <li>• Butterworth filtering (2-8 kHz)</li>
                <li>• Windowed segmentation (2048 samples)</li>
                <li>• FFT-based feature extraction</li>
                <li>• Spectral subtraction for noise robustness</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <SectionTitle title="Deliverables" subtitle="" />
          <div className="space-y-4">
            <div className="rounded-3xl border border-border bg-white p-6">
              <h3 className="text-lg font-semibold text-text mb-3">7 Research Notebooks</h3>
              <p className="text-muted leading-7">
                01_data_inspection.ipynb → 02_signal_visualization → 03_fft_analysis → 04_feature_engineering → 05_baseline_models → 06_fourier_neural_network → 07_model_comparison
              </p>
            </div>
            <div className="rounded-3xl border border-border bg-white p-6">
              <h3 className="text-lg font-semibold text-text mb-3">Streamlit Dashboard</h3>
              <p className="text-muted leading-7">
                Real-time signal upload, FFT visualization, live fault probability prediction. Engineers can upload `.mat` files and get predictions instantly.
              </p>
            </div>
            <div className="rounded-3xl border border-border bg-white p-6">
              <h3 className="text-lg font-semibold text-text mb-3">CLI Inference</h3>
              <p className="text-muted leading-7">
                Command-line tool for batch predictions: `python app/inference.py --file data.mat --model fnn`
              </p>
            </div>
          </div>
        </section>

        <section>
          <SectionTitle title="Tech Stack" subtitle="" />
          <div className="rounded-3xl border border-border bg-white p-6">
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <h3 className="font-semibold text-text mb-3">ML & Research</h3>
                <ul className="space-y-2 text-muted text-sm ml-4">
                  <li>• PyTorch (model architecture)</li>
                  <li>• NumPy/SciPy (signal processing)</li>
                  <li>• Matplotlib/Seaborn (visualization)</li>
                  <li>• Jupyter Notebooks</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-text mb-3">Deployment</h3>
                <ul className="space-y-2 text-muted text-sm ml-4">
                  <li>• Streamlit (interactive dashboard)</li>
                  <li>• Python Click (CLI)</li>
                  <li>• Pytest (unit tests)</li>
                  <li>• Docker (containerization)</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section>
          <SectionTitle title="Links & Resources" subtitle="" />
          <div className="flex flex-wrap gap-4">
            <a
              href="https://github.com/Shridipa/Fourier-Neural-Network-Predictive-Maintenance"
              className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-6 py-3 text-primary hover:bg-primary/20 transition"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github size={18} />
              View on GitHub
            </a>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
}
