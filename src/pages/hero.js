import styled from "styled-components"
import {motion} from "framer-motion"
const Hero=()=>{
    
    return(
        <Landing>
         <div className="line-anim">
            <svg className="line" xmlns="http://www.w3.org/2000/svg" width="1923.246" height="501.078" viewBox="0 0 1923.246 501.078">
              <path id="Path_198" data-name="Path 198" d="M5653.357,1557.528c15.692,18.593,459.108,557.785,995.783,421.436s388.686-594.236,922.222-436.2" transform="translate(-5649.537 -1505.012)" fill="none" stroke="#5867d6" stroke-width="10"/>
            </svg>
          </div>
          <motion.div className="container">
            <motion.div initial={{opacity:0,top:-100}} animate={{opacity:1,top:0}} transition={{duration:1,delay:1}}  className="text">
              <h2>Hello,<br/>I am 
                <motion.div className="colored"  animate={{opacity:[0,1],top:[50,0]}} transition={{duration: 1,delay:2}} >Web developer</motion.div>
              </h2>
              <motion.div whileHover={{backgroundColor:"#3ab699",color:"#1C1C1C"}} className="button"><p>Contact me</p></motion.div>
            </motion.div>
              <div className="image"></div>
          </motion.div>
        </Landing>
    )
}

const Landing=styled(motion.div)`
.line-anim{
    position:absolute;
    .line{
    width:120%;
    
    left:-10%;
    display: block;
    margin:auto;
    fill:#5867d6;
    path{
        stroke-dasharray: 2100;
        stroke-dashoffset: 2100;
        animation:lineAnimation 2s forwards;
    }
}
}
.container{
   margin:10% 15%;
   position:relative;
   top:30%;
   .text{
    position:relative;
     .button{
       border-radius: 0.5rem;
       border: 2px solid #22C59F;
       display:inline-block;
       padding: 0.5rem;
       cursor: url("https://i.postimg.cc/ydY8PznW/rsz-exclusion-2.png "),pointer;
       p{
         color:white;
         padding:0;
         margin:0;
         font-size: 1.2vw;
       }
     }
     
       h2{
           font-size: 4vw;
           color:white;
           .colored{
             margin-left: 1%;
             display: inline-block;
             color:#22C59F;
             position:relative;
             
           }
       }
   }

}


@keyframes lineAnimation {
  from {stroke-dashoffset:2100;}
  to {stroke-dashoffset:0;}
}
`


export default Hero