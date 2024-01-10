import { TbBrandVscode } from "react-icons/tb";
import { FaFigma } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { GoCopilot } from "react-icons/go";
import { RiOpenaiFill } from "react-icons/ri";

export const TOOLS = [
  {
    id: 0,
    name: "VS Code",
    description:
      "Visual Studio Code is a source-code editor made by Microsoft for Windows, Linux and macOS.",
    icon: TbBrandVscode,
    link: "https://code.visualstudio.com/",
  },
  {
    id: 1,
    name: "Figma",
    description:
      "Figma is a vector graphics editor and prototyping tool which is primarily web-based, with additional offline features.",
    icon: FaFigma,
    link: "https://www.figma.com/",
  },
  {
    id: 2,
    name: "Github",
    description:
      "GitHub is a provider of Internet hosting for software development and version control using Git.",
    icon: FaGithub,
    link: "https://www.github.com/",
  },
  {
    id: 3,
    name: "Copilot",
    description:
      "GitHub Copilot is an AI pair programmer that helps you write better code.",
    icon: GoCopilot,
    link: "https://copilot.github.com/",
  },
  {
    id: 4,
    name: "GPT-4",
    description:
      "GPT-4 is an AI pair programmer that helps you write better code.",
    icon: RiOpenaiFill,
    link: "https://openai.com/blog/openai-codex/",
  },
];
