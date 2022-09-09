import {createGlobalStyle} from 'styled-components'

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    :root{
        --color-primary: #FEC10E;/*#DF9A09;/*#08b2c9*/
        --color-secondary: #003079;/*#223F7D;/*#28527a*/
        --color-light: #ffffff;
        --color-dark: #151515;
    }
    html{
        font-size: 62.5%;
    }

    body{
        font-size: 1.6rem;
        font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
        background: var(--color-dark);
        color: var(--color-light);
        margin-bottom: 2rem;
    }
`