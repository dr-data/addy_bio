import { defineConfig } from "windicss/helpers";
import formsPlugin from "windicss/plugin/forms";
import defaultTheme from "windicss/defaultTheme";
import colors from "windicss/colors";

export default defineConfig({
  extract: {
    include: ["**/*.{tsx,css}"],
    exclude: ["node_modules", ".git", ".next"],
  },
  darkMode: "media",
  theme: {
    fontFamily: {
      ...defaultTheme.fontFamily,
      sans: ["Inter", ...defaultTheme.fontFamily.sans],
    },
    extend: {
      colors: {
        gray: colors.trueGray,
        zink: colors.zink,
      },
    },
  },
  plugins: [formsPlugin],
});
