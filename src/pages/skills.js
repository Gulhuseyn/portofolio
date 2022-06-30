import { motion } from "framer-motion";
import styled from "styled-components";
import SCard from "../components/skillsCard";
import data from "../data";
import { useHistory } from "react-router-dom";
import { useEffect } from "react";
const Skills = () => {
  let history = useHistory();
  const transit = (title) => {
    document.getElementById("transit").style.width = "100rem";
    document.getElementById("transit").style.height = "100rem";
    document.getElementById("transit").style.borderRadius = "0";
    console.log(title);
    setTimeout(() => {
      history.push("/skills/" + title);
    }, 2000);
  };
  useEffect(() => {
    var carousel = document.querySelector(".cardContainer");
    var cells = carousel.querySelectorAll(".carousel__cell");

    var selectedIndex = 0;
    var cellWidth = carousel.offsetWidth;
    var rotateFn = "rotateY";
    var radius, theta;

    function rotateCarousel() {
      var angle = theta * selectedIndex * -1;
      carousel.style.transform =
        "translateZ(" + -radius + "px) " + rotateFn + "(" + angle + "deg)";
    }

    var prevButton = document.querySelector(".previous-button");
    prevButton.addEventListener("click", function () {
      selectedIndex--;
      rotateCarousel();
    });

    var nextButton = document.querySelector(".next-button");
    nextButton.addEventListener("click", function () {
      selectedIndex++;
      rotateCarousel();
    });

    function changeCarousel() {
      theta = 360 / 6;
      radius = Math.round(cellWidth / 2);
      for (var i = 0; i < cells.length; i++) {
        var cell = cells[i];
        cell.style.opacity = 1;
        var cellAngle = theta * i;
        cell.style.transform =
          rotateFn + "(" + cellAngle + "deg) translateZ(" + radius + "px)";
      }

      rotateCarousel();
    }
    window.onkeydown = (e) => {
      if (e.key === "ArrowLeft") {
        selectedIndex--;
      } else if (e.key === "ArrowRight") {
        selectedIndex++;
      }
      rotateCarousel();
    };
    changeCarousel();
  }, []);

  return (
    <SkillsContainer
      initial={{ scaleY: 0 }}
      animate={{ scaleY: 1 }}
      exit={{ scaleY: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="line-anim">
        <svg
          className="line"
          xmlns="http://www.w3.org/2000/svg"
          width="1908.363"
          height="660.135"
          viewBox="0 0 1908.363 660.135"
        >
          <path
            id="Path_201"
            data-name="Path 201"
            d="M7560.614,1867.912c-180.695,189.195-383.453,295.654-700.091,215.209-355.958-90.435-342.115-460.158-581.974-582.12-100.7-64.953-485.479-54.883-619.637,48.107"
            transform="translate(7564.229 2115.232) rotate(-180)"
            fill="none"
            stroke="#5867d6"
            stroke-width="10"
          />
        </svg>
      </div>
      <h1>Skills</h1>
      <motion.div id="transit" className="transition"></motion.div>
      <div className="carousel">
        <div className="cardContainer">
          {data.map((each) => (
            <div className="carousel_cell">
              <SCard
                transition={transit}
                experience={each.experience}
                knowledge={each.knowledge}
                title={each.name}
              />
            </div>
          ))}
        </div>
      </div>

      <div>
        <i class=" fa fa-chevron-left control previous-button"></i>
      </div>
      <div>
        <i class="fa fa-chevron-right control next-button"></i>
      </div>
    </SkillsContainer>
  );
};

const SkillsContainer = styled(motion.div)`
  .transition {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 3;
    background-color: #6dabed;
    width: 0.01rem;
    height: 0.01rem;
    transition: 1.5s;
    border-radius: 100%;
  }
  h1 {
    text-align: center;
    color: #22c59f;
  }
  .carousel {
    margin: 40px 0;
    position: relative;
    width: 210px;
    height: 140px;
    margin: 80px auto;
    perspective: 1000px;
    .cardContainer {
      width: 100%;
      height: 100%;
      position: absolute;
      transform: translateZ(-15rem);
      transform-style: preserve-3d;
      transition: transform 1s;
      .carousel_cell {
        position: absolute;
        margin: 0 10%;
        left: 10px;
        top: 10px;

        text-align: center;
        transition: transform 1s, opacity 1s;

        &:nth-child(1) {
          transform: rotateY(0deg) translateZ(15rem);
        }
        &:nth-child(2) {
          transform: rotateY(60deg) translateZ(15rem);
        }
        &:nth-child(3) {
          transform: rotateY(120deg) translateZ(15rem);
        }
        &:nth-child(4) {
          transform: rotateY(180deg) translateZ(15rem);
        }
        &:nth-child(5) {
          transform: rotateY(240deg) translateZ(15rem);
        }
        &:nth-child(6) {
          transform: rotateY(300deg) translateZ(15rem);
        }
      }
    }
  }
  .control {
    color: white;
    font-size: 2rem;
    position: absolute;
  }
  .previous-button,
  .next-button {
    padding: 1rem;
    cursor: url("https://i.postimg.cc/ydY8PznW/rsz-exclusion-2.png "), auto;
  }
  .previous-button {
    left: 10%;
  }
  .next-button {
    right: 10%;
  }
`;

export default Skills;
