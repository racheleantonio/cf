import React from "react";
import "./styles/tailwind.css";
import { ReactComponent as Linkedin } from "./assets/Linkedin.svg";
import { ReactComponent as Github } from "./assets/Github.svg";
import { ReactComponent as Twitter } from "./assets/Twitter.svg";
import { ReactComponent as Mail } from "./assets/Mail.svg";
import { ReactComponent as CV } from "./assets/CV.svg";
import { ReactComponent as Skype } from "./assets/Skype.svg";


function App() {
  return (
    <div className="h-full w-full bg-gray-900 flex justify-center items-center p-8">
      <div>
        <header className=" fadeIn1 text-4xl lg:text-5xl text-center text-white opacity-75">
          Rachele
        </header>
        <header className=" fadeIn1 text-4xl lg:text-5xl text-center text-white opacity-75">
          Antonio
        </header>
        <div className="mt-6 flex flex-wrap w-full justify-center items-center">
        <a href='https://www.linkedin.com/in/racheleantonio/' target='blank'><Linkedin className="h-24 w-24 m-3 fadeIn1 opacity-0" /></a>
          <a href='https://github.com/racheleantonio' target='blank'><Github className="h-24 w-24 m-3 fadeIn2 opacity-0" /></a>
          <a href='https://twitter.com/RacheleAntonio_' target='blank'><Twitter className="h-24 w-24 m-3 fadeIn3 opacity-0" /></a>
          <a href={`${process.env.PUBLIC_URL}/cv.pdf`} target='blank'><CV className="h-24 w-24 m-3 fadeIn4 opacity-0" /></a>
          <a href='mailto:racheleantonio@outlook.com' target='blank'><Mail className="h-24 w-24 m-3 fadeIn4 opacity-0" /></a>
          <a href='skype:racheleantonio_2?chat' target='blank'><Skype className="h-24 w-24 m-3 fadeIn5 opacity-0" /></a>
          {/* <a href='https://t.me/AntoRack' target='blank'><Telegram className="h-24 w-24 m-3 fadeIn6 opacity-0" /></a> */}
        </div>
      </div>
    </div>
  );
}

export default App;
