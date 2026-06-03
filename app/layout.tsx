import type { Metadata } from 'next';
import './globals.css';
import { Inter } from 'next/font/google';
import { Navbar } from '../components/navbar';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  title: 'Shridipa Dhar — AI and ML researcher',
  description: 'Portfolio for Shridipa Dhar, AI and ML researcher with research internship experience at ISI.',
  keywords: [
    'AI researcher',
    'ML researcher',
    'Research Intern',
    'AI Portfolio',
    'NLP',
    'Reinforcement Learning',
    'Knowledge Tracing'
  ],
  metadataBase: new URL('https://shridipad.com'),
  openGraph: {
    title: 'Shridipa Dhar — AI and ML researcher',
    description: 'AI and ML researcher portfolio highlighting research experience and projects.',
    type: 'website'
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} bg-background text-text antialiased`}>
        <div className="min-h-screen px-4 py-4 sm:px-6 lg:px-8">
          <Navbar />
          <main className="mx-auto w-full max-w-7xl flex flex-col gap-16 pb-16 pt-28">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
