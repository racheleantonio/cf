import { ReactNode } from "react";

export const Tile = ({
  className,
  link,
  children,
}: {
  className?: string;
  link: string;
  children: ReactNode;
}) => (
  <a
    href={link}
    target="blank"
    className={`rounded-2xl h-24 w-24 neu grid place-content-center ${
      className ?? ""
    }`}
  >
    {children}
  </a>
);
