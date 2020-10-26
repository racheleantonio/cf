import React from "react";
import "./styles/tailwind.css";
import { ReactComponent as Github } from "./assets/Github.svg";
import { ReactComponent as Twitter } from "./assets/Twitter.svg";
import { ReactComponent as Mail } from "./assets/Mail.svg";
import { ReactComponent as Telegram } from "./assets/Telegram.svg";

function App() {
  return (
    <div className="h-full w-full bg-gray-900 flex justify-center items-center p-8">
      <div>
        <header className=" fadeIn1 text-4xl lg:text-5xl text-center text-gray-400">
          Rachele
        </header>
        <header className=" fadeIn1 text-4xl lg:text-5xl text-center text-gray-400">
          Antonio
        </header>
        <div className="mt-6 flex flex-wrap w-full justify-center items-center">
          <a href='https://github.com/racheleantonio' target='blank'><Github className="h-24 w-24 m-3 fadeIn1 opacity-0" /></a>
          <a href='https://twitter.com/RacheleAntonio_' target='blank'><Twitter className="h-24 w-24 m-3 fadeIn2 opacity-0" /></a>
          <a href='mailto:racheleantonio@outlook.com' target='blank'><Mail className="h-24 w-24 m-3 fadeIn3 opacity-0" /></a>
          <a href='https://t.me/AntoRack' target='blank'><Telegram className="h-24 w-24 m-3 fadeIn4 opacity-0" /></a>
        </div>
      </div>
    </div>
  );
}

export default App;
