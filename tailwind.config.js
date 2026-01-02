/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1e40af', // More formal navy blue
          dark: '#1e3a8a',
          light: '#dbeafe',
        },
        accent: {
          DEFAULT: '#0891b2', // Professional teal
          dark: '#0e7490',
        },
        text: {
          primary: '#111827',
          secondary: '#6b7280',
          muted: '#9ca3af',
        },
        surface: '#f9fafb',
        border: {
          DEFAULT: '#e5e7eb',
          dark: '#d1d5db',
        },
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      borderRadius: {
        'sm': '2px',
        'md': '4px',
        'lg': '6px',
        'xl': '8px',
      },
      boxShadow: {
        'sm': '0 1px 2px rgba(0, 0, 0, 0.05)',
        'md': '0 2px 4px rgba(0, 0, 0, 0.08)',
        'lg': '0 4px 6px rgba(0, 0, 0, 0.1)',
        'xl': '0 8px 12px rgba(0, 0, 0, 0.12)',
      },
    },
  },
  plugins: [],
}
