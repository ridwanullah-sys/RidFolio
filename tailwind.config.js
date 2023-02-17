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
            animation: {
                slideInB: "slideInB 1s",
                slideInS: "slideInS 1s",
                navBar: "navBar 1s",
            },
            keyframes: {
                slideInB: {
                    "0%": { transform: "translateX(3.5rem)" },
                    "100%": { transform: "translateX(0rem)" },
                },
                slideInS: {
                    "0%": { transform: "translateY(5rem)" },
                    "100%": { transform: "translateY(0rem)" },
                },
                navBar: {
                    "0%": { transform: "translateY(-5rem)" },
                    "100%": { transform: "translateY(0rem)" },
                },
            },
        },
    },
    plugins: [],
}
