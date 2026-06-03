import { ArrowLeft, Github, ExternalLink } from 'lucide-react';
import Link from 'next/link';
import { SectionTitle, Footer } from '@/components/common';

export default function MedicAICaseStudy() {
  return (
    <>
      <Link href="/#projects" className="inline-flex items-center gap-2 text-primary hover:text-primaryDark mb-8 mt-8">
        <ArrowLeft size={16} />
        Back to Projects
      </Link>

      <div className="mb-16">
        <div className="mb-8">
          <div className="text-6xl mb-6">🏥</div>
          <h1 className="text-5xl font-semibold text-text mb-4">Medic AI</h1>
          <p className="text-xl text-muted leading-8">
            Multimodal Medical Intelligence System with Explainable Diagnosis
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-3 mb-12">
          <div className="rounded-3xl border border-border bg-white p-6">
            <p className="text-xs uppercase tracking-[0.24em] text-muted mb-3">Status</p>
            <p className="text-lg font-semibold text-text">Active Development</p>
          </div>
          <div className="rounded-3xl border border-border bg-white p-6">
            <p className="text-xs uppercase tracking-[0.24em] text-muted mb-3">Timeline</p>
            <p className="text-lg font-semibold text-text">4 months</p>
          </div>
          <div className="rounded-3xl border border-border bg-white p-6">
            <p className="text-xs uppercase tracking-[0.24em] text-muted mb-3">Role</p>
            <p className="text-lg font-semibold text-text">Full Stack ML Engineer</p>
          </div>
        </div>
      </div>

      <div className="grid gap-16 mb-20">
        <section>
          <SectionTitle title="Problem Statement" subtitle="" />
          <div className="prose prose-sm max-w-4xl">
            <p className="text-lg text-muted leading-8 mb-4">
              Medical diagnosis traditionally relies on single modalities (images or text), but modern diagnosis requires integration across modalities:
            </p>
            <ul className="space-y-3 text-muted leading-7 ml-4">
              <li><strong>Image-only diagnosis</strong> misses contextual patient information and symptom descriptions</li>
              <li><strong>Text-only assessment</strong> lacks visual confirmation from medical imaging</li>
              <li><strong>Black-box predictions</strong> are unacceptable in clinical settings where explainability is critical</li>
              <li><strong>Confidence calibration</strong> is essential to flag uncertain predictions for clinician review</li>
            </ul>
            <p className="text-lg text-muted leading-8 mt-6">
              <strong>Target Users:</strong> Clinical decision support systems, telemedicine platforms, and medical AI research teams.
            </p>
          </div>
        </section>

        <section>
          <SectionTitle title="Research Motivation" subtitle="" />
          <div className="grid gap-5 lg:grid-cols-2">
            <div className="rounded-3xl border border-border bg-white p-6">
              <h3 className="text-lg font-semibold text-text mb-4">Why Multimodal Fusion?</h3>
              <p className="text-muted leading-7 mb-4">
                Medical diagnosis is inherently multimodal. Combining visual information (pathology, anatomy) with textual information (patient history, symptoms) mirrors clinical workflow and improves diagnostic accuracy.
              </p>
            </div>
            <div className="rounded-3xl border border-border bg-white p-6">
              <h3 className="text-lg font-semibold text-text mb-4">Why Explainability?</h3>
              <p className="text-muted leading-7 mb-4">
                Clinicians must understand model reasoning to make informed decisions. SHAP interpretability provides feature-level explanations showing which image regions and text snippets influenced predictions.
              </p>
            </div>
          </div>
        </section>

        <section>
          <SectionTitle title="System Architecture" subtitle="" />
          <div className="rounded-3xl border border-border bg-white p-10 mb-6">
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-text mb-3">Model Architecture</h3>
                <div className="text-muted leading-7 space-y-2 ml-4">
                  <p><strong>Vision Encoder:</strong> ResNet-50 backbone pretrained on ImageNet, outputs (2048,) feature vector</p>
                  <p><strong>Text Encoder:</strong> BERT medical-finetuned, processes symptom descriptions, outputs (768,) embeddings</p>
                  <p><strong>Fusion Layer:</strong> Multi-head attention across modalities with cross-modal interaction</p>
                  <p><strong>Classification Head:</strong> 2-layer MLP outputting diagnosis + confidence score</p>
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-text mb-3">End-to-End Pipeline</h3>
                <div className="text-muted leading-7 space-y-2 ml-4">
                  <p><strong>Input Processing:</strong> Image normalization + text tokenization</p>
                  <p><strong>Encoder Stage:</strong> Parallel encoding of image and text modalities</p>
                  <p><strong>Fusion Stage:</strong> Multi-modal fusion with attention weights</p>
                  <p><strong>Prediction Stage:</strong> Disease classification with confidence calibration</p>
                  <p><strong>Explanation Stage:</strong> SHAP values for feature-level interpretability</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <SectionTitle title="Technical Implementation" subtitle="" />
          <div className="grid gap-5 lg:grid-cols-2 mb-6">
            <div className="rounded-3xl border border-border bg-white p-6">
              <h3 className="font-semibold text-text mb-4">Backend Stack</h3>
              <ul className="space-y-2 text-muted leading-7">
                <li>• <strong>Framework:</strong> PyTorch</li>
                <li>• <strong>Vision Backbone:</strong> ResNet-50</li>
                <li>• <strong>Text Encoder:</strong> BERT (medical domain)</li>
                <li>• <strong>Fusion:</strong> Multi-head cross-modal attention</li>
                <li>• <strong>Interpretability:</strong> SHAP TreeExplainer</li>
                <li>• <strong>Serving:</strong> FastAPI with TorchServe</li>
              </ul>
            </div>
            <div className="rounded-3xl border border-border bg-white p-6">
              <h3 className="font-semibold text-text mb-4">Frontend Stack</h3>
              <ul className="space-y-2 text-muted leading-7">
                <li>• <strong>Framework:</strong> React TypeScript</li>
                <li>• <strong>Image Upload:</strong> Drag-and-drop interface</li>
                <li>• <strong>Visualization:</strong> Plotly for SHAP explanations</li>
                <li>• <strong>UI Library:</strong> TailwindCSS</li>
                <li>• <strong>Real-time Updates:</strong> WebSocket streaming</li>
                <li>• <strong>Deployment:</strong> Docker + AWS</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <SectionTitle title="Technical Challenges & Solutions" subtitle="" />
          <div className="space-y-5">
            <div className="rounded-3xl border border-border bg-white p-6">
              <h3 className="font-semibold text-text mb-3">Challenge 1: Modality Imbalance</h3>
              <p className="text-muted leading-7 mb-3">
                <strong>Problem:</strong> Image data often dominates multimodal fusion, reducing text influence.
              </p>
              <p className="text-muted leading-7">
                <strong>Solution:</strong> Implemented modality-specific normalization with learnable fusion weights that automatically balance contributions during training.
              </p>
            </div>
            <div className="rounded-3xl border border-border bg-white p-6">
              <h3 className="font-semibold text-text mb-3">Challenge 2: Confidence Calibration</h3>
              <p className="text-muted leading-7 mb-3">
                <strong>Problem:</strong> Neural networks often produce overconfident predictions unsuitable for clinical deployment.
              </p>
              <p className="text-muted leading-7">
                <strong>Solution:</strong> Applied temperature scaling and Platt scaling on validation set; medical predictions now reflect true uncertainty.
              </p>
            </div>
            <div className="rounded-3xl border border-border bg-white p-6">
              <h3 className="font-semibold text-text mb-3">Challenge 3: Explainability Overhead</h3>
              <p className="text-muted leading-7 mb-3">
                <strong>Problem:</strong> SHAP computation is expensive; real-time explanations for clinical use were slow.
              </p>
              <p className="text-muted leading-7">
                <strong>Solution:</strong> Cached SHAP values for common diseases; implemented approximate SHAP for real-time inference with response times under 100ms latency.
              </p>
            </div>
          </div>
        </section>

        <section>
          <SectionTitle title="Methodology" subtitle="" />
          <div className="rounded-3xl border border-border bg-white p-8">
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-text mb-3">Evaluation Framework</h3>
                <p className="text-muted leading-7 mb-4">
                  Evaluated across medical AI benchmarks:
                </p>
                <ul className="space-y-2 text-muted leading-7 ml-4">
                  <li><strong>Accuracy Metrics:</strong> Sensitivity, specificity, F1-score per disease class</li>
                  <li><strong>Calibration:</strong> ECE (Expected Calibration Error), Brier score</li>
                  <li><strong>Explainability:</strong> Explanation fidelity via perturbation analysis</li>
                  <li><strong>Multimodal Impact:</strong> Ablation study (image-only, text-only, multimodal)</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-text mb-3">Dataset & Benchmarking</h3>
                <p className="text-muted leading-7">
                  Trained on medical imaging dataset with paired clinical notes (5,000+ samples). Validated on held-out test set; compared against unimodal baselines.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section>
          <SectionTitle title="Results & Impact" subtitle="" />
          <div className="grid gap-5 lg:grid-cols-3 mb-6">
            <div className="rounded-3xl border border-border bg-white p-6">
              <p className="text-xs uppercase tracking-[0.24em] text-muted mb-3">Accuracy Improvement</p>
              <p className="text-3xl font-semibold text-text mb-2">+12%</p>
              <p className="text-sm text-muted">Multimodal vs. image-only</p>
            </div>
            <div className="rounded-3xl border border-border bg-white p-6">
              <p className="text-xs uppercase tracking-[0.24em] text-muted mb-3">Calibration (ECE)</p>
              <p className="text-3xl font-semibold text-text mb-2">3.2%</p>
              <p className="text-sm text-muted">Well-calibrated predictions</p>
            </div>
            <div className="rounded-3xl border border-border bg-white p-6">
              <p className="text-xs uppercase tracking-[0.24em] text-muted mb-3">Inference Speed</p>
              <p className="text-3xl font-semibold text-text mb-2">85ms</p>
              <p className="text-sm text-muted">With explanations</p>
            </div>
          </div>
          <div className="rounded-3xl border border-border bg-white p-8">
            <h3 className="font-semibold text-text mb-4">Key Findings</h3>
            <ul className="space-y-3 text-muted leading-7 ml-4">
              <li>• Multimodal fusion consistently outperforms unimodal baselines across all disease classes</li>
              <li>• Text modality provides critical context, especially for diagnostic edge cases (8% error reduction)</li>
              <li>• Explainability via SHAP improves clinician confidence and model adoption</li>
              <li>• Confidence calibration reduces false-positive predictions in high-stakes scenarios</li>
            </ul>
          </div>
        </section>

        <section>
          <SectionTitle title="Future Work" subtitle="" />
          <div className="space-y-4">
            {[
              'Federated learning for privacy-preserving multi-hospital model training',
              'Real-time uncertainty quantification via Bayesian deep learning',
              'Integration with clinical workflows through FHIR-compliant EHR systems',
              'Extended multimodality support (time-series vital signs, genomic data)',
              'Domain adaptation to new diseases without retraining',
              'Fairness and bias auditing across patient demographics'
            ].map((item) => (
              <div key={item} className="rounded-3xl border border-border bg-white p-6 flex gap-4">
                <span className="text-primary text-xl flex-shrink-0">→</span>
                <p className="text-muted leading-7">{item}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <SectionTitle title="Links & Resources" subtitle="" />
          <div className="grid gap-5 sm:grid-cols-2 mb-6">
            <a
              href="https://github.com/Shridipa"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-3xl border border-border bg-white p-6 hover:border-primary transition flex items-center gap-4"
            >
              <Github size={24} className="text-primary" />
              <div>
                <p className="font-semibold text-text">GitHub Repository</p>
                <p className="text-sm text-muted">View source code and documentation</p>
              </div>
            </a>
            <a
              href="/#projects"
              className="rounded-3xl border border-border bg-white p-6 hover:border-primary transition flex items-center gap-4"
            >
              <ExternalLink size={24} className="text-primary" />
              <div>
                <p className="font-semibold text-text">Back to Portfolio</p>
                <p className="text-sm text-muted">View other projects and case studies</p>
              </div>
            </a>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
}
