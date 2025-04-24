/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/primevue/**/*.{vue,js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: 'var(--primary-color)',
        secondary: 'var(--secondary-color)',
        accent: 'var(--accent-color)',
        text: 'var(--text-color)',
        muted: 'var(--muted-text-color)',
        success: 'var(--success-color)',
        danger: 'var(--danger-color)',
        warning: 'var(--warning-color)',
      },
    },
  },
  plugins: [],
}
