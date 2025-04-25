import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({ baseDirectory: __dirname });

const eslintConfig = [
  // keep all of Next’s defaults
  ...compat.extends("next/core-web-vitals", "next/typescript"),

  // now override the rules you don’t want to fail the build
  {
    rules: {
      // allow unused catch variables named “err” (or prefix with _ if you prefer)
      "@typescript-eslint/no-unused-vars": [
        "warn",
        { vars: "all", argsIgnorePattern: "^_", caughtErrors: "all" }
      ],

      // let you use <> and ’ in JSX without escaping
      "react/no-unescaped-entities": "warn",

      // allow raw <img>—you can switch to next/image later
      "@next/next/no-img-element": "warn",

      // relax “no-explicit-any”
      "@typescript-eslint/no-explicit-any": "warn",
    },
  },
];

export default eslintConfig;
