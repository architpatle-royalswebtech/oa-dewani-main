import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class'],

  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],

  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        serif: ['var(--font-playfair)', 'Georgia', 'serif'],
      },

      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },

      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },

      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',

        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },

        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },

        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },

        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },

        'secondary-bright': 'hsl(var(--secondary-bright))',

        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },

        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },

        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },

        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',

        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))',
        },

        /* Primary brand palette — #0d1f3c */
        navy: {
          50: '#f1f4f8',
          100: '#e2e7ef',
          200: '#c5cfdd',
          300: '#9aaabd',
          400: '#6d8099',
          500: '#4b607c',
          600: '#354b68',
          700: '#263b57',
          800: '#172d49',
          900: '#0d1f3c',
          950: '#08152a',
        },

        /* Neutral supporting palette */
        slate: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
          950: '#020617',
        },

        /* Secondary brand palette — #b8973a */
        gold: {
          50: '#fbf8ee',
          100: '#f5efdc',
          200: '#eadfb9',
          300: '#ddcc91',
          400: '#ceb969',
          500: '#b8973a',
          600: '#9d7f2e',
          700: '#806625',
          800: '#66511f',
          900: '#504119',
          950: '#302710',
        },

        /* Soft teal — success / trust accent */
        teal: {
          50: '#f0fdfa',
          100: '#ccfbf1',
          200: '#99f6e4',
          300: '#5eead4',
          400: '#2dd4bf',
          500: '#14b8a6',
          600: '#0d9488',
          700: '#0f766e',
          800: '#115e59',
          900: '#134e4a',
          950: '#042f2e',
        },
      },

      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },

        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },

        'fade-in': {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },

        'fade-in-up': {
          from: { opacity: '0', transform: 'translateY(24px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },

        'fade-in-down': {
          from: { opacity: '0', transform: 'translateY(-24px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },

        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },

        marquee: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' },
        },
      },

      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'fade-in': 'fade-in 0.6s ease-out forwards',
        'fade-in-up':
          'fade-in-up 0.7s cubic-bezier(0.16,1,0.3,1) forwards',
        'fade-in-down':
          'fade-in-down 0.7s cubic-bezier(0.16,1,0.3,1) forwards',
        float: 'float 6s ease-in-out infinite',
        marquee: 'marquee 40s linear infinite',
      },

      boxShadow: {
        soft:
          '0 1px 3px rgb(0 0 0 / 0.04), 0 4px 12px -4px rgb(0 0 0 / 0.06)',

        card:
          '0 1px 2px rgb(0 0 0 / 0.04), 0 6px 20px -6px rgb(0 0 0 / 0.08)',

        'card-hover':
          '0 4px 8px -2px rgb(0 0 0 / 0.08), 0 16px 32px -8px rgb(0 0 0 / 0.14)',

        glow:
          '0 0 0 1px rgb(184 151 58 / 0.25), 0 6px 24px -4px rgb(184 151 58 / 0.30)',

        'navy-glow':
          '0 0 0 1px rgb(13 31 60 / 0.15), 0 8px 28px -4px rgb(13 31 60 / 0.22)',
      },
    },
  },

  plugins: [require('tailwindcss-animate')],
};

export default config;