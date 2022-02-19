module.exports = {
  mode: "jit",
  content: ["./src/**/*.{js,jsx,ts,tsx}", './public/index.html'],
  theme: {
    extend: {
      boxShadow: {
        "my": "0 1px 6px rgb(32 33 36 / 28%)"
      },
      fontFamily: {
        sans: [
          'Roboto',
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Helvetica Neue',
          'Arial',
          'Noto Sans',
          'sans-serif',
          'Apple Color Emoji',
          'Segoe UI Emoji',
          'Segoe UI Symbol',
          'Noto Color Emoji',
        ],
      },
      animation: {
        fade: 'fadeIn 300ms ease-in',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
      },
    },
  },
  plugins: [],
}
