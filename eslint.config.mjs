// @ts-check

import { defineConfig, globalIgnores } from "eslint/config";
import nextPlugin from "@next/eslint-plugin-next";
import eslintReact from "@eslint-react/eslint-plugin";
import tseslint from "typescript-eslint";
import globals from "globals";

const eslintConfig = defineConfig([
	{
		name: "jyz-land/base",
		files: ["**/*.{js,jsx,mjs,ts,tsx,mts,cts}"],
		languageOptions: {
			globals: { ...globals.browser, ...globals.node },
		},
	},
	{
		...nextPlugin.configs["core-web-vitals"],
		name: "jyz-land/next",
	},
	{
		...eslintReact.configs["recommended-typescript"],
		name: "jyz-land/react",
	},
	...tseslint.configs.recommended,
	globalIgnores([
		".next/**",
		"out/**",
		"build/**",
		"next-env.d.ts",
	]),
]);

export default eslintConfig;
