module.exports = {
  content: [
    "./public/index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        green: {
          50: '#f0fdf4',
          100: '#e8faf5',
          200: '#d1f2eb',
          300: '#a8e6d7',
          400: '#6dd5c3',
          500: '#4ebfa8',
          600: '#2ba88f',
          700: '#228877',
          800: '#1a6b62',
          900: '#12524d',
        },
        blue: {
          50: '#f0f8ff',
          100: '#e3f2fd',
          200: '#bbdefb',
          300: '#90caf9',
          400: '#64b5f6',
          500: '#2196f3',
          600: '#1976d2',
          700: '#1565c0',
          800: '#0d47a1',
          900: '#0c3a7d',
        }
      },
      fontFamily: {
        sans: ['system-ui', 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'sans-serif'],
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulse: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '.5' },
        },
      },
      animation: {
        float: 'float 3s ease-in-out infinite',
        fadeInUp: 'fadeInUp 0.6s ease-out',
        pulse: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
    },
  },
  plugins: [],
}
