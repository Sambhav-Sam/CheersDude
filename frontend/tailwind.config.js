/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : {
      "green" : "#096656",
      // "customName" : "customProperty",
    },
    // "propertyName : {
    // "customName" : "customProperty" }
    fontFamily:{
      "primary" : [ "Open Sans", "sans-serif"]
    }
  }, 
},
  plugins: [require('daisyui')],
  daisyui: {
    themes: ['light'],
  }
}

