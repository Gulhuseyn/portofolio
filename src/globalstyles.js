import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

html{
    cursor: url("https://i.postimg.cc/VL3P6cCn/rsz-customcursor.png"),auto;
    overflow-x:hidden;
   
}
body{
    
    overflow-x:hidden;
    height:100vh ;
    margin:0;
    padding:0;
    box-sizing: border-box;
    background-color: #1C1C1C;
    font-family: 'Inter', sans-serif;
   
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
        opacity: 25%;
        z-index: 9;
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
    font-size:1.5rem ;
}
.line-anim{
    position:absolute;
    
    .line{
    width:120%;
    left:-10%;
    display: block;
    margin:auto;
    fill:#5867d6;
    path{
        stroke-dasharray: 2400;
        stroke-dashoffset: 2400;
        animation:lineAnimation 2s forwards;
    }
}
}
}
@keyframes lineAnimation {
  from {stroke-dashoffset:2400;}
  to {stroke-dashoffset:0;}
}
`;
export default GlobalStyle;
