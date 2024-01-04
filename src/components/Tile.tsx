import { ReactNode } from "react";
import ReactGA from "react-ga";

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
      category: "Tile Click",
      action: name,
      label: name,
    });
  };
  return (
    <a
      aria-label={name}
      href={link}
      target="blank"
      className={`rounded-2xl h-24 w-24 neu grid place-content-center ${
        className ?? ""
      }`}
      onClick={trackButtonClick}
    >
      {children}
    </a>
  );
};
