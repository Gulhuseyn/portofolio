import styled from "styled-components"
import {motion} from "framer-motion"




const Navbar=()=>{
    return(
        <Nav>
             <div className="logo"><h1>Gulhuseyn Sadiqli</h1></div>  
             <div className="links">
             <div class="navbar">
  <a class="nav-link nav-link-ltr" href="#">Skills</a>
  <a class="nav-link nav-link-ltr" href="#">Experience</a>
  <a class="nav-link nav-link-ltr" href="#">Contact</a>
  <a class="nav-link nav-link-ltr" href="#">About</a>
</div>
                 
             </div> 
        </Nav>
    )
}

const Nav = styled(motion.div)`
color:#22C59F;
display:flex;
justify-content: space-between;
margin:0 15%;
.logo{
    h1{
        margin:0;
        padding:0;
        cursor: url("https://i.postimg.cc/ydY8PznW/rsz-exclusion-2.png "),pointer;
    }
   
}
.links{
    
    width:50%;
    .nav-link {
  text-decoration: none;
  color: #22C59F;
  padding: 20px 20px;
  display: inline-block;
  position: relative;
  opacity: 0.75;
}

.nav-link:hover {
  opacity: 1;
  cursor: url("https://i.postimg.cc/ydY8PznW/rsz-exclusion-2.png "),pointer;
}

.nav-link::before {
  transition: 300ms;
  height: 3px;
  content: "";
  position: absolute;
  background-color: #22C59F;
}

.nav-link-ltr::before {
  width: 0%;
  bottom: 10px;
}

.nav-link-ltr:hover::before {
  width: 70%;
}
}



`
export default Navbar