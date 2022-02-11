const plugin = require("tailwindcss/plugin");

module.exports = {
    content: ["./pages/**/*.jsx", "./components/**/*.jsx"],
    plugins: [
        plugin(function ({ addVariant }) {
            addVariant("not-placeholder-shown", "&:not(:placeholder-shown)");
            addVariant(
                "peer-not-placeholder-shown",
                ".peer:not(:placeholder-shown) ~ &",
            );
        }),
    ],
};
