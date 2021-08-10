import { createGlobalStyle } from "styled-components"

export const CSS = {
    bg1: "#F2F2F2",
    bg2: "#F7FAFD",
    black: "#1E2022",
    gray: "#77838F",
    green: "#4EBC84",

    colors: {
        bg1: "#F2F2F2",
        bg2: "#F7FAFD",
        black: "#1E2022",
        gray: "#77838F",
        green: "#4EBC84",
    },

    break: {
        tablet: "1200px",
        mobile: "648px"
    }
}

export const GlobalStyle = createGlobalStyle`
    * {
        font-family: "Ubuntu";
    }
`

export const defaultTheme = {
    colors: {
        bg1: "#F2F2F2",
        bg2: "#F7FAFD",
        black: "#1E2022",
        gray: "#77838F",
        green: "#4EBC84",
    },

    break: {
        tablet: "1200px",
        mobile: "648px"
    }
};
