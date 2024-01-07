import { ReactNode } from "react";
import ReactGA from "react-ga4";

export const Tile = ({
  name,
  className,
  link,
  children,
}: {
  name: string;
  className?: string;
  link: string;
  children: ReactNode;
}) => {
  const trackButtonClick = () => {
    console.log(name);
    ReactGA.event({
      category: "tile-click",
      action: name.toLocaleLowerCase(),
      label: name.toLocaleLowerCase(),
    });
  };
  return (
    <a
      aria-label={name}
      href={link}
      target="blank"
      className={`rounded-2xl h-20 lg:h-24 w-20 lg:w-24 neu grid place-content-center ${
        className ?? ""
      }`}
      onClick={trackButtonClick}
    >
      {children}
    </a>
  );
};
