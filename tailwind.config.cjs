/**
 * Tailwind CSS configuration
 *
 * This configuration defines a neutral base palette and custom
 * branding colours for Frantex International Fashion. It also sets
 * up the default font families for body text and headings. The
 * `content` array tells Tailwind where to look for class names so
 * unused styles can be purged in production.
 */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0A355C', // deep navy
          light: '#264D73',
          dark: '#062042',
        },
        accent: {
          DEFAULT: '#C4312F', // warm red
          light: '#D94A4A',
          dark: '#842122',
        },
        neutral: {
          50: '#F9FAFB',
          100: '#F3F4F6',
          200: '#E5E7EB',
          300: '#D1D5DB',
          400: '#9CA3AF',
          500: '#6B7280',
          600: '#4B5563',
          700: '#374151',
          800: '#1F2937',
          900: '#111827',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
    },
  },
  plugins: [],
};