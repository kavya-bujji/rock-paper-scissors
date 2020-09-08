export default {
  breakpoints: {
    mobile: "425px",
    tablet: "768px",
    desktop: "1366px",
  },
  colors: {
    background:
      "radial-gradient(at top, hsl(214, 47%, 23%) 20%, hsl(237, 49%, 15%) 100%)",
    primary: {
      scissors: {
        light: "hsl(39, 89%, 49%)",
        dark: "hsl(39, 89%, 31%)",
      },
      paper: {
        light: "hsl(230, 89%, 62%)",
        dark: "hsl(230, 89%, 44%)",
      },
      rock: {
        light: "hsl(349, 70%, 56%)",
        background:
          "linear-gradient(to bottom, hsl(349, 71%, 52%) 0%, hsl(349, 70%, 56%) 100%)",
        dark: "hsl(349, 71%, 38%)",
      },
      lizard: "hsl(261, 73%, 60%)",
      cyan: "hsl(189, 59%, 53%)",
    },
    neutral: {
      darkText: "hsl(229, 25%, 31%)",
      scoreText: "hsl(229, 64%, 46%)",
      headerOutline: "hsl(217, 16%, 45%)",
      light: "#ccc",
    },
  },
  fonts: {
    family: "Barlow Semi Condensed",
    weights: {
      semiBold: 600,
      bold: 700,
    },
  },
};
