module.exports = {
  future: {
    purgeLayersByDefault: true,
    applyComplexClasses: true,
  },
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite-react/**/*.js",

    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        xsm: "345px",
        "2xl": "1536px",
        "3xl": "1936px",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "4rem",
          xl: "4.3rem",
          "2xl": "6rem",
        },
      },
      colors: {
        primary: "var(--damirifa-red)",
        "damirifa-black": "var(--damirifa-black)",
      },
      width: {
        "9/10": "90%",
      },
      fontSize: {
        xs: ".75rem",
        sm: ".875rem",
        tiny: ".875rem",
        "1sm": "clamp(0.9375rem,0.54vw + 0.475rem,1.125rem)",
        base: "1rem",
        "2base": "clamp(1.0625rem,0.54vw + 0.6rem,1.25rem)",
        lg: "1.125rem",
        xl: "1.25rem",
        "2xl": "1.5rem",
        "3xl": "1.875rem",
        "4xl": "2.25rem",
        "5xl": "3rem",
        "6xl": "4rem",
        "7xl": "5rem",
      },
      height: {
        30: "37.5rem",
      },
    },
  },
};
