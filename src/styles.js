import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: 'Open Sans', sans-serif;
    }

    body{
        background-color: #F9F9F9;
   }

   h1{
       margin: 0;
   }

   a{
       text-decoration: none;
   }
`;