import web1 from "../assets/img/web1.png";
import web3 from "../assets/img/web3.png";
import html from "../assets/img/html.png";
import css from "../assets/img/css.png";
import react from "../assets/img/react.png";
import bs from "../assets/img/bs.png";
import LinkedinSVG from "../assets/icons/LinkedinSVG";
import GithubSVG from "../assets/icons/GithubSVG";

export const portfolio = [
  {
    namePro: "Food Journal",
    img: web1,
    description:
      "Implement a React JS application from a bootcamp, guiding it to complex websites with integration via a REST API backend",
    git: "https://github.com/raisyaf20/food-journal",
    tools: ['React JS', 'Bootstrap']
  },
  {
    namePro: "Movie List",
    img: web3,
    description:
      "Implemented React js into creating a movie website. This movie website displays movies retrieved via the Rest API from the movie database",
    git: "https://github.com/raisyaf20/movie-api",
    tools: ['React JS', 'Bootstrap']
  },
];

export const skill = [
  {
    name: "HTML",
    tech: html,
  },
  {
    name: "CSS",
    tech: css,
  },
  {
    name: "Bootstrap",
    tech: bs,
  },
  {
    name: "react",
    tech: react,
  },
];

export const menu = [
  {
    title: 'Home',
    href: '#home'
  },
  {
    title: 'Project',
    href: '#pro'
  },
  {
    title: 'Skill',
    href: '#skill'
  }
]

export const media = [
  {
    icon: LinkedinSVG,
    keyName: 'linkedinSvg',
    href: 'https://www.linkedin.com/in/muhamad-raisyaf/',
  },
  {
    icon: GithubSVG,
    keyName: 'githubSVG',
    href: 'https://www.github.com/raisyaf20',
  }
]