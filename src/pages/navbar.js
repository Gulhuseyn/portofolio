import styled from "styled-components";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <Nav>
      <div className="navigation">
        <Link className="customLink" to="/">
          <div className="logo">
            <h1 id="logoWord">
              {window.innerWidth < "768px" ? "Gulhuseyn Sadiqli" : "G/S"}
            </h1>
          </div>
        </Link>
        <div className="links">
          <div class="navbar">
            <Link to="/skills">
              <a class="nav-link nav-link-ltr" href="/skills">
                Skills
              </a>
            </Link>
            <Link to="/about">
              <a class="nav-link nav-link-ltr" href="/about">
                About
              </a>
            </Link>
            <Link to="/contact">
              <a class="nav-link nav-link-ltr" href="/contact">
                Contact
              </a>
            </Link>
          </div>
        </div>
      </div>
    </Nav>
  );
};

const Nav = styled(motion.div)`
  .navigation {
    margin: 0 15%;
    justify-content: space-between;
    color: #22c59f;
    display: flex;
    align-items:center ;
    z-index: 999;
  }
  .customLink {
    text-decoration: none;
    color: inherit;
    transition: 0.2s;
    :hover {
      scale: 1.1;
    }
  }
  .logo {
    h1 {
      margin: 0;
      padding: 0;
      cursor: url("https://i.postimg.cc/ydY8PznW/rsz-exclusion-2.png "), pointer;
    }
  }
  .logo:focus {
    outline: none;
  }
  .links {
    width: 50%;
    .nav-link {
      text-decoration: none;
      color: #22c59f;
      padding: 1.5rem 0.5rem;
      display: inline-block;
      position: relative;
      opacity: 0.75;
    }

    .nav-link:hover {
      opacity: 1;
      cursor: url("https://i.postimg.cc/ydY8PznW/rsz-exclusion-2.png "), pointer;
    }

    .nav-link::before {
      transition: 300ms;
      height: 3px;
      content: "";
      position: absolute;
      background-color: #22c59f;
    }

    .nav-link-ltr::before {
      width: 0%;
      bottom: 10px;
    }

    .nav-link-ltr:hover::before {
      width: 70%;
    }
    .nav-link-ltr:focus {
      outline: none;
    }
  }
  @media only screen and (max-width: 600px) {
    .navigation {
      margin: 5%;
    }
    .links {
      width: auto;
    }
  }
`;

export default Navbar;
