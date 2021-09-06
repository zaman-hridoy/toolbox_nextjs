import { createTheme } from "@material-ui/core/styles";

const primaryColor = "#F2684A";
const secondaryColor = "#aaa";
const textPrimaryColor = "#3D3D3D";
const textSecondaryColor = "#aaa";
const mediumDark = "#555555";
const white = "#FFFFFF";
const gradient = "linear-gradient(158.81deg, #009FFD 0%, #2A2A72 100%)";

const theme = createTheme({
  palette: {
    primary: {
      main: primaryColor,
    },
    secondary: {
      main: secondaryColor,
    },
    text: {
      primary: textPrimaryColor,
      secondary: textSecondaryColor,
    },
    common: {
      dark: mediumDark,
      white: white,
      gradient: gradient,
    },
  },
  typography: {
    fontFamily: ["Open Sans", "Roboto", "sans-serif"].join(","),
    h1: {
      fontFamily: "Open Sans",
      fontStyle: "normal",
      fontWeight: 300,
      fontSize: "96px",
      lineHeight: "100px",
      letterSpacing: "-0.015em",
    },
    h2: {
      fontFamily: "Open Sans",
      fontStyle: "normal",
      fontWeight: 300,
      fontSize: "60px",
      lineHeight: "70px",
      letterSpacing: "-0.005em",
    },
    h3: {
      fontFamily: "Open Sans",
      fontStyle: "normal",
      fontWeight: "normal",
      fontSize: "48px",
      lineHeight: "50px",
    },
    h4: {
      fontFamily: "Open Sans",
      fontStyle: "normal",
      fontWeight: "normal",
      fontSize: "34px",
      lineHeight: "45px",
      letterSpacing: "0.0025em",
    },
    h5: {
      fontFamily: "Open Sans",
      fontStyle: "normal",
      fontWeight: "normal",
      fontSize: "24px",
      lineHeight: "20px",
    },
    h6: {
      fontFamily: "Open Sans",
      fontStyle: "normal",
      fontWeight: "normal",
      fontSize: "20px",
      lineHeight: "20px",
      letterSpacing: "0.015em",
    },
    subtitle1: {
      fontFamily: "Roboto",
      fontStyle: "normal",
      fontWeight: "normal",
      fontSize: "16px",
      lineHeight: "20px",
      letterSpacing: "0.015em",
    },
    subtitle2: {
      fontFamily: "Roboto",
      fontStyle: "normal",
      fontWeight: 500,
      fontSize: "14px",
      lineHeight: "20px",
      letterSpacing: "0.001em",
    },
    body1: {
      fontFamily: "Roboto",
      fontStyle: "normal",
      fontWeight: "normal",
      fontSize: "16px",
      lineHeight: "20px",
      letterSpacing: "0.005em",
    },
    body2: {
      fontFamily: "Roboto",
      fontStyle: "normal",
      fontWeight: "normal",
      fontSize: "14px",
      lineHeight: "20px",
      letterSpacing: "0.0025em",
    },
    button: {
      fontFamily: "Roboto",
      fontStyle: "normal",
      fontWeight: 500,
      fontSize: "16px",
      lineHeight: "20px",
      letterSpacing: "0.0125em",
      textTransform: "none",
    },
    caption: {
      fontFamily: "Roboto",
      fontStyle: "normal",
      fontWeight: 500,
      fontSize: "12px",
      lineHeight: "20px",
      letterSpacing: "0.004em",
      textTransform: "uppercase",
    },
    overline: {
      fontFamily: "Roboto",
      fontStyle: "normal",
      fontWeight: "normal",
      fontSize: "14px",
      lineHeight: "20px",
      letterSpacing: "0.015em",
      textTransform: "none",
    },
  },
  overrides: {
    MuiOutlinedInput: {
      root: {
        height: 40,
        color: primaryColor,
        borderRadius: 8,
        "& $notchedOutline": {
          borderColor: textPrimaryColor,
        },
        "&:hover:not($disabled):not($focused):not($error) $notchedOutline": {
          borderColor: textPrimaryColor,
          // Reset on touch devices, it doesn't add specificity
          "@media (hover: none)": {
            borderColor: textPrimaryColor,
          },
        },
        "&$focused $notchedOutline": {
          borderColor: textPrimaryColor,
          borderWidth: 1,
        },
      },
    },
    // MuiInputLabel: {
    //   root: {
    //     color: primaryColor,
    //     "&$focused": {
    //       color: primaryColor,
    //     },
    //     "&$active": {
    //       color: primaryColor,
    //     },
    //   },
    //   outlined: {
    //     transform: "translate(10px, 13px) scale(1)",
    //     "&$shrink": {
    //       transform: "translate(14px, -5px) scale(0.75)",
    //     },
    //   },
    // }
  },
});

export default theme;
