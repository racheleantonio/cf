import React from "react";
import "./styles/tailwind.css";
import { ReactComponent as Linkedin } from "./assets/full/linkedin.svg";
import { ReactComponent as Github } from "./assets/full/github.svg";
import { ReactComponent as Twitter } from "./assets/full/twitter.svg";
import { ReactComponent as Mail } from "./assets/full/mail.svg";
import { ReactComponent as CV } from "./assets/full/cv.svg";
import { ReactComponent as Skype } from "./assets/full/skype.svg";
import { ReactComponent as RA } from "./assets/RA.svg";

// @ts-ignore
import div from "react-parallax-div";

function App() {
  return (
    <div className="h-full w-full bg-gray-900 flex justify-center items-center p-8">
      <div>
        <header className="zoomIn1 text-4xl lg:text-5xl leading-5 text-center text-white opacity-75">
          Rachele
        </header>
        <header className="zoomIn1 text-4xl lg:text-5xl leading-5 text-center text-white opacity-75">
          Antonio
        </header>
        <div className="mt-6 flex flex-wrap w-full justify-center items-center">
          <div className="rounded-full h-24 w-24 m-3 neu flex flex-wrap justify-center items-center fadeIn1 opacity-0">
            <a
              href="https://www.linkedin.com/in/racheleantonio/"
              target="blank"
            >
              <Linkedin className="h-12 w-12 fadeIn1 opacity-0" />
            </a>
          </div>
          <div className="rounded-full h-24 w-24 m-3 neu flex flex-wrap justify-center items-center fadeIn2 opacity-0">
            <a href="https://github.com/racheleantonio" target="blank">
              <Github className="h-12 w-12 fadeIn2 opacity-0" />
            </a>
          </div>
          <div className="rounded-full h-24 w-24 m-3 neu flex flex-wrap justify-center items-center fadeIn3 opacity-0">
            <a href="https://twitter.com/RacheleAntonio_" target="blank">
              <Twitter className="h-12 w-12 fadeIn3 opacity-0" />
            </a>
          </div>
          <div className="rounded-full h-24 w-24 m-3 neu flex flex-wrap justify-center items-center fadeIn4 opacity-0">
            <a href={`${process.env.PUBLIC_URL}/cv.pdf`} target="blank">
              <CV className="h-12 w-12 fadeIn4 opacity-0" />
            </a>
          </div>
          <div className="rounded-full h-24 w-24 m-3 neu flex flex-wrap justify-center items-center fadeIn4 opacity-0">
            <a href="mailto:racheleantonio@outlook.com" target="blank">
              <Mail className="h-12 w-12 fadeIn4 opacity-0" />
            </a>
          </div>
          <div className="rounded-full h-24 w-24 neu  m-3 flex flex-wrap justify-center items-center fadeIn5 opacity-0">
            <a href="skype:racheleantonio_2?chat" target="blank">
              <Skype className="h-12 w-12 fadeIn5 opacity-0" />
            </a>
          </div>
          {/* <div><a href='https://t.me/AntoRack' target='blank'><Telegram className="h-24 w-24 m-3 fadeIn6 opacity-0" /></a> */}
        </div>
      </div>
      <div className="p-3 md:p-4 absolute bottom-0 right-0">
        <RA className="items-end h-8 w-8 m-3 fadeIn6 opacity-0" />
      </div>
    </div>
  );
}

export default App;
