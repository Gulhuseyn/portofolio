import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
html{
    cursor: url("https://i.postimg.cc/VL3P6cCn/rsz-customcursor.png"),auto;
}
body{
    

    margin:0;
    padding:0;
    box-sizing: border-box;
    background-color: #1C1C1C;
    font-family: 'Inter', sans-serif;
    overflow-x: hidden;
    .pointer{
        position:absolute;
        top:50%;
        left:50%;
        transform: translate(-50% -50%);
        width:32px;
        height:32px;
        background: #22C59F;
        border:1px solid black;
        border-radius:50%;
        pointer-events:none;
        box-sizing: border-box;
        /* transition: 0.2s; */
        opacity: 25%;
    }
    .pointer1{
        transition:0.05s;
    }
    .pointer2{
        transition:0.08s;
    }
    .pointer3{
        transition:0.11s;
    }
    .pointer4{
        transition:0.14s;
    }
    .pointer5{
        transition:0.17s;
    }
h1{
    font-family: 'Lobster Two', cursive;
}
}

`
;
 
export default GlobalStyle;