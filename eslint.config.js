// eslint.config.js
import js from "@eslint/js";

export default [
  js.configs.recommended,
  {
    languageOptions: {
      globals: {
        // Allow Node.js built-ins
        require: "readonly",
        module: "readonly",
        exports: "readonly",
        console: "readonly",
        process: "readonly"
      }
    },
    rules: {
      "no-unused-vars": "warn",
      "no-undef": "off", // Disable 'no-undef' since Node globals are allowed
      "semi": ["error", "always"],
      "quotes": ["error", "double"]
    },
    ignores: ["node_modules/**", ".output/**"]
  }
];
