import theme from "@/configs/theme.ts";

export default {
  rtl: theme.isRTL,
  theme: {
    dark: theme.globalTheme === "dark",
    options: {
      customProperties: true,
    },
    themes: {
      dark: theme.dark,
      light: theme.light,
    },
  },
};
