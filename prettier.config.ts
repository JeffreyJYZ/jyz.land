import type { Config } from "prettier";

const config: Config = {
	useTabs: true,
	tabWidth: 4,
	plugins: ["prettier-plugin-tailwindcss"],
	trailingComma: "all",
};

export default config;
