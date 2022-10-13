import { SiJavascript } from "@react-icons/all-files/si/SiJavascript"
import { SiCss3 } from "@react-icons/all-files/si/SiCss3"
import { FaReact } from "@react-icons/all-files/fa/FaReact"
import { SiMongodb } from "@react-icons/all-files/si/SiMongodb"
import { FaNodeJs } from "@react-icons/all-files/fa/FaNodeJs"
import { SiGraphql } from "@react-icons/all-files/si/SiGraphql"
// import { SiExpress } from "@react-icons/all-files/si/SiExpress"
import { ImHtmlFive } from "@react-icons/all-files/im/ImHtmlFive"
import { RiGitMergeLine } from "@react-icons/all-files/ri/RiGitMergeLine"
import { SiJquery } from "@react-icons/all-files/si/SiJquery"
import { SiBootstrap } from "@react-icons/all-files/si/SiBootstrap"
import { SiTailwindcss } from "@react-icons/all-files/si/SiTailwindcss"
import { SiJava } from "@react-icons/all-files/si/SiJava"
import { GrMysql } from "@react-icons/all-files/gr/GrMysql"


export const projects = [
    {
      title: "TapCard",
      tools: "Javascript, MongoDB, Express, React, Node, Apollo, GraphQL, Bcrypt, HTML and CSS",
      description:
        "Web application that offers students and alumni the ability to connect with one another in a secure environment to share their interests and wealth of knowledge as they plan for future careers. It is a MERN stack single-page application that can works with real-world data to solve a real-world challenge.",
      image: require('./assets/projects/TapCard.png'),
      link: "https://tap-card-everyone.herokuapp.com/",
    },
    {
      title: "Online Record Store",
      tools: "JavaScript, Node, MySQL2, Sequelize, Inquirer, CSS, Express, Handlebars and Foundation",
      description:
        "Website where customers can sell their used records, or buy from others. Having the option to add the information of the records and an image link as a reference for the album. Users will be able to communicate by adding comments to all the posts!",
      image: require('./assets/projects/record-swap.png'),
      link: "https://gentle-stream-19606.herokuapp.com/",
    },
    {
      title: "Movie Moods",
      tools: "JavaScript, HTML, CSS, Tailwind, TMDB and OMDB API's",
      description:
        "As a user you will have access to details about the movies of your interest, you will also have extra options if you don't know what to watch, the webpage will provide you a variety of genre options to choose from and depending on your choices random posters will be displayed.",
      image: require('./assets/projects/movie-moods.png'),
      link: "https://israel2800.github.io/Movie-Moods/",
    },
    {
      title: "Budget Tracker - PWA",
      tools: "JavaScript, Node, MongoDB, Mongoose, Express, HTML and CSS",
      description:
        "Web application that allows a user to keep track of their withdrawals and deposits with or without a data/internet connection, so that their account balance will be accurate.",
      image: require('./assets/projects/pwa.png'),
      link: "https://budget-tracker-pwa-12.herokuapp.com/",
    },
    {
      title: "The Note Taker",
      tools: "JavaScript, Express, Node, HTML and CSS",
      description:
        "Web application with the functionality as a note taker, in which you can write, save and delete all the notes you want, you will keep track of all the information you would like to save, you can also view all your notes at every time you want with your latest updates.",
      image: require('./assets/projects/note-taker.png'),
      link: "https://note-taker-task.herokuapp.com/",
    },
    {
      title: "Weather Dashboard Web",
      tools: "Javascript, HTML, CSS and API",
      description:
        "This website is designed for all the users who want to know the weather conditions to determine what activities they will be able to do outdoors, it also helps you to perfectly plan your weather related activities because the website will give you a five day weather forecast .",
      image: require('./assets/projects/weather-dashboard.png'),
      link: "https://israel2800.github.io/weather-dashboard-web/",
    },
    {
      title: "Work Day Scheduler",
      tools: "Javascript, HTML and CSS",
      description:
        "Website built for all users who need to manage their time during business hours, it is very easy and convenient to use because it will not only allow you to record all your activities, this application will also notify you when you are on time or not.",
      image: require('./assets/projects/work-scheduler.png'),
      link: "https://israel2800.github.io/work-day-scheduler/",
    },
    {
      title: "Run Buddy",
      tools: "HTML and CSS",
      description:
        "Cool website design for a gym, offering its various services, including its staff. It is mobile responsive with an attractive interface.",
      image: require('./assets/projects/run-buddy.png'),
      link: "https://israel2800.github.io/run-buddy/",
    },
  ];
  
  export const skills = [
    {
      skill: "JavaScript",
      icon: <SiJavascript className="text-yellow-400 w-6 h-6 flex-shrink-0 mr-4" />
    },
    {
      skill: "React",
      icon: <FaReact className="text-blue-200 w-6 h-6 flex-shrink-0 mr-4" />
    },
    {
      skill: "Java",
      icon: <SiJava className="text-blue-300 w-6 h-6 flex-shrink-0 mr-4" />
    },
    {
      skill: "MongoDB",
      icon: <SiMongodb className="text-green-400 w-6 h-6 flex-shrink-0 mr-4" />
    },
    {
      skill: "Node.js",
      icon: <FaNodeJs className="text-green-400 w-6 h-6 flex-shrink-0 mr-4" />
    },
    {
      skill: "CSS",
      icon: <SiCss3 className="text-blue-400 w-6 h-6 flex-shrink-0 mr-4" />
    },
    {
      skill: "Express.js",
      icon: <SiJavascript className="text-cyan-500 w-6 h-6 flex-shrink-0 mr-4" />
    },
    {
      skill: "HTML",
      icon: <ImHtmlFive className="text-orange-500 w-6 h-6 flex-shrink-0 mr-4" />
    },
    {
      skill: "Git",
      icon: <RiGitMergeLine className="text-orange-500 w-6 h-6 flex-shrink-0 mr-4" />
    },
    {
      skill: "JQuery",
      icon: <SiJquery className="text-blue-700 w-6 h-6 flex-shrink-0 mr-4" />
    },
    {
      skill: "GraphQL",
      icon: <SiGraphql className="text-pink-600 w-6 h-6 flex-shrink-0 mr-4" />
      ,
    },
    {
      skill: "Tailwind",
      icon: <SiTailwindcss className="text-sky-400 w-6 h-6 flex-shrink-0 mr-4" />
    },
    {
      skill: "MySQL",
      icon: <GrMysql className="text-blue-300 w-6 h-6 flex-shrink-0 mr-4" />
    },
    {
      skill: "Bootstrap",
      icon: <SiBootstrap className="text-purple-700 w-6 h-6 flex-shrink-0 mr-4" />
    },
  ];
  