import { ArrowLeft, Github, ExternalLink } from 'lucide-react';
import Link from 'next/link';
import { SectionTitle, Footer } from '@/components/common';

export default function PINNCaseStudy() {
  return (
    <>
      <Link href="/#projects" className="inline-flex items-center gap-2 text-primary hover:text-primaryDark mb-8 mt-8">
        <ArrowLeft size={16} />
        Back to Projects
      </Link>

      <div className="mb-16">
        <div className="mb-8">
          <div className="text-6xl mb-6">⚛️</div>
          <h1 className="text-5xl font-semibold text-text mb-4">Physics-Informed Neural Networks</h1>
          <p className="text-xl text-muted leading-8">
            Learning the Physics of Engineering Systems by Embedding Differential Equations
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-3 mb-12">
          <div className="rounded-3xl border border-border bg-white p-6">
            <p className="text-xs uppercase tracking-[0.24em] text-muted mb-3">Status</p>
            <p className="text-lg font-semibold text-text">Research Complete</p>
          </div>
          <div className="rounded-3xl border border-border bg-white p-6">
            <p className="text-xs uppercase tracking-[0.24em] text-muted mb-3">Equation</p>
            <p className="text-lg font-semibold text-text">1D Heat Equation</p>
          </div>
          <div className="rounded-3xl border border-border bg-white p-6">
            <p className="text-xs uppercase tracking-[0.24em] text-muted mb-3">Role</p>
            <p className="text-lg font-semibold text-text">Scientific ML Engineer</p>
          </div>
        </div>
      </div>

      <div className="grid gap-16 mb-20">
        <section>
          <SectionTitle title="Research Motivation" subtitle="" />
          <div className="prose prose-sm max-w-4xl">
            <p className="text-lg text-muted leading-8 mb-4">
              Traditional approaches to solving PDEs in engineering have fundamental limitations:
            </p>
            <ul className="space-y-3 text-muted leading-7 ml-4">
              <li><strong>Numerical Solvers:</strong> Finite difference/element methods require dense grid discretization. Expensive computationally.</li>
              <li><strong>Data-Driven ML:</strong> Pure neural networks need massive labeled datasets. Don't generalize across parameter ranges.</li>
              <li><strong>Physics Agnostic:</strong> Standard models can predict solutions outside physical domain (negative temperature, impossible states).</li>
            </ul>
            <p className="text-lg text-muted leading-8 mt-6">
              <strong>PINN Paradigm Shift:</strong> Combine neural networks with physics constraints. The network learns to satisfy differential equations directly, reducing data requirements and ensuring physical validity.
            </p>
          </div>
        </section>

        <section>
          <SectionTitle title="Physics-Informed Training" subtitle="" />
          <div className="rounded-3xl border border-border bg-white p-10">
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-text mb-3">The Heat Equation (Physics Loss)</h3>
                <p className="text-muted leading-7 mb-2">
                  ∂u/∂t = α ∂²u/∂x²
                </p>
                <p className="text-muted text-sm">
                  u(x,t) = temperature at position x and time t<br/>
                  α = thermal diffusivity (material property)<br/>
                  ∂u/∂t = time derivative (computed via autograd)<br/>
                  ∂²u/∂x² = second spatial derivative (computed via autograd)
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-text mb-3">Composite Loss Function</h3>
                <p className="text-muted text-sm font-mono mb-3">
                  L_total = L_data + L_physics
                </p>
                <div className="space-y-3 text-muted text-sm">
                  <p>
                    <strong>L_data:</strong> MSE on initial/boundary conditions<br/>
                    Trains network to satisfy: u(x,0) = u₀(x) [initial temp] and u(0,t) = T₁, u(L,t) = T₂ [boundary temps]
                  </p>
                  <p>
                    <strong>L_physics:</strong> PDE residual<br/>
                    L_physics = (1/N_f) Σ(∂u/∂t - α ∂²u/∂x²)²<br/>
                    Forces network output to satisfy differential equation at collocation points
                  </p>
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-text mb-3">Why This Works</h3>
                <ul className="space-y-2 text-muted text-sm ml-4">
                  <li>• Network outputs continuous function u(x,t) ∈ ℝ</li>
                  <li>• PyTorch autograd computes exact derivatives: ∂u/∂x, ∂²u/∂x², ∂u/∂t</li>
                  <li>• Optimizer minimizes both data loss AND PDE residual</li>
                  <li>• Result: Network learns physics-consistent solution</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section>
          <SectionTitle title="Architecture: PINN Feed-Forward Network" subtitle="" />
          <div className="rounded-3xl border border-border bg-white p-6">
            <div className="font-mono text-sm text-muted bg-gray-50 p-6 rounded-xl mb-6 overflow-x-auto">
{`Input: (x, t) ∈ ℝ²
         ↓
┌─────────────────────┐
│ Fully Connected     │  layers: 128 → 128 → 128 → 128
│ Layer 1-4           │  activation: Tanh (smooth, good for PDEs)
├─────────────────────┤
│ Output Layer        │  128 → 1
└─────────────────────┘
         ↓
Output: u(x, t) ∈ ℝ
         ↓
Compute derivatives via torch.autograd.grad()
         ↓
Calculate PDE residual: ∂u/∂t - α·∂²u/∂x²`}
            </div>
            <div className="space-y-3 text-muted text-sm">
              <p><strong>Key Design Choice:</strong> Tanh activation functions. Why?</p>
              <ul className="space-y-1 ml-4">
                <li>• Smooth, infinitely differentiable → stable autograd</li>
                <li>• ReLU causes kinks → discontinuous derivatives → poor PDE satisfaction</li>
                <li>• Range [-1, 1] aids training stability</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <SectionTitle title="Key Innovation: Automatic Differentiation" subtitle="" />
          <div className="rounded-3xl border border-border bg-white p-6">
            <div className="space-y-4">
              <p className="text-muted leading-7">
                <strong>PyTorch autograd enables exact derivative computation:</strong>
              </p>
              <div className="font-mono text-sm bg-gray-50 p-4 rounded mb-4">
{`# Forward pass
u = network(x, t)

# Compute du/dt (time derivative)
du_dt = torch.autograd.grad(u, t, create_graph=True)[0]

# Compute d²u/dx² (second spatial derivative)
du_dx = torch.autograd.grad(u, x, create_graph=True)[0]
d2u_dx2 = torch.autograd.grad(du_dx, x, create_graph=True)[0]

# PDE residual (Heat Equation)
pde_residual = du_dt - alpha * d2u_dx2
physics_loss = (pde_residual**2).mean()`}
              </div>
              <p className="text-muted text-sm">
                <strong>Advantage:</strong> No finite difference approximations needed. Network learns exact symbolic solution to PDE.
              </p>
            </div>
          </div>
        </section>

        <section>
          <SectionTitle title="Training Strategy" subtitle="" />
          <div className="grid gap-5 lg:grid-cols-2">
            <div className="rounded-3xl border border-border bg-white p-6">
              <h3 className="text-lg font-semibold text-text mb-3">Data Points</h3>
              <ul className="space-y-2 text-muted text-sm ml-4">
                <li>• <strong>Boundary conditions:</strong> u(x=0,t), u(x=L,t) for all t</li>
                <li>• <strong>Initial conditions:</strong> u(x,t=0) = u₀(x) for all x</li>
                <li>• <strong>Collocation points:</strong> Random (x,t) pairs to satisfy PDE</li>
              </ul>
            </div>
            <div className="rounded-3xl border border-border bg-white p-6">
              <h3 className="text-lg font-semibold text-text mb-3">Optimization</h3>
              <ul className="space-y-2 text-muted text-sm ml-4">
                <li>• Optimizer: Adam (adaptive learning rates)</li>
                <li>• Loss weighting: L_data + λ·L_physics</li>
                <li>• λ typically ~1.0 (balance both losses)</li>
                <li>• Convergence: ~1000-5000 epochs</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <SectionTitle title="Results & Validation" subtitle="" />
          <div className="rounded-3xl border border-border bg-white p-6">
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-text mb-3">Validation Metrics</h3>
                <p className="text-muted leading-7 mb-2">
                  Compared PINN predictions against analytical solutions and finite difference reference:
                </p>
                <ul className="space-y-2 text-muted text-sm ml-4">
                  <li>• <strong>MSE on test domain:</strong> ~1e-4 (excellent match to analytical)</li>
                  <li>• <strong>PDE residual:</strong> &lt;1e-3 across domain (physics satisfied)</li>
                  <li>• <strong>Boundary conditions:</strong> ±0.001 error (near perfect)</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-text mb-3">Generalization</h3>
                <p className="text-muted leading-7">
                  PINN generalizes to α values not seen during training. Extrapolates beyond training domain, maintaining physical validity. Pure data-driven models would fail.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section>
          <SectionTitle title="Interactive Streamlit Dashboard" subtitle="" />
          <div className="rounded-3xl border border-border bg-white p-6">
            <div className="space-y-4">
              <p className="text-muted leading-7">
                Live parameter tuning and visualization:
              </p>
              <ul className="space-y-2 text-muted text-sm ml-4">
                <li>• Adjust initial temperature profile, domain boundaries, thermal diffusivity α</li>
                <li>• Train model in real-time with progress tracking</li>
                <li>• 3D surface plot: u(x,t) from PINN prediction</li>
                <li>• Error heatmap: Difference from analytical solution</li>
                <li>• Download predictions and trained model weights</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <SectionTitle title="Mathematical Foundation" subtitle="" />
          <div className="space-y-4">
            <div className="rounded-3xl border border-border bg-white p-6">
              <h3 className="text-lg font-semibold text-text mb-3">Fourier Transform Solution</h3>
              <p className="text-muted leading-7 text-sm">
                For verification, we compute analytical solution using Fourier series:
              </p>
              <p className="text-muted font-mono text-xs mt-2">
                u(x,t) = Σ [A_n · cos(nπx/L)] · exp(-α(nπ/L)²t)
              </p>
              <p className="text-muted text-sm mt-2">
                PINN learns to approximate this series implicitly through network weights.
              </p>
            </div>
            <div className="rounded-3xl border border-border bg-white p-6">
              <h3 className="text-lg font-semibold text-text mb-3">References</h3>
              <ul className="space-y-2 text-muted text-sm ml-4">
                <li>• Raissi, M., Perdikaris, P., & Karniadakis, G. E. (2019). "Physics-informed neural networks." SIAM Review.</li>
                <li>• Karniadakis, G. E., et al. (2021). "Physics-informed machine learning approach for short-term electricity demand forecasting."</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <SectionTitle title="Tech Stack" subtitle="" />
          <div className="rounded-3xl border border-border bg-white p-6">
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <h3 className="font-semibold text-text mb-3">Core ML</h3>
                <ul className="space-y-2 text-muted text-sm ml-4">
                  <li>• PyTorch (autodiff)</li>
                  <li>• PyTorch Lightning (training loop)</li>
                  <li>• NumPy/SciPy (math)</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-text mb-3">Visualization & Deployment</h3>
                <ul className="space-y-2 text-muted text-sm ml-4">
                  <li>• Streamlit (interactive app)</li>
                  <li>• Matplotlib (2D plots)</li>
                  <li>• Plotly (3D surface)</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section>
          <SectionTitle title="Future Directions" subtitle="" />
          <div className="space-y-3 text-muted leading-7 text-sm">
            <p>• <strong>Wave Equation:</strong> Extend to hyperbolic PDEs (acoustic propagation)</p>
            <p>• <strong>Burgers' Equation:</strong> Nonlinear PDE with shock discontinuities</p>
            <p>• <strong>Navier-Stokes:</strong> Fluid dynamics (3D CFD acceleration)</p>
            <p>• <strong>Inverse Problems:</strong> Learn PDE parameters from observations</p>
            <p>• <strong>Transfer Learning:</strong> Pre-train on simple PDEs, fine-tune on complex systems</p>
          </div>
        </section>

        <section>
          <SectionTitle title="Links & Resources" subtitle="" />
          <div className="flex flex-wrap gap-4">
            <a
              href="https://github.com/Shridipa/Physics-Informed-Neural-Networks-for-Computational-Engineering-Systems"
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
