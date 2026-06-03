import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        background: '#FFFFFF',
        primary: '#065F46',
        primaryDark: '#064E3B',
        accent: '#10B981',
        text: '#111827',
        muted: '#6B7280',
        surface: '#F8FAFC',
        border: '#E5E7EB',
        hover: '#ECFDF5'
      },
      boxShadow: {
        card: '0 24px 64px rgba(6, 95, 70, 0.08)',
        soft: '0 16px 32px rgba(15, 23, 42, 0.08)'
      }
    }
  },
  plugins: []
};

export default config;
