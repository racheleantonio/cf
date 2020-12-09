import React from "react";
import "./styles/tailwind.css";
import { ReactComponent as Linkedin } from "./assets/Linkedin.svg";
import { ReactComponent as Github } from "./assets/Github.svg";
import { ReactComponent as Twitter } from "./assets/Twitter.svg";
import { ReactComponent as Mail } from "./assets/Mail.svg";
import { ReactComponent as CV } from "./assets/CV.svg";
import { ReactComponent as Skype } from "./assets/Skype.svg";
import { ReactComponent as RA } from "./assets/RA.svg";

// @ts-ignore
import Tilt from "react-parallax-tilt";

function App() {
  return (
    <div className="h-full w-full bg-gray-900 flex justify-center items-center p-8">
      <div>
        <header className="zoomIn1 text-4xl lg:text-5xl text-center text-white opacity-75">
          Rachele
        </header>
        <header className="zoomIn1 text-4xl lg:text-5xl text-center text-white opacity-75">
          Antonio
        </header>
        <div className="mt-6 flex flex-wrap w-full justify-center items-center">
          <Tilt perspective={100} tiltReverse={true} gyroscope={true}>
            <a
              href="https://www.linkedin.com/in/racheleantonio/"
              target="blank"
            >
              <Linkedin className="h-24 w-24 m-3 fadeIn1 opacity-0" />
            </a>
          </Tilt>
          <Tilt perspective={100} tiltReverse={true} gyroscope={true}>
            <a href="https://github.com/racheleantonio" target="blank">
              <Github className="h-24 w-24 m-3 fadeIn2 opacity-0" />
            </a>
          </Tilt>
          <Tilt perspective={100} tiltReverse={true} gyroscope={true}>
            <a href="https://twitter.com/RacheleAntonio_" target="blank">
              <Twitter className="h-24 w-24 m-3 fadeIn3 opacity-0" />
            </a>
          </Tilt>
          <Tilt perspective={100} tiltReverse={true} gyroscope={true}>
            <a href={`${process.env.PUBLIC_URL}/cv.pdf`} target="blank">
              <CV className="h-24 w-24 m-3 fadeIn4 opacity-0" />
            </a>
          </Tilt>
          <Tilt perspective={100} tiltReverse={true} gyroscope={true}>
            <a href="mailto:racheleantonio@outlook.com" target="blank">
              <Mail className="h-24 w-24 m-3 fadeIn4 opacity-0" />
            </a>
          </Tilt>
          <Tilt perspective={100} tiltReverse={true} gyroscope={true}>
            <a href="skype:racheleantonio_2?chat" target="blank">
              <Skype className="h-24 w-24 m-3 fadeIn5 opacity-0" />
            </a>
          </Tilt>
          {/* <Tilt><a href='https://t.me/AntoRack' target='blank'><Telegram className="h-24 w-24 m-3 fadeIn6 opacity-0" /></a> */}
        </div>
      </div>
      <div className="p-4 absolute bottom-0 right-0">
        <RA className="items-end h-8 w-8 m-3 fadeIn6 opacity-0" />
      </div>
    </div>
  );
}

export default App;
