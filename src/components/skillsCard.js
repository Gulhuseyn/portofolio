import styled from "styled-components"
import {motion} from "framer-motion"
const skillsCard=({title,knowledge,experience,transition})=>{
    const moreHandler=(title)=>{
        
        
    }
    return (
        < CardContainer id={title} >

           <div className="title"><h2>{title.toUpperCase()}</h2></div>
           <div className="rating">
            <div className="criteria">
                <p>Knowledge</p>
                <div className="stars">
               
               { Array.apply(null, { length: knowledge }).map(() => (<i class="fas fa-star"></i>))}
               { Array.apply(null, { length:5- knowledge }).map(() => (<i class="far fa-star"></i>))}
                </div>
            </div>
            <div className="criteria">
                <p>Experience</p>
                <div className="stars">
                { Array.apply(null, { length: experience }).map(() => (<i class="fas fa-star"></i>))}
               { Array.apply(null, { length:5-experience }).map(() => (<i class="far fa-star"></i>))}
                </div>
                
            </div>
           </div>
           <div className="more">
           <i onClick={()=>transition(title)} class="fas fa-chevron-down"></i>
           </div>
        </ CardContainer>
    )
}

const CardContainer=styled(motion.div)`
width:16rem;


border-radius: 2rem;
background-color: #6DABED;
transition: 1s;

.title{
    text-align: center;
    padding:20% 0 0;
    h2{
        color:white;
        margin: 0;
        padding: 0;
    }
}
.rating{
    text-align: left;
    .criteria{
        padding:2rem;
       p{
        font-family: 'Lobster Two', cursive;
        font-size: 2rem;
        margin:0;
       }
       .stars{
           margin:5% 0 0 3%;
           i{
               font-size: 1.5rem;
               padding-left: 0.5rem;
            &.fas{
               color:#FFC107;
           }
           }
           
       }
    }
}
.more{
    text-align: center;
    font-size: 2rem;
    opacity: 0.5;
    i{
        cursor: url("https://i.postimg.cc/ydY8PznW/rsz-exclusion-2.png "),auto;
        padding: 0.5rem;
    }
}
`

export default skillsCard