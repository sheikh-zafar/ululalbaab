"use client"

import { createTheme } from "@mui/material/styles"

const theme = createTheme({
  palette: {
    primary: {
      light: "#f3d964", // A lighter shade for hover effects
      main: "#e0ba25", // Gold for primary CTAs and highlights
      dark: "#b08a00", // Darker gold for contrast
      contrastText: "#ffffff", // White for text on primary elements
    },
    secondary: {
      light: "#a0a0a0", // Softer gray for dividers and backgrounds
      main: "#6c6c6c", // Primary gray for UI elements and typography
      dark: "#4c4c4c", // Dark gray for deep contrast
      contrastText: "#ffffff",
    },
    background: {
      default: "#f9f9f9", // Light background for a fresh look
      paper: "#ffffff", // White for cards and sections
    },
    text: {
      primary: "#333333", // Dark gray for readability
      secondary: "#696969", // Muted text for descriptions
    },
    divider: "#dcdcdc", // Subtle light gray for separation
  },
  typography: {
    fontFamily: "var(--font-roboto)",
    h1: {
      fontSize: 36,
      fontWeight: 700,
      color: "#6c6c6c", // Primary gray for main headings
    },
    h2: {
      fontSize: 30,
      fontWeight: 700,
      color: "#6c6c6c",
    },
    h3: {
      fontSize: 24,
      fontWeight: 600,
      color: "#696969", // Darker gray for section titles
    },
    h4: {
      fontSize: 20,
      fontWeight: 600,
      color: "#696969",
    },
    body1: {
      fontSize: 16,
      fontWeight: 400,
      color: "#333333", // Dark gray for general text
    },
    body2: {
      fontSize: 14,
      fontWeight: 400,
      color: "#696969", // Subdued gray for secondary text
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 6,
          textTransform: "none",
          fontWeight: 600,
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiInputLabel-root": {
            color: "#696969", // Gray label text
          },
          "& .MuiInputLabel-root.Mui-focused": {
            color: "#e0ba25", // Gold when active
          },
          "& .MuiOutlinedInput-root": {
            backgroundColor: "#ffffff",
            borderRadius: 8,
            "& fieldset": {
              borderColor: "#dcdcdc",
            },
            "&:hover fieldset": {
              borderColor: "#e0ba25", // Gold on hover
            },
            "&.Mui-focused fieldset": {
              borderColor: "#e0ba25",
            },
          },
        },
      },
    },
  },
})

export default theme
