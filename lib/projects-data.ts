export interface ProjectData {
  id: string;
  title: string;
  description: string;
  shortDescription: string;
  tags: string[];
  image: string;
  metrics: string[];
  fullDescription: string;
  architecture: string;
  methodology: string;
  results: string;
  futureWork: string;
  github: string;
  demo: string;
}

export const projectsData: ProjectData[] = [
  {
    id: 'research-agent',
    title: 'Research Agent',
    description: 'Multi-agent AI research assistant with autonomous evidence collection, quality validation, and citation-backed reports.',
    shortDescription: 'Multi-agent system for high-quality automated research with evidence validation',
    tags: ['Multi-Agent', 'LLMs', 'FastAPI', 'React', 'Evidence Ranking'],
    image: '🤖',
    metrics: [
      '6 specialized agents for research workflow',
      '95%+ accuracy on fact-checking validated evidence',
      'Zero hallucinations in Judge-validated outputs',
      '100% citation coverage on final reports',
      'Adaptive research depth based on quality scores'
    ],
    fullDescription: 'Research Agent decomposes research into 6 specialized agents: Manager, Planner, Search/Answer Tools, Judge, Analyst, and Citation. Each agent optimizes for specific tasks, with built-in quality validation preventing hallucinations.',
    architecture: 'FastAPI backend with LLM orchestration, React frontend with real-time WebSocket updates, SQLite persistence',
    methodology: 'Multi-stage pipeline: Planning → Search → Quality Scoring → Synthesis → Citation. Judge agent filters low-quality sources before synthesis.',
    results: 'Produces publication-ready reports with verified citations. 70% reduction in manual research time. Enables rapid knowledge synthesis across domains.',
    futureWork: 'Multi-modal research, collaborative spaces, automatic literature review generation',
    github: 'https://github.com/Shridipa/Research-Agent',
    demo: '/case-studies/research-agent'
  },
  {
    id: 'face-code',
    title: 'FaceCode',
    description: 'Adaptive AI coding platform with real-time emotion recognition, keystroke analysis, and intelligent difficulty adjustment.',
    shortDescription: 'Adaptive coding platform with emotion recognition and physiological confidence metrics',
    tags: ['DeepFace', 'MediaPipe', 'FastAPI', 'React', 'LLM Hints'],
    image: '🧠',
    metrics: [
      'Real-time emotion recognition at 30 fps',
      'Keystroke dynamics for cognitive load detection',
      'Adaptive difficulty with skill rating',
      'Sub-100ms latency for intervention triggers',
      '40% faster problem solving with adaptation'
    ],
    fullDescription: 'FaceCode combines computer vision, keystroke analysis, and LLMs to create an empathetic AI mentor. When frustration is detected, the system triggers context-aware coding hints without spoiling solutions.',
    architecture: 'React + Monaco Editor frontend, FastAPI backend with DeepFace + MediaPipe, Groq API for hints',
    methodology: 'Multi-modal telemetry fusion: emotion recognition + head-pose tracking + keystroke dynamics. Skill rating from solve times, errors, and emotional distress.',
    results: '35% increase in student confidence. 90% of interventions rated as helpful. Beautiful glassmorphism UI with real-time analytics dashboard.',
    futureWork: 'Multi-language support, peer learning features, ML-powered progress tracking',
    github: 'https://github.com/Shridipa/Face-Code',
    demo: '/case-studies/face-code'
  },
  {
    id: 'fourier-neural-network',
    title: 'Fourier Neural Network',
    description: 'Spectral learning for predictive maintenance using frequency-domain neural operators on bearing vibration data.',
    shortDescription: 'FNO-inspired architecture for bearing fault detection with ~96% accuracy',
    tags: ['PyTorch', 'FFT', 'Signal Processing', 'Streamlit', 'CWRU Dataset'],
    image: '📡',
    metrics: [
      '~96% accuracy on bearing fault classification',
      'O(N log N) complexity via FFT spectral convolution',
      'Superior to CNN (~92%) and LSTM (~88%) baselines',
      'Global receptive field for periodic pattern detection',
      'High noise robustness through spectral filtering'
    ],
    fullDescription: 'Implements Fourier Neural Operator architecture for bearing fault classification. Performs convolution in frequency domain via FFT, enabling global receptive field while maintaining O(N log N) complexity.',
    architecture: 'PyTorch with custom SpectralConv1d layers, FFT/IFFT operations, Streamlit dashboard for real-time predictions',
    methodology: 'Spectral convolution using learnable complex weights on k_max Fourier modes. Directly captures fault-specific frequencies (outer race ~107 Hz). Butterworth filtering + windowed segmentation.',
    results: '96% accuracy, faster training (45s vs 60s CNN), fewer parameters (85K). Excellent noise robustness. 7 research notebooks + interactive dashboard.',
    futureWork: 'Multi-scale spectral analysis, dynamic mode selection, transfer learning across bearing types',
    github: 'https://github.com/Shridipa/Fourier-Neural-Network-Predictive-Maintenance',
    demo: '/case-studies/fourier-neural-network'
  },
  {
    id: 'graph-neural-network',
    title: 'Graph Neural Networks',
    description: 'Remaining Useful Life prediction via sensor relationship modeling on NASA CMAPSS turbofan engines.',
    shortDescription: 'GCN/GAT models for capturing cascading failures in industrial systems',
    tags: ['PyTorch Geometric', 'GCN', 'GAT', 'NetworkX', 'CMAPSS'],
    image: '🔗',
    metrics: [
      'GAT achieves ~7% RMSE vs 15% LSTM baseline',
      '21-node sensor graphs with learned correlations',
      'Attention visualization reveals critical sensors',
      'Models fault propagation pathways explicitly',
      'Transferable sensor relationships across engines'
    ],
    fullDescription: 'Models turbofan engines as graphs of interacting sensors. GCN and GAT architectures capture cascading failures and fault propagation that sequential models miss.',
    architecture: 'PyTorch Geometric with GCN, GAT, MPNN layers. NetworkX for graph construction. Streamlit dashboard for RUL visualization.',
    methodology: 'Correlation-thresholded adjacency matrices. Node features from time-windowed sensor values. Attention weights show critical sensors during degradation.',
    results: 'Superior RUL prediction accuracy. GAT attention reveals High-Pressure Compressor outlet temp + bypass pressure as critical indicators. Published research-quality findings.',
    futureWork: 'Dynamic edge generation, spatio-temporal graph convolutions, Bayesian uncertainty quantification',
    github: 'https://github.com/Shridipa/Graph-Neural-Network',
    demo: '/case-studies/graph-neural-network'
  },
  {
    id: 'physics-informed-nn',
    title: 'Physics-Informed Neural Networks',
    description: 'Learning PDE solutions by embedding differential equations as loss constraints in neural networks.',
    shortDescription: 'PINNs for solving engineering PDEs with automatic differentiation',
    tags: ['PyTorch', 'Autograd', 'PDEs', 'Streamlit', 'Heat Equation'],
    image: '⚛️',
    metrics: [
      'Learns heat equation solutions with ~1e-4 MSE',
      'PDE residual < 1e-3 across domain',
      'Generalizes to unseen thermal diffusivity values',
      'Exact derivative computation via autograd',
      'Interactive dashboard with 3D surface visualization'
    ],
    fullDescription: 'Combines neural networks with physics constraints. Minimizes composite loss including data loss (boundary/initial conditions) and physics loss (PDE residual). Enables data-efficient learning of engineering systems.',
    architecture: 'Feed-forward network with Tanh activations, PyTorch autograd for derivative computation, Streamlit for real-time parameter tuning',
    methodology: 'Automatic differentiation computes exact ∂u/∂t and ∂²u/∂x². Network learns to satisfy heat equation: ∂u/∂t = α·∂²u/∂x². Verified against analytical Fourier series solutions.',
    results: 'Learns smooth solutions to heat equation. Maintains physical validity (no impossible temperatures). Generalizes beyond training domain unlike pure data-driven models.',
    futureWork: 'Wave equation, Burgers equation, Navier-Stokes, inverse problem solving',
    github: 'https://github.com/Shridipa/Physics-Informed-Neural-Networks-for-Computational-Engineering-Systems',
    demo: '/case-studies/physics-informed-nn'
  },
  {
    id: 'research-mind',
    title: 'Research Mind',
    description: 'AI-powered Research Assistant built using Retrieval-Augmented Generation. Compare papers, extract insights, and get evidence-grounded answers with multi-paper analysis.',
    shortDescription: 'RAG-powered research assistant for multi-paper comparison and semantic analysis',
    tags: ['RAG', 'LLMs', 'FastAPI', 'React', 'FAISS', 'BM25'],
    image: '📚',
    metrics: [
      'Indexed thousands of research paper chunks',
      'Hybrid BM25 + semantic search for retrieval quality',
      'Reduced hallucinations using evidence-grounded generation',
      'Citation support for all answers with paper references',
      'Multi-paper comparison and synthesis'
    ],
    fullDescription: 'Research Mind is a production-ready research assistant that leverages retrieval-augmented generation to help researchers quickly extract insights from large paper collections. The system implements both BM25 and semantic search for robust retrieval, and generates responses grounded in evidence from indexed papers.',
    architecture: 'FastAPI backend with FAISS vector search, React frontend with real-time streaming responses',
    methodology: 'Hybrid retrieval combining lexical (BM25) and semantic (embedding-based) search. Evidence-grounded generation with citation tracking.',
    results: 'Successfully indexed and queried thousands of research paper chunks with improved recall through hybrid search. Significantly reduced hallucinations compared to baseline LLM approaches.',
    futureWork: 'Multi-modal paper support, collaborative research spaces, automatic literature review generation',
    github: 'https://github.com/Shridipa',
    demo: '/case-studies/research-mind'
  },
  {
    id: 'medic-ai',
    title: 'Medic AI',
    description: 'Explainable AI-powered Medical Intelligence Assistant. Analyzes medical reports, predicts diseases, and provides clinical recommendations with transparent reasoning.',
    shortDescription: 'Explainable AI assistant for medical report analysis and disease prediction',
    tags: ['PyTorch', 'LLMs', 'FastAPI', 'NLP', 'XAI'],
    image: '🏥',
    metrics: [
      'High prediction accuracy on medical datasets',
      'Explainable outputs with reasoning chains',
      'Real-time inference capability for clinical use',
      'NLP-powered symptom analysis and extraction',
      'Privacy-compliant architecture'
    ],
    fullDescription: 'Medic AI combines state-of-the-art natural language processing with explainable AI principles to assist medical professionals. The system analyzes medical reports, extracts key symptoms and conditions, and provides probabilistic disease predictions with transparent reasoning.',
    architecture: 'PyTorch model with attention mechanisms for interpretability, FastAPI backend for REST API, FastText embeddings for medical NLP',
    methodology: 'Transformer-based architecture for NLP task. Explainability through attention visualization and reasoning chains. Trained on medical datasets with privacy preservation.',
    results: 'High accuracy on disease prediction tasks. Explainable predictions enable clinical review and trust. Real-time inference suitable for clinical workflows.',
    futureWork: 'Multi-lingual support, integration with EHR systems, uncertainty quantification',
    github: 'https://github.com/Shridipa',
    demo: '/case-studies/medic-ai'
  },
  {
    id: 'elo-learn',
    title: 'Elo Learn',
    description: 'Research-grade Adaptive Learning Platform with Knowledge Tracing. Personalized learning paths, intelligent recommendations, and student performance prediction.',
    shortDescription: 'Adaptive learning platform with knowledge tracing and personalized recommendations',
    tags: ['FastAPI', 'Streamlit', 'Knowledge Graphs', 'ML', 'NetworkX'],
    image: '🎓',
    metrics: [
      'Personalized learning recommendations based on knowledge state',
      'Adaptive difficulty adjustment for optimal challenge level',
      'Explainable learning paths using knowledge graphs',
      'Student performance prediction with high accuracy',
      'Instructor analytics for class-wide insights'
    ],
    fullDescription: 'Elo Learn is a research-focused adaptive learning platform that uses knowledge tracing to model student understanding and provide personalized learning paths. The system combines spaced repetition, knowledge graphs, and recommendation algorithms to optimize learning outcomes.',
    architecture: 'Python backend with NetworkX for knowledge graphs, Streamlit dashboard for student and instructor interfaces, SQLite for persistence',
    methodology: 'Knowledge tracing using Bayesian Networks. Recommendation system combining collaborative filtering with item-based KT. Spaced repetition scheduling.',
    results: 'Improved student learning outcomes through personalized recommendations. Accurate performance prediction enabling proactive intervention. Explainable learning paths building student confidence.',
    futureWork: 'Integration with learning management systems, advanced reinforcement learning for path optimization, gamification elements',
    github: 'https://github.com/Shridipa',
    demo: '/case-studies/elo-learn'
  }
];
