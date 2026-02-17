import {
  defineConfig,
  presetUno,
  presetAttributify,
  presetWebFonts,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'

export default defineConfig({
  presets: [
    presetUno(),
    presetAttributify(),
    presetWebFonts({
      fonts: {
        sans: 'Inter:300,400,500,600,700,800,900',
      },
    }),
  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],
  theme: {
    colors: {
      primary: {
        50: '#eef2ff',
        100: '#e0e7ff',
        200: '#c7d2fe',
        300: '#a5b4fc',
        400: '#818cf8',
        500: '#6366f1',
        600: '#4f46e5',
        700: '#4338ca',
        800: '#3730a3',
        900: '#312e81',
        950: '#1e1b4b',
      },
      accent: {
        50: '#faf5ff',
        100: '#f3e8ff',
        200: '#e9d5ff',
        300: '#d8b4fe',
        400: '#c084fc',
        500: '#a855f7',
        600: '#9333ea',
        700: '#7e22ce',
        800: '#6b21a8',
        900: '#581c87',
      },
      surface: {
        50: '#fafafa',
        100: '#f5f5f5',
        200: '#e5e5e5',
        300: '#d4d4d4',
        400: '#a3a3a3',
        500: '#737373',
        600: '#525252',
        700: '#404040',
        800: '#262626',
        900: '#171717',
      },
    },
    breakpoints: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
  },
  shortcuts: [
    ['container-main', 'max-w-6xl mx-auto px-4 sm:px-6'],
    ['section-spacing', 'py-12 md:py-20'],
    ['btn-primary', 'inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-primary-600 to-accent-600 text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-primary-500/25 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer border-none text-base'],
    ['btn-outline', 'inline-flex items-center justify-center px-6 py-3 border-2 border-primary-600 text-primary-600 font-semibold rounded-xl transition-all duration-300 hover:bg-primary-600 hover:text-white hover:-translate-y-0.5 cursor-pointer bg-transparent text-base'],
    ['card-base', 'bg-white rounded-2xl shadow-sm border border-surface-100 transition-all duration-300 hover:shadow-xl hover:shadow-primary-500/10 hover:-translate-y-1'],
    ['gradient-text', 'bg-gradient-to-r from-primary-600 via-accent-500 to-primary-600 bg-clip-text text-transparent'],
    ['input-base', 'w-full px-4 py-3 rounded-xl border border-surface-200 bg-white text-surface-900 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary-500/40 focus:border-primary-500 placeholder-surface-400'],
  ],
  rules: [
    ['animate-fade-up', { animation: 'fadeUp 0.6s ease-out forwards' }],
    ['animate-fade-in', { animation: 'fadeIn 0.8s ease-out forwards' }],
    ['animate-slide-in', { animation: 'slideIn 0.5s ease-out forwards' }],
    ['backdrop-blur-nav', { 'backdrop-filter': 'blur(20px)', '-webkit-backdrop-filter': 'blur(20px)' }],
  ],
  preflights: [
    {
      getCSS: () => `
        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes gradientShift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        html {
          scroll-behavior: smooth;
        }
        body {
          font-family: 'Inter', system-ui, -apple-system, sans-serif;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }
      `,
    },
  ],
})
