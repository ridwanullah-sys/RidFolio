/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            width: {
                128: "70rem",
            },
            height: {
                128: "45rem",
            },
            screens: {
                semimd: "1140px",
            },
        },
    },
    plugins: [],
}
