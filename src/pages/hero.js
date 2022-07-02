import styled from "styled-components";
import { motion } from "framer-motion";
import heroImage from "../resources/hero.jpeg";
import { Link } from "react-router-dom";
const Hero = () => {
  return (
    <Landing>
      <div className="line-anim">
        <svg
          className="line"
          xmlns="http://www.w3.org/2000/svg"
          width="1923.246"
          height="501.078"
          viewBox="0 0 1923.246 501.078"
        >
          <path
            id="Path_198"
            data-name="Path 198"
            d="M5653.357,1557.528c15.692,18.593,459.108,557.785,995.783,421.436s388.686-594.236,922.222-436.2"
            transform="translate(-5649.537 -1505.012)"
            fill="none"
            stroke="#5867d6"
            strokeWidth="10"
          />
        </svg>
      </div>
      <motion.div className="container">
        <motion.div
          animate={{ opacity: [0, 1] }}
          transition={{ duration: 2, delay: 8 }}
          className="image"
        >
          <img src={heroImage} alt="" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, top: -100 }}
          animate={{ opacity: 1, top: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="text"
        >
          <h2>
            Hello,
            <br />I am
            <motion.div
              className="colored"
              animate={{ opacity: [0, 1, 0], top: ["100%", "25%", "-50%"] }}
              transition={{ duration: 1.5, delay: 2 }}
            >
              Web developer
            </motion.div>
            <motion.div
              className="colored"
              animate={{ opacity: [0, 1, 0], top: ["100%", "25%", "-50%"] }}
              transition={{ duration: 1.5, delay: 3.5 }}
            >
              Front-End developer
            </motion.div>
            <motion.div
              className="colored"
              animate={{ opacity: [0, 1, 0], top: ["100%", "25%", "-50%"] }}
              transition={{ duration: 1.5, delay: 5 }}
            >
              Back-End developer
            </motion.div>
            <motion.div
              className="colored"
              animate={{ opacity: [0, 1, 0], top: ["100%", "25%", "-50%"] }}
              transition={{ duration: 1.5, delay: 6.5 }}
            >
              UI/UX developer
            </motion.div>
            <motion.div
              className="colored"
              animate={{ opacity: [0, 1], top: ["100%", "25%"] }}
              transition={{ duration: 1.5, delay: 8 }}
            >
              Gulhuseyn Sadiqli
            </motion.div>
          </h2>
          <Link to="/contact">
            <motion.div
              whileHover={{ backgroundColor: "#3ab699", color: "#1C1C1C" }}
              className="button"
            >
              <p>Contact me</p>
            </motion.div>
          </Link>
        </motion.div>
      </motion.div>
    </Landing>
  );
};

const Landing = styled(motion.div)`
  .container {
    margin: 10% 15%;
    position: relative;
    top: 40%;
    .text {
      position: relative;
      .button {
        border-radius: 0.5rem;
        border: 2px solid #22c59f;
        display: inline-block;
        padding: 0.5rem;
        cursor: url("https://i.postimg.cc/ydY8PznW/rsz-exclusion-2.png "),
          pointer;
        p {
          color: white;
          padding: 0;
          margin: 0;
          font-size: 1rem;
        }
      }

      h2 {
        font-size: 2.5rem;
        color: white;
        .colored {
          margin-left: 1%;
          display: inline-block;
          color: #22c59f;
          position: absolute;
        }
      }
    }
    .image {
      position: absolute;
      top: -7rem;
      right: 0;
      background-color: rgba(88, 103, 214, 0.3);
      padding: 1rem;
      img {
        width: 20rem;
        padding: 0;
        margin: 0;
      }
    }
  }
  @media only screen and (max-width: 600px) {
    .container {
      margin: 5%;
      .image {
        top: 10rem;
      }
      .text {
        h2 {
          font-size: 1.5rem;
        }
      }
    }
  }
`;

export default Hero;
