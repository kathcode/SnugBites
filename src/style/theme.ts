import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#5AA0E6",
      light: "#BFE0FF",
      dark: "#2F6FB3",
      contrastText: "#FFFFFF",
    }, // Sky Blue
    success: { main: "#52C29D" }, // Mint
    warning: { main: "#F2A65A" }, // Apricot
    secondary: { main: "#7E6BE8" }, // Lilac accent
    background: { default: "#F8FBFF", paper: "#FFFFFF" },
    text: { primary: "#0F172A", secondary: "#475569" },
  },
  shape: { borderRadius: 14 },
  typography: {
    fontFamily: "Inter, system-ui, -apple-system, Segoe UI, Roboto, sans-serif",
    h1: { fontWeight: 900 },
    h2: { fontWeight: 900 },
    h3: { fontWeight: 800 },
  },
});
export default theme;
