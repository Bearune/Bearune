module.exports = {
  content: [
    './assets/**/*.{vue,js,scss}', // 包括 SCSS 文件
    './components/**/*.{vue,js}',
    './pages/**/*.{vue,js}',
    './app.vue',
  ],
  theme: {
    screens: {
      '2xl': { max: '1440px' },
      'xl': { max: '1200px' },
      'lg': { max: '990px' },
      'md': { max: '768px' },
      'sm': { max: '640px' },
    },
    extend: {
      containers: {
        '7xl': '80rem',
        '6xl': '72rem',
        '5xl': '64rem',
        '4xl': '56rem',
        '3xl': '48rem',
        '2xl': '42rem',
        'xl': '36rem',
        'lg': '32rem',
        'md': '28rem',
        'sm': '24rem',
        'xs': '20rem',
      },
      colors: {
        primary: {
          DEFAULT: 'oklch(var(--primary)/ var(--tw-bg-opacity, 1))',
          content: 'oklch(var(--primary-content)/ var(--tw-bg-opacity, 1))',
          focus: 'oklch(var(--primary-focus)/ var(--tw-bg-opacity, 1))', // Primary 焦點顏色
        },
        secondary: {
          DEFAULT: 'oklch(var(--secondary)/ var(--tw-bg-opacity, 1))',
          content: 'oklch(var(--secondary-content)/ var(--tw-bg-opacity, 1))',
          focus: 'oklch(var(--secondary-focus)/ var(--tw-bg-opacity, 1))', // Secondary 焦點顏色
        },
        accent: {
          DEFAULT: 'oklch(var(--accent)/ var(--tw-bg-opacity, 1))',
          content: 'oklch(var(--accent-content)/ var(--tw-bg-opacity, 1))',
          focus: 'oklch(var(--accent-focus)/ var(--tw-bg-opacity, 1))', // Accent 焦點顏色
        },
        neutral: {
          DEFAULT: 'oklch(var(--neutral)/ var(--tw-bg-opacity, 1))',
          content: 'oklch(var(--neutral-content)/ var(--tw-bg-opacity, 1))',
          focus: 'oklch(var(--neutral-focus)/ var(--tw-bg-opacity, 1))', // Neutral 焦點顏色
        },
        base: {
          100: 'oklch(var(--base-100)/ var(--tw-bg-opacity, 1))', // 基底顏色
          200: 'oklch(var(--base-200)/ var(--tw-bg-opacity, 1))',
          300: 'oklch(var(--base-300)/ var(--tw-bg-opacity, 1))',
          400: 'oklch(var(--base-400)/ var(--tw-bg-opacity, 1))',
          content: 'oklch(var(--base-content)/ var(--tw-bg-opacity, 1))',
          focus: 'oklch(var(--base-focus)/ var(--tw-bg-opacity, 1))', // Base 焦點顏色
        },
        info: {
          DEFAULT: 'oklch(var(--info)/ var(--tw-bg-opacity, 1))',
          content: 'oklch(var(--info-content)/ var(--tw-bg-opacity, 1))',
          focus: 'oklch(var(--info-focus)/ var(--tw-bg-opacity, 1))', // Info 焦點顏色
        },
        success: {
          DEFAULT: 'oklch(var(--success)/ var(--tw-bg-opacity, 1))',
          content: 'oklch(var(--success-content)/ var(--tw-bg-opacity, 1))',
          focus: 'oklch(var(--success-focus)/ var(--tw-bg-opacity, 1))', // Success 焦點顏色
        },
        warning: {
          DEFAULT: 'oklch(var(--warning)/ var(--tw-bg-opacity, 1))',
          content: 'oklch(var(--warning-content)/ var(--tw-bg-opacity, 1))',
          focus: 'oklch(var(--warning-focus)/ var(--tw-bg-opacity, 1))', // Warning 焦點顏色
        },
        error: {
          DEFAULT: 'oklch(var(--error)/ var(--tw-bg-opacity, 1))',
          content: 'oklch(var(--error-content)/ var(--tw-bg-opacity, 1))',
          focus: 'oklch(var(--error-focus)/ var(--tw-bg-opacity, 1))', // Error 焦點顏色
        },
      },
      borderRadius: {
        'box': 'var(--rounded-box)',
        'btn': 'var(--rounded-btn)',
        'badge': 'var(--rounded-badge)',
        'tab': 'var(--tab-radius)',
      },
      transitionDuration: {
        'btn': 'var(--animation-btn)',
        'input': 'var(--animation-input)',
      },
      scale: {
        'btn-focus': 'var(--btn-focus-scale)',
      },
    },
  },
  corePlugins: {
    preflight: true,
  },
  darkMode: ['selector', '[data-theme="dark"]'],
  plugins: [require('tailwindcss-animate'), require('@tailwindcss/container-queries'),],
};
