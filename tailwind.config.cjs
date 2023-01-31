/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}','./node_modules/flowbite/**/*.js'],
  theme: {
    extend: {
      colors: {
        'primary': '#0f142b',
      },
    }
  },
  plugins: [
    require('flowbite/plugin')
  ]
};