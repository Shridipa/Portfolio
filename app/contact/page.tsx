import { SectionTitle, GlassCard, Footer } from '@/components/common';
import { ContactForm } from '@/components/contact-form';
import { Mail, Linkedin, Github, ExternalLink, Download } from 'lucide-react';

export default function ContactPage() {
  return (
    <>
      <div className="pt-20">
        <SectionTitle
          title="Get In Touch"
          subtitle="Let's collaborate on AI research, machine learning projects, or learning opportunities"
        />

        <div className="grid gap-8 lg:grid-cols-2 mb-16">
          {/* Contact Form */}
          <div className="lg:col-span-1">
            <h2 className="text-2xl font-bold text-white mb-6">Send me a message</h2>
            <ContactForm />
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-1">
            <h2 className="text-2xl font-bold text-white mb-6">Connect with me</h2>
            <div className="space-y-4">
              {/* Email */}
              <GlassCard className="hover:border-blue-500/50">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-500/20">
                    <Mail size={24} className="text-blue-400" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white">Email</h3>
                    <a
                      href="mailto:shridipa@example.com"
                      className="text-slate-300 hover:text-blue-400 transition-colors"
                    >
                      shridipa@example.com
                    </a>
                  </div>
                </div>
              </GlassCard>

              {/* LinkedIn */}
              <GlassCard className="hover:border-blue-600/50">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-600/20">
                    <Linkedin size={24} className="text-blue-400" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white">LinkedIn</h3>
                    <a
                      href="https://linkedin.com/in/shridipa"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-300 hover:text-blue-400 transition-colors inline-flex items-center gap-2"
                    >
                      Connect on LinkedIn <ExternalLink size={16} />
                    </a>
                  </div>
                </div>
              </GlassCard>

              {/* GitHub */}
              <GlassCard className="hover:border-purple-500/50">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-purple-500/20">
                    <Github size={24} className="text-purple-400" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white">GitHub</h3>
                    <a
                      href="https://github.com/Shridipa"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-300 hover:text-purple-400 transition-colors inline-flex items-center gap-2"
                    >
                      @Shridipa <ExternalLink size={16} />
                    </a>
                  </div>
                </div>
              </GlassCard>

              {/* Resume */}
              <GlassCard className="hover:border-green-500/50">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-green-500/20">
                    <Download size={24} className="text-green-400" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white">Resume</h3>
                    <div className="space-y-2">
                    <a
                      href="/Shridipa_Dhar_Resume.pdf"
                      download
                      target="_blank"
                      rel="noreferrer"
                      className="text-slate-300 hover:text-green-400 transition-colors inline-flex items-center gap-2"
                    >
                      Download Resume <ExternalLink size={16} />
                    </a>
                    <a
                      href="/Shridipa_Dhar_Resume.pdf"
                      target="_blank"
                      rel="noreferrer"
                      className="text-slate-300 hover:text-green-400 transition-colors inline-flex items-center gap-2"
                    >
                      View Resume <ExternalLink size={16} />
                    </a>
                  </div>
                  </div>
                </div>
              </GlassCard>
            </div>
          </div>
        </div>

        {/* Opportunities */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-6">Opportunities I'm Interested In</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <GlassCard className="border-purple-500/20 bg-purple-500/5">
              <h3 className="font-bold text-purple-300 mb-2">🎓 Google Student Researcher</h3>
              <p className="text-sm text-slate-300">
                Passionate about contributing to cutting-edge AI research at Google and advancing the field of machine learning
              </p>
            </GlassCard>

            <GlassCard className="border-blue-500/20 bg-blue-500/5">
              <h3 className="font-bold text-blue-300 mb-2">🤖 AI/ML Research Internships</h3>
              <p className="text-sm text-slate-300">
                Seeking research positions in LLMs, RAG systems, knowledge tracing, and adaptive learning platforms
              </p>
            </GlassCard>

            <GlassCard className="border-green-500/20 bg-green-500/5">
              <h3 className="font-bold text-green-300 mb-2">💡 Research Collaborations</h3>
              <p className="text-sm text-slate-300">
                Open to collaborating on novel ML research, paper writing, and building research-grade systems
              </p>
            </GlassCard>

            <GlassCard className="border-indigo-500/20 bg-indigo-500/5">
              <h3 className="font-bold text-indigo-300 mb-2">🚀 ML Engineering Roles</h3>
              <p className="text-sm text-slate-300">
                Interested in building scalable ML systems, neural architectures, and intelligent applications
              </p>
            </GlassCard>
          </div>
        </div>

        {/* Key Qualifications */}
        <GlassCard className="mb-16 border-purple-500/20 bg-purple-500/10">
          <h2 className="text-2xl font-bold text-white mb-6">Why Work Together?</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <h3 className="font-bold text-purple-300 mb-2">✓ Research Focused</h3>
              <p className="text-sm text-slate-300">
                Strong background in research methodologies, rigorous experimentation, and model benchmarking
              </p>
            </div>

            <div>
              <h3 className="font-bold text-purple-300 mb-2">✓ Engineering Excellence</h3>
              <p className="text-sm text-slate-300">
                Production-grade systems experience with FastAPI, ML ops, and scalable infrastructure
              </p>
            </div>

            <div>
              <h3 className="font-bold text-purple-300 mb-2">✓ Leadership Oriented</h3>
              <p className="text-sm text-slate-300">
                Experience mentoring students, organizing events, and leading ML initiatives at scale
              </p>
            </div>

            <div>
              <h3 className="font-bold text-purple-300 mb-2">✓ Competitive Excellence</h3>
              <p className="text-sm text-slate-300">
                Top 800 RL Hackathon, Google Solution Challenge, and demonstrated technical depth
              </p>
            </div>
          </div>
        </GlassCard>

        {/* Response Time */}
        <GlassCard className="text-center">
          <p className="text-slate-300">
            💌 I typically respond to inquiries within <span className="font-bold text-white">24-48 hours</span>
          </p>
          <p className="text-sm text-slate-400 mt-2">
            Looking forward to connecting and exploring opportunities to make an impact together!
          </p>
        </GlassCard>
      </div>

      <Footer />
    </>
  );
}
