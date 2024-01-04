import { ReactComponent as Linkedin } from "./assets/full/linkedin.svg";
import { ReactComponent as Github } from "./assets/full/github.svg";
import { ReactComponent as Twitter } from "./assets/full/twitter.svg";
import { ReactComponent as Mail } from "./assets/full/mail.svg";
import { ReactComponent as CV } from "./assets/full/resume.svg";
import { ReactComponent as Telegram } from "./assets/full/telegram.svg";
import { ReactComponent as RA } from "./assets/RA.svg";
import { Tile } from "./components/Tile";
import { useEffect } from "react";
import ReactGA from "react-ga";

const data = [
  {
    name: "Linkedin",
    icon: Linkedin,
    link: "https://www.linkedin.com/in/racheleantonio/",
  },
  { name: "Github", icon: Github, link: "https://github.com/racheleantonio" },
  {
    name: "Twitter",
    icon: Twitter,
    link: "https://twitter.com/RacheleAntonio_",
  },
  { name: "Mail", icon: Mail, link: "mailto:racheleantonio@outlook.com" },
  { name: "CV", icon: CV, link: "./cv.pdf" },
  // { name:'Skype',icon: Skype, link: "skype:racheleantonio_2?chat" },
  { name: "Telegram", icon: Telegram, link: "https://t.me/AntoRack" },
];

const App = () => {
  useEffect(() => {
    ReactGA.initialize("G-FE3M24CTLB");
    ReactGA.set({ page: window.location.pathname });
    ReactGA.pageview(window.location.pathname);
  }, []);

  return (
    <div className="h-full w-full bg-gray-900 flex justify-center items-center p-10">
      <div className="mb-28 flex flex-wrap justify-center gap-y-16 gap-x-32">
        <div>
          <p className="my-2 text-white light opacity-80 fade-in-0 text-2xl">
            Hello, I am
          </p>
          <header className="text-white heavy zoom-in-1 text-7xl tracking-wider  select-none">
            Antonio
          </header>
          <header className="text-white heavy opacity-75 zoom-in-2 text-7xl tracking-wider lg:mt-3 select-none">
            Rachele
          </header>
        </div>
        <div className="grid grid-cols-3 gap-5 lg:gap-8 ">
          {data.map(({ name, icon: Icon, link }, index) => (
            <Tile
              key={index}
              name={name}
              className={`opacity-0 fade-in-${index}`}
              link={link}
            >
              <Icon className="h-12 w-12" />
            </Tile>
          ))}
        </div>
      </div>
      <div className="p-3 md:p-4 absolute bottom-0 right-0">
        <RA className="items-end h-8 w-8 m-3 fade-in-5 opacity-0" />
      </div>
    </div>
  );
};

export default App;
