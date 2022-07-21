module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontFamily: {
        'trueno': ["trueno", "sans-serif"],
        'kayak': ["kayak", "sans-serif"]
      },
      colors: {
        main: "#7ED320",
        accent: "#AEFD57",
        texty: "#1C4354"
      }
    }
  },
  plugins: []
};
