/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        extend: {
            colors: {
                sparkPeach: '#FFF5EC',
                sparkBlue: '#005370',
                sparkRaspberry: '#E84853',
                sparkPink: '#D881AB',
                sparkOrange: '#E69649',
                sparkBody: '#1C1917',
                sparkHeader: '#292524',
            },
            fontFamily: {
                display: ['Mikela', 'sans-serif'],
            },
        },
    },
    plugins: [
        require('@tailwindcss/typography'),
        require('@tailwindcss/forms'),
        require('@tailwindcss/container-queries'),
    ],
};
