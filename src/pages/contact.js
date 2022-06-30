import { useState, useEffect } from "react";
import styled from "styled-components";
const Contact = () => {
  return (
    <Contacts>
      <Title>Lets have a chat</Title>
      <div className="iconsContainer">
        <div className="linkedIN">
          <a href="https://www.linkedin.com/in/gulhuseyn-sadiqli-a23683166/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="244"
              height="244"
              viewBox="0 0 244 244"
            >
              <path
                id="Path_2"
                data-name="Path 2"
                d="M28.47-115.241q-7.773,0-12.729-4.615a14.87,14.87,0,0,1-4.956-11.32,14.342,14.342,0,0,1,4.956-11.271q4.956-4.373,12.729-4.373,7.871,0,12.778,4.373a14.406,14.406,0,0,1,4.907,11.271,14.812,14.812,0,0,1-4.907,11.466Q36.341-115.241,28.47-115.241ZM43.628,0H12.923V-99.5H43.628ZM165.574,0H134.966V-55.289q0-23.126-16.519-23.126a16.39,16.39,0,0,0-13.118,6.122q-5.15,6.122-5.15,15.547V0H69.475V-99.5H100.18v15.741h.389q10.98-18.17,31.968-18.17,33.037,0,33.037,41Z"
                transform="translate(33 194)"
                fill="#22c59f"
              />
              <g id="Path_1" data-name="Path 1" fill="none">
                <path
                  d="M 30 10 C 18.97195434570312 10 10 18.97195434570312 10 30 L 10 214 C 10 225.0280456542969 18.97195434570312 234 30 234 L 214 234 C 225.0280456542969 234 234 225.0280456542969 234 214 L 234 30 C 234 18.97195434570312 225.0280456542969 10 214 10 L 30 10 M 30 0 L 214 0 C 230.5685424804688 0 244 13.43145751953125 244 30 L 244 214 C 244 230.5685424804688 230.5685424804688 244 214 244 L 30 244 C 13.43145751953125 244 0 230.5685424804688 0 214 L 0 30 C 0 13.43145751953125 13.43145751953125 0 30 0 Z"
                  stroke="none"
                  fill="#22c59f"
                />
              </g>
            </svg>
          </a>
        </div>
        <div className="github">
          <a href="https://github.com/Gulhuseyn">
            <svg
              fill="#1c1c1c"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 30 30"
              width="300px"
              height="300px"
            >
              {" "}
              <path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z" />
            </svg>
          </a>
        </div>
        <div className="email">
          <a href="mailto:sadiqligulhuseyn@gmail.com">
            <svg
              fill="#1c1c1c"
              width="300px"
              height="300px"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M22 6C22 4.9 21.1 4 20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6M20 6L12 11L4 6H20M20 18H4V8L12 13L20 8V18Z"
              />
            </svg>
          </a>
        </div>
      </div>
      <div className="line-anim">
        <svg
          className="line"
          xmlns="http://www.w3.org/2000/svg"
          width="2673.593"
          height="220.896"
          viewBox="0 0 2673.593 220.896"
        >
          <path
            id="Path_6"
            data-name="Path 6"
            d="M0,1080c174.888-90.009,106.182-158.715,212.364-58.779s156.15,34.353,215.487,0,96.813-115.551,159.273,0,178.011-28.107,193.626-71.829,178.011,40.6,187.38,109.3,171.765-59.337,224.856-109.3,74.952-62.46,146.781,46.845,190.5,65.583,281.07-46.845,106.182-103.059,184.257,0,131.166,168.642,234.225,46.845,99.936-118.674,202.995,0,146.781,87.444,249.84,0,115.551-34.353,174.888,62.46"
            transform="translate(2.288 -863.55)"
            fill="none"
            stroke="#5867d6"
            stroke-width="10"
          />
        </svg>
      </div>
    </Contacts>
  );
};
export default Contact;
const Contacts = styled.div`
  a:hover {
    cursor: url("https://i.postimg.cc/ydY8PznW/rsz-exclusion-2.png "), pointer;
  }
  svg {
    position: relative;
    top: 90%;
  }
  .line-anim .line path {
    stroke-dasharray: 3300;
    stroke-dashoffset: 3300;
    animation: contactLineAnimation 2s forwards;
  }

  .iconsContainer {
    margin: 2% 15%;
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  .linkedIN,
  .github,
  .email {
    filter: drop-shadow(3px 3px 6px #22c59f);
    flex: 1;
    svg {
      transition: 1s;
      path {
        stroke: #22c59f;
        fill: none;
        stroke-dasharray: 1000;
        stroke-dashoffset: 1000;
        animation: textAnim 2.5s linear forwards;
      }
    }
    svg:hover {
      scale: 1.2;
    }
  }
  .github,
  .email {
    svg {
      path {
        stroke-width: 0.3px;
        stroke-dasharray: 300;
        stroke-dashoffset: 300;
        animation: githubAnim 2.5s linear forwards;
      }
    }
  }
  @keyframes textAnim {
    from {
      stroke-dashoffset: 1000;
      fill: #1c1c1c;
    }
    to {
      stroke-dashoffset: 0;
      fill: #22c59f;
    }
  }
  @keyframes githubAnim {
    from {
      stroke-dashoffset: 300;
      fill: #1c1c1c;
    }
    to {
      stroke-dashoffset: 0;
      fill: #22c59f;
    }
  }
  @keyframes contactLineAnimation {
    from {
      stroke-dashoffset: 3300;
    }
    to {
      stroke-dashoffset: 0;
    }
  }
`;

const Title = styled.h1`
  color: white;
  text-align: center;
`;
