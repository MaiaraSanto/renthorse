import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',],
  theme: {
    fontFamily: {
    roboto: ['Roboto', 'sans-serif'],
    },
    screens: {
      xs: "300px",
      sm: "640px",
      md: "768px",
      lg: "1080px",
      xl: "1280px",
      "2xl": "1530px",
      'surfaceduo': {  min: '540px', max: '720px' },
      'tab': {  max: '600px' },
      'blackberryplaybook': {  min: '340px', max: '520px' }, // Para telas menores de 540px
      'jiophone': { max: '240px' }, // Para telas menores de 240px
  },
  
    extend: {
      
      transitionTimingFunction: {
        'in-expo': 'cubic-bezier(0.95, 0.05, 0.795, 0.035)',
        'out-expo': 'cubic-bezier(0.19, 1, 0.22, 1)',
       },
       
      colors: {
        SecondaryLight: '#16302A',
        Secondary: '#122620',
        Primary: '#B68D40',
        background: '#F4EBD0',
        tan: "#B68d40",
        cream: "#f4ebd0",
        charcoal: "#122620",
        gold: "#d66ad60"
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'heroImage': "url('/img/hero-pattern.svg')",
      },
    },
  },
  plugins: [],
}

export default config
