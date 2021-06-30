import {motion} from "framer-motion"
import styled from "styled-components"
import SCard from "../components/skillsCard"
const Skills=()=>{
    const leftClickHandler=()=>{
        console.log("clicked")
    }
    return(
        <SkillsContainer initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        exit={{ scaleY: 0 }}
        transition={{ duration: 0.5 }}>
            <i onClick={leftClickHandler} class="fas fa-chevron-left arrow"></i>
            <i class="fas fa-chevron-right arrow"></i>
            <div className="cardContainer">
            <SCard  title="First" knowledge={3} experience={4} />
            <SCard  title="Secondary" knowledge={3} experience={4} />
            <SCard  title="third" knowledge={3} experience={4} />
            <SCard title="fourth" knowledge={3} experience={4} />
            <SCard title="fifth" knowledge={3} experience={4} />
            </div>
       
           
        </SkillsContainer>
    )
}

const SkillsContainer=styled(motion.div)`
.cardContainer{
    white-space: nowrap;
    margin:5% 0;
    text-align: center;
    position: relative;
    
}
i{
    &.arrow{
        color:white;
        position: absolute;
        font-size: 2rem;
        top:50%;
        cursor:  url("https://i.postimg.cc/ydY8PznW/rsz-exclusion-2.png "),pointer;
        z-index: 10;
        padding: 0 1rem;
    }
    &.fa-chevron-left{
    left:5%;
}
&.fa-chevron-right{
    right:5%;
}
}
`
export default Skills