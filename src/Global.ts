import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
        --red: #FC1441;
        --redOpacity: rgba(252, 20, 65, 0.1);

        --blue: #157FFB;
        --blueOpacity: rgba(21, 127, 251, 0.1);
        
        --green: #30A64A;
        --greenOpacity: rgba(48, 166, 74, 0.1);

        --gray: #6D757D;
        --grayOpacity: rgba(109, 117, 125, 0.1);


        --text-black: #142237;
        --text-gray: #666666;
        --text-white: #fff;
        --text-disabled: #B3B3B3;

        --body: #f1f4f7;
        --box: #CFE3FC;
        --button: rgba(145, 86, 236, 1);
        --buttonHover: rgba(145, 86, 236, .75)
    }
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        list-style: none;
        outline: none;
        background: none;
        border: none;
        text-decoration: none;
    }
    html {
        font-size: 62.5%;
    }
    html, body, #root {
        width: 100%;
        height: 100%;
    }
    body {
        color: var(--text-black);
        background-color: var(--body);
        font-family: 'Poppins', sans-serif;
    }
    a, button {
        cursor: pointer;
    }
    button {
        font-size: 0;
    }
`;
