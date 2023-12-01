/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{html,js,svelte,ts}'],
    theme: {
    extend: {
        fontFamily: {
            geist: ["Geist", 'serif'],
        },
        colors: {
            'lychee-green': '#23E91C',
        }
    },
    },
    plugins: [],
}

