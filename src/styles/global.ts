import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Roboto', sans-serif;
    }

    :root {
        height: 100vh;

        --primary: #36393f;
        --secondary: #2f3136;
        --tertiary: rgb(32,34,37);
        --quaternary: #292b2f;
        --quinary: #393d42;
        --senary: #828386;
    
        --white: #fff;
        --gray: #8a8c90;
        --chat-input: rgb(64,68,75);
        --symbol: #74777a;
    
        --notification: #f84a4b;
        --discord: #6e86d6;
        --home: #7289da;
        --mention-detail: #f9a839;
        --mention-message: #413f3f;
    
        --link: #5d80d6;
    }

    button, input {
        border: 0;
        outline: 0;
    }

`;

export default GlobalStyle;
