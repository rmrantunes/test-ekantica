export const theme = {
  colors: {
    purple: "#6E54FF",
    white: "#FFFFFF",
    lightGray: "#F6F7FB",
    gray: "#6D828B",
    red: "#FE3636",
  },
  rounded: {
    full: "9999px",
    lg: "0.5rem",
  },
  shadow: {
    default: "0 0 12px 2px rgba(0, 0, 0, 0.1)",
  },
  transition: {
    default: "0.2s",
  },
} as const;

export type Theme = typeof theme;
