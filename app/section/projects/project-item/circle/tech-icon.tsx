import { ReactNode } from "react";
import { DiJavascript } from "react-icons/di";
import { FaReact } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import {
  SiAntdesign,
  SiAxios,
  SiLerna,
  SiMaterialdesign,
  SiStorybook,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

export type TechType =
  | "react"
  | "next"
  | "tailwind"
  | "js"
  | "ts"
  | "antd"
  | "mui"
  | "storybook"
  | "lerna"
  | "axios"
  | "msw";

const techIcons: Record<TechType, ReactNode> = {
  react: <FaReact />,
  next: <RiNextjsFill />,
  tailwind: <SiTailwindcss />,
  js: <DiJavascript />,
  ts: <SiTypescript />,
  antd: <SiAntdesign />,
  mui: <SiMaterialdesign />,
  storybook: <SiStorybook />,
  lerna: <SiLerna />,
  axios: <SiAxios />,
  msw: <>msw</>,
};

const TechIcon = ({ tech }: { tech: TechType }): ReactNode =>
  techIcons[tech] ?? <></>;

export default TechIcon;
