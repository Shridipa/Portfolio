import { ArrowLeft, Github, ExternalLink } from 'lucide-react';
import Link from 'next/link';
import { SectionTitle, Footer } from '@/components/common';

export default function GraphNeuralNetworkCaseStudy() {
  return (
    <>
      <Link href="/#projects" className="inline-flex items-center gap-2 text-primary hover:text-primaryDark mb-8 mt-8">
        <ArrowLeft size={16} />
        Back to Projects
      </Link>

      <div className="mb-16">
        <div className="mb-8">
          <div className="text-6xl mb-6">🔗</div>
          <h1 className="text-5xl font-semibold text-text mb-4">Graph Neural Networks</h1>
          <p className="text-xl text-muted leading-8">
            Industrial Predictive Maintenance via Sensor Relationship Modeling
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-3 mb-12">
          <div className="rounded-3xl border border-border bg-white p-6">
            <p className="text-xs uppercase tracking-[0.24em] text-muted mb-3">Status</p>
            <p className="text-lg font-semibold text-text">Production Ready</p>
          </div>
          <div className="rounded-3xl border border-border bg-white p-6">
            <p className="text-xs uppercase tracking-[0.24em] text-muted mb-3">Framework</p>
            <p className="text-lg font-semibold text-text">PyTorch Geometric</p>
          </div>
          <div className="rounded-3xl border border-border bg-white p-6">
            <p className="text-xs uppercase tracking-[0.24em] text-muted mb-3">Role</p>
            <p className="text-lg font-semibold text-text">Research Lead</p>
          </div>
        </div>
      </div>

      <div className="grid gap-16 mb-20">
        <section>
          <SectionTitle title="Problem Statement" subtitle="" />
          <div className="prose prose-sm max-w-4xl">
            <p className="text-lg text-muted leading-8 mb-4">
              Traditional sequence models struggle with industrial equipment degradation:
            </p>
            <ul className="space-y-3 text-muted leading-7 ml-4">
              <li><strong>Sensor Dependencies Ignored:</strong> LSTM treats 21 sensors independently, misses cascading failures</li>
              <li><strong>No Fault Propagation Modeling:</strong> When one component fails, it affects others. Sequential models can't capture this</li>
              <li><strong>Flat Architecture:</strong> All sensors weighted equally, but some are more critical to engine health</li>
              <li><strong>Poor Generalization:</strong> Models don't learn transferable sensor relationships across engines</li>
            </ul>
            <p className="text-lg text-muted leading-8 mt-6">
              <strong>Insight:</strong> Turbofan engines are <em>systems of interacting components</em>. Model them as graphs where sensors are nodes and correlations are edges.
            </p>
          </div>
        </section>

        <section>
          <SectionTitle title="Graph Construction & Modeling" subtitle="" />
          <div className="space-y-4">
            <div className="rounded-3xl border border-border bg-white p-6">
              <h3 className="text-lg font-semibold text-text mb-3">Step 1: Correlation-Based Graph</h3>
              <p className="text-muted leading-7 mb-3">
                Compute Pearson correlation matrix on multivariate sensor time series. Threshold at τ = 0.3 to create sparse adjacency matrix:
              </p>
              <p className="text-muted font-mono text-sm">
                A<sub>ij</sub> = 1 if |corr(sensor_i, sensor_j)| &gt; τ
              </p>
            </div>
            <div className="rounded-3xl border border-border bg-white p-6">
              <h3 className="text-lg font-semibold text-text mb-3">Step 2: Node Features from Time Series</h3>
              <p className="text-muted leading-7">
                Each node represents a sensor's sliding time-window. Feature matrix H contains normalized sensor values across time steps. Represents temporal state of each component.
              </p>
            </div>
            <div className="rounded-3xl border border-border bg-white p-6">
              <h3 className="text-lg font-semibold text-text mb-3">Step 3: PyTorch Geometric Format</h3>
              <p className="text-muted leading-7">
                Convert NetworkX graphs to PyG Data objects with edge indices, node features, and edge weights. 21 sensors = 21 nodes. Dynamic graphs for each time step.
              </p>
            </div>
          </div>
        </section>

        <section>
          <SectionTitle title="GNN Architectures Implemented" subtitle="" />
          <div className="space-y-4">
            <div className="rounded-3xl border border-border bg-white p-6">
              <h3 className="text-lg font-semibold text-text mb-3">1. Graph Convolutional Network (GCN)</h3>
              <p className="text-muted leading-7 mb-3">
                Aggregates information from neighboring sensors:
              </p>
              <p className="text-muted font-mono text-sm">
                H<sup>(l+1)</sup> = σ(Ď<sup>-½</sup>ÂĎ<sup>-½</sup>H<sup>(l)</sup>W<sup>(l)</sup>)
              </p>
              <p className="text-muted leading-7 mt-3">
                Where Â = A + I (adjacency with self-loops), Ď = degree matrix, W<sup>(l)</sup> = learnable weights
              </p>
            </div>
            <div className="rounded-3xl border border-border bg-white p-6">
              <h3 className="text-lg font-semibold text-text mb-3">2. Graph Attention Network (GAT)</h3>
              <p className="text-muted leading-7 mb-3">
                Dynamically weights sensor importance during aggregation:
              </p>
              <p className="text-muted font-mono text-sm">
                h<sub>i</sub><sup>(l+1)</sup> = σ(Σ<sub>j∈N(i)</sub> α<sub>ij</sub>Wh<sub>j</sub><sup>(l)</sup>)
              </p>
              <p className="text-muted leading-7 mt-3">
                α<sub>ij</sub> = attention coefficient. GAT learns which sensors are critical to engine failure prediction as degradation progresses.
              </p>
            </div>
            <div className="rounded-3xl border border-border bg-white p-6">
              <h3 className="text-lg font-semibold text-text mb-3">3. Custom Message Passing Neural Network (MPNN)</h3>
              <p className="text-muted leading-7">
                Generalizes graph convolution with arbitrary message and update functions. Concatenates sender features, receiver features, and correlation coefficients before MLP transformation.
              </p>
            </div>
          </div>
        </section>

        <section>
          <SectionTitle title="Key Innovation: Attention Interpretability" subtitle="" />
          <div className="rounded-3xl border border-border bg-white p-6">
            <div className="space-y-4">
              <p className="text-muted leading-7">
                <strong>Why GAT Matters for Maintenance:</strong>
              </p>
              <ul className="space-y-2 text-muted text-sm ml-4">
                <li>• Model learns which sensors become critical as engine degrades</li>
                <li>• Attention weights reveal fault propagation pathways</li>
                <li>• Explainable predictions: "Engine failing because compressor temperature + pressure correlate with imminent failure"</li>
                <li>• Enables targeted maintenance: Fix high-attention sensors first</li>
              </ul>
              <p className="text-muted leading-7 mt-4">
                <strong>Real Finding:</strong> High-Pressure Compressor outlet temperature and bypass duct pressure consistently show highest attention near failure threshold.
              </p>
            </div>
          </div>
        </section>

        <section>
          <SectionTitle title="Dataset: NASA CMAPSS Turbofan" subtitle="" />
          <div className="rounded-3xl border border-border bg-white p-6">
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <h3 className="font-semibold text-text mb-3">Dataset Characteristics</h3>
                <ul className="space-y-2 text-muted text-sm ml-4">
                  <li>• 100 engines with degradation trajectories</li>
                  <li>• 21 sensors + 3 operational settings</li>
                  <li>• ~200K time steps total</li>
                  <li>• Ground truth RUL (Remaining Useful Life)</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-text mb-3">Task: RUL Prediction</h3>
                <ul className="space-y-2 text-muted text-sm ml-4">
                  <li>• Predict cycles until failure</li>
                  <li>• Regression target: RUL ∈ [0, max_cycles]</li>
                  <li>• Challenge: Sparse failure events</li>
                  <li>• Industrial relevance: Schedule maintenance proactively</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section>
          <SectionTitle title="Experimental Results" subtitle="" />
          <div className="rounded-3xl border border-border bg-white p-6">
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-text mb-3">GNN vs Baseline Performance</h3>
                <p className="text-muted leading-7 mb-3">
                  GNN models (GCN, GAT) significantly outperform sequential baselines on RUL prediction:
                </p>
                <ul className="space-y-2 text-muted text-sm ml-4">
                  <li>• <strong>LSTM:</strong> ~15% RMSE error (baseline)</li>
                  <li>• <strong>1D-CNN:</strong> ~13% RMSE error</li>
                  <li>• <strong>GCN:</strong> ~8% RMSE error ✓</li>
                  <li>• <strong>GAT:</strong> ~7% RMSE error ✓ (best)</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-text mb-3">Key Findings</h3>
                <ul className="space-y-2 text-muted text-sm ml-4">
                  <li>• GNN captures cascading fault propagation LSTM misses</li>
                  <li>• Attention visualization reveals critical sensor paths</li>
                  <li>• Sparse graph topology (τ=0.3) optimal for generalization</li>
                  <li>• Model transfers across different engine types</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section>
          <SectionTitle title="Tech Stack" subtitle="" />
          <div className="rounded-3xl border border-border bg-white p-6">
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <h3 className="font-semibold text-text mb-3">Core ML Stack</h3>
                <ul className="space-y-2 text-muted text-sm ml-4">
                  <li>• PyTorch (deep learning)</li>
                  <li>• PyTorch Geometric (GNN ops)</li>
                  <li>• NetworkX (graph construction)</li>
                  <li>• Pandas/NumPy (data processing)</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-text mb-3">Deployment & Visualization</h3>
                <ul className="space-y-2 text-muted text-sm ml-4">
                  <li>• Streamlit (interactive dashboard)</li>
                  <li>• Matplotlib/Seaborn (graphs)</li>
                  <li>• Scikit-learn (baselines)</li>
                  <li>• Docker (containerization)</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section>
          <SectionTitle title="Deliverables" subtitle="" />
          <div className="space-y-4">
            <div className="rounded-3xl border border-border bg-white p-6">
              <h3 className="text-lg font-semibold text-text mb-3">Streamlit Dashboard</h3>
              <p className="text-muted leading-7">
                Visualize sensor degradation trends, inferred sensor relationship graph topology, and predicted RUL vs ground truth for any engine.
              </p>
            </div>
            <div className="rounded-3xl border border-border bg-white p-6">
              <h3 className="text-lg font-semibold text-text mb-3">Modular Python Package</h3>
              <p className="text-muted leading-7">
                `src/` directory with data pipeline, graph construction, model implementations, training loop, and evaluation utilities.
              </p>
            </div>
            <div className="rounded-3xl border border-border bg-white p-6">
              <h3 className="text-lg font-semibold text-text mb-3">Jupyter Notebooks</h3>
              <p className="text-muted leading-7">
                Interactive EDA, visualization, and experiment notebooks for research reproducibility and knowledge sharing.
              </p>
            </div>
          </div>
        </section>

        <section>
          <SectionTitle title="Future Improvements" subtitle="" />
          <div className="space-y-3 text-muted leading-7">
            <p>• <strong>Dynamic Edge Generation:</strong> Adjacency matrix evolves during inference as engine degrades</p>
            <p>• <strong>Spatio-Temporal Graph Convolutions (ST-GCN):</strong> Interleave temporal and spatial convolutions explicitly</p>
            <p>• <strong>Bayesian Uncertainty Quantification:</strong> Confidence intervals around RUL predictions for safety-critical decisions</p>
            <p>• <strong>Transfer Learning:</strong> Pre-train on diverse engine types, fine-tune on specific aircraft</p>
          </div>
        </section>

        <section>
          <SectionTitle title="Links & Resources" subtitle="" />
          <div className="flex flex-wrap gap-4">
            <a
              href="https://github.com/Shridipa/Graph-Neural-Network"
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
