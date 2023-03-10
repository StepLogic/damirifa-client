module.exports = {
  plugins: [
    "tailwindcss",
    "postcss-nesting",
    "postcss-flexbugs-fixes",
    // [
    //   "@fullhuman/postcss-purgecss",
    //   process.env.NODE_ENV === "production"
    //     ? {
    //         // the paths to all template files
    //         content: [
    //           "./pages/**/*.{js,ts,jsx,tsx}",
    //           "./src/**/*.{js,ts,jsx,tsx}",
    //         ],
    //         // function used to extract class names from the templates
    //         defaultExtractor: (content) =>
    //           content.match(/[\w-/:]+(?<!:)/g) || [],
    //       }
    //     : false,
    // ],
    [
      "postcss-preset-env",
      {
        autoprefixer: {
          flexbox: "no-2009",
        },
        stage: 3,
        features: {
          "custom-properties": false,
        },
      },
    ],
  ],
};
