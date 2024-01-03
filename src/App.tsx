import { ReactComponent as Linkedin } from "./assets/full/linkedin.svg";
import { ReactComponent as Github } from "./assets/full/github.svg";
import { ReactComponent as Twitter } from "./assets/full/twitter.svg";
import { ReactComponent as Mail } from "./assets/full/mail.svg";
import { ReactComponent as CV } from "./assets/full/resume.svg";
import { ReactComponent as Telegram } from "./assets/full/telegram.svg";
import { ReactComponent as RA } from "./assets/RA.svg";
import { Tile } from "./components/Tile";

const data = [
  { icon: Linkedin, link: "https://www.linkedin.com/in/racheleantonio/" },
  { icon: Github, link: "https://github.com/racheleantonio" },
  { icon: Twitter, link: "https://twitter.com/RacheleAntonio_" },
  { icon: Mail, link: "mailto:racheleantonio@outlook.com" },
  { icon: CV, link: "./cv.pdf" },
  // { icon: Skype, link: "skype:racheleantonio_2?chat" },
  { icon: Telegram, link: "https://t.me/AntoRack" },
];

const App = () => (
  <div className="h-full w-full bg-gray-900 flex justify-center items-center p-8">
    <div className="mt-3 mb-8">
      <header className="text-white opacity-75 zoomIn1 text-5xl tracking-wider select-none text-center">
        Rachele
      </header>
      <header className="text-white opacity-75 zoomIn2 text-5xl tracking-wider lg:mt-3 select-none text-center">
        Antonio
      </header>
      <div className="mt-10 grid grid-cols-3 gap-8 ">
        {data.map(({ icon: Name, link }, index) => (
          <Tile className={`opacity-0 fade-in-${index}`} link={link}>
            <Name className="h-12 w-12" />
          </Tile>
        ))}
      </div>
    </div>
    <div className="p-3 md:p-4 absolute bottom-0 right-0">
      <RA className="items-end h-8 w-8 m-3 fade-in-5 opacity-0" />
    </div>
  </div>
);

export default App;
