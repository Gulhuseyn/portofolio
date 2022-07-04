import styled from "styled-components";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import data from "../data";
import FullStack from "../resources/FullStack.jpg";
import React from "../resources/React.jpg";
import UI from "../resources/UI.jpg";
import Responsive from "../resources/Responsive.jpg";
import Shongar from "../resources/Shongar.png";
import Linguist from "../resources/linguist.png";
import MealsToGo from "../resources/mealsToGo.png";
import ReactNative from "../resources/reactNative.png";
import Maynooth1 from "../resources/maynooth1.png";
import Maynooth2 from "../resources/maynooth2.png";

const Details = () => {
  const stringToObject = {
    Fullstack: FullStack,
    UI: UI,
    React: React,
    Maynooth1: Maynooth1,
    // Maynooth2: Maynooth2,
    Linguist: Linguist,
    Responsive: Responsive,
    Shongar: Shongar,
    MealsToGo: MealsToGo,
    ReactNative: ReactNative,
  };

  let location = useLocation();
  const clickedTitle = location.pathname.split("/")[2];
  const content = data.filter((each) => each.name === clickedTitle)[0];
  console.log(content);
  console.log(clickedTitle);

  const close = () => {
    document.getElementById("modal").style.display = "none";
  };
  const enlarge = (img) => {
    document.getElementById("modal").style.display = "block";
    document.getElementById("modalImg").src = img;
  };
  return (
    <Detail
      initial={{ backgroundColor: "##6DABED" }}
      animate={{ backgroundColor: "#1c1c1c" }}
      transition={{ duration: 1 }}
    >
      <div className="line-anim ">
        <svg
          className="line"
          xmlns="http://www.w3.org/2000/svg"
          width="1938.776"
          height="614.598"
          viewBox="0 0 1938.776 614.598"
        >
          <path
            id="Path_203"
            data-name="Path 203"
            d="M5439.385,1571.535c15.692,18.593,220.149,601.81,756.824,465.463,386.406-98.17,459.128-521.426,820.757-577.662,139.751-21.733,206.564,14.851,355.954,59.1"
            transform="translate(-5435.564 -1448.074)"
            fill="none"
            stroke="#5867d6"
            stroke-width="10"
          />
        </svg>
      </div>
      <div id="modal" className="modal">
        <div className="modalContent">
          <div onClick={close} className="button">
            <i class="fas fa-times"></i>
          </div>
          <img id="modalImg" src="" alt="" />
        </div>
      </div>

      <motion.div
        initial={{ scale: 0.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1 }}
        className="container"
      >
        <h1>{content.name}</h1>
        <p>{content.content}</p>
        <div className="knowledge">
          <h2>Knowledge</h2>
          <div className="stars">
            {Array.apply(null, { length: content.knowledge }).map(() => (
              <i class="fas fa-star"></i>
            ))}
            {Array.apply(null, { length: 5 - content.knowledge }).map(() => (
              <i class="far fa-star"></i>
            ))}
          </div>
          <div className="images">
            {content.certificates.map((each) => (
              <img
                onClick={() => enlarge(stringToObject[each.url])}
                src={stringToObject[each.url]}
                tooltip={each.title}
                alt={each.title}
              />
            ))}
          </div>
          <p>and many more...</p>
        </div>
        <div className="experience">
          <h2>Experience</h2>
          <div className="stars">
            {Array.apply(null, { length: content.knowledge }).map(() => (
              <i class="fas fa-star"></i>
            ))}
            {Array.apply(null, { length: 5 - content.knowledge }).map(() => (
              <i class="far fa-star"></i>
            ))}
          </div>
          <div className="images">
            {content.jobs.map((each) => (
              <img
                onClick={() => enlarge(stringToObject[each.url])}
                src={stringToObject[each.url]}
                tooltip={each.title}
                alt={each.title}
              />
            ))}
          </div>
        </div>
      </motion.div>
    </Detail>
  );
};
const Detail = styled(motion.div)`
  color: white;

  width: 100vw;
  background-color: #1c1c1c;
  .modal {
    z-index: 5;
    display: none;
    background-color: rgba(0, 0, 0, 0.7);
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    text-align: right;
    .modalContent {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      img {
        z-index: 1;
        width: auto;
        height: 60vh;
      }
    }
    .button {
      i {
        font-size: 3rem;
        padding: 1rem;
        cursor: url("https://i.postimg.cc/ydY8PznW/rsz-exclusion-2.png "), auto;
        transition: 0.1s;
        :hover {
          scale: 1.1;
        }
      }
    }
  }

  .container {
    position: relative;
    z-index: 2;
    padding: 0 15%;
    h1 {
      text-align: center;
    }
    p {
      margin: 5% 0;
    }

    .knowledge,
    .experience {
      h2 {
        display: inline-block;
      }
      .stars {
        display: inline-block;
        margin: 5% 0 0 3%;
        i {
          font-size: 1.5rem;
          padding-left: 0.5rem;
          &.fas {
            color: #ffc107;
          }
        }
      }
      p {
        font-family: "Lobster Two", cursive;
        text-align: right;
        display: block;
        font-size: 1.5rem;
        margin: 0;
        padding: 0;
      }
    }
    .knowledge .images img,
    .experience .images img {
      width: auto;
      height: 15rem;
      margin: 3%;
      border-radius: 5%;
      box-shadow: 0 5px 10px #1c1c1c;
      transition: 1s;
      :hover {
        scale: 1.1;
      }
    }
  }
  @media only screen and (max-width: 650px) {
    .container {
      padding: 0 5%;
      .knowledge,
      .experience {
        h2 {
          font-size: 1.5rem;
          margin: 5% 0 0 0;
        }
        .images {
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 100%;
        }
      }
      .knowledge .images img,
      .experience .images img {
        height: 12rem;
      }
    }
    .modal {
      .modalContent {
        img {
          height: auto;
          width: 100vw;
        }
      }
    }
  }
`;
export default Details;
