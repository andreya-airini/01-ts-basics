import js from "@eslint/js";
import globals from "globals";
import { eslintPlugin as tsPlugin } from "@typescript-eslint/eslint-plugin";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs,ts,mts,cts}"],
    plugins: { js, '@typescript-eslint': tsPlugin },
    extends: ["js/recommended", "plugin:@typescript-eslint/recommended", "plugin:prettier/recommended"],
    languageOptions: {
      globals: globals.browser,
      parser: "@typescript-eslint/parser",
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
      },
    },
    rules: {
      "prettier/prettier": "error"
    },
  },
]);
