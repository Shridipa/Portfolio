'use client';

import { motion } from 'framer-motion';
import { FormEvent, useState } from 'react';
import { Send, Loader } from 'lucide-react';
import { GlassCard } from './common';

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setSubmitted(true);

    // Reset form
    setTimeout(() => {
      setSubmitted(false);
    }, 3000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <GlassCard className="mx-auto max-w-2xl">
        <form onSubmit={handleSubmit} className="space-y-6">
          {submitted ? (
            <div className="py-8 text-center">
              <p className="text-lg font-semibold text-green-400 mb-2">✓ Message sent successfully!</p>
              <p className="text-slate-400">I'll get back to you as soon as possible.</p>
            </div>
          ) : (
            <>
              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label className="block text-sm font-medium text-white mb-2">Name</label>
                  <input
                    type="text"
                    required
                    disabled={isSubmitting}
                    className="w-full rounded-lg bg-white/5 border border-white/10 px-4 py-3 text-white placeholder-slate-500 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/30 transition-all disabled:opacity-50"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-white mb-2">Email</label>
                  <input
                    type="email"
                    required
                    disabled={isSubmitting}
                    className="w-full rounded-lg bg-white/5 border border-white/10 px-4 py-3 text-white placeholder-slate-500 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/30 transition-all disabled:opacity-50"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-white mb-2">Subject</label>
                <input
                  type="text"
                  required
                  disabled={isSubmitting}
                  className="w-full rounded-lg bg-white/5 border border-white/10 px-4 py-3 text-white placeholder-slate-500 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/30 transition-all disabled:opacity-50"
                  placeholder="What is this about?"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-white mb-2">Message</label>
                <textarea
                  required
                  disabled={isSubmitting}
                  rows={6}
                  className="w-full rounded-lg bg-white/5 border border-white/10 px-4 py-3 text-white placeholder-slate-500 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/30 transition-all disabled:opacity-50 resize-none"
                  placeholder="Your message..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="group w-full inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 px-6 py-3 font-medium text-white transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <Loader size={18} className="animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <Send size={18} className="transition-transform group-hover:translate-x-1" />
                  </>
                )}
              </button>
            </>
          )}
        </form>
      </GlassCard>
    </motion.div>
  );
}
