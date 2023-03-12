import web1 from "../../assets/img/web1.png";
import web2 from "../../assets/img/web2.png";
import web3 from "../../assets/img/web3.png";
import html from "../../assets/img/html.png";
import css from "../../assets/img/css.png";
import react from "../../assets/img/react.png";
import bs from "../../assets/img/bs.png";
import sv from "../../assets/img/location.png";
import call from "../../assets/img/shape.png";
import email from "../../assets/img/email.svg";

export const portfolio = [
  {
    namePro: "Food Journal",
    img: web1,
    description:
      "Deploy React JS to complex websites with integration via a REST API backend. Tools used: React Hook Form, React-Router, Axios, React-Select, and use the Bootstrap framework",
    git: "https://github.com/raisyaf20/food-journal",
  },
  {
    namePro: "Movie API",
    img: web3,
    description:
      "Implemented React js into creating a movie website. This movie website displays movies retrieved via the Rest API from the movie database. the tools used are react-bootstrap, Axios, Formik",
    git: "https://github.com/raisyaf20/movie-api",
  },
  {
    namePro: "Website Movie",
    img: web2,
    description:
      "Implemented React js into creating a movie website. This movie website displays movies retrieved via the Rest API from the movie database. the tools used are react-bootstrap, Axios, Formik",
    git: "https://github.com/raisyaf20/movie-api",
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

export const contactMe = [
  {
    img: sv,
    title: "Pay Us a Visit",
    desc: "Ciputat, South Tanggerang, Banten",
  },
  {
    img: call,
    title: "Give Us a Call",
    desc: "(+62) 82125614453",
  },

  {
    img: email,
    title: "Send Us a Message",
    desc: "raisyafmuhamad@gmail.com",
  },
];
