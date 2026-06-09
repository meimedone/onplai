import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        cream: '#F7F4EF', paper: '#FDFCFA', warm: '#EDE8E0', ink: '#1A1714', muted: '#5C5651', blue: '#3B6FBF'
      }
    }
  },
  plugins: []
}
export default config
