import event1 from "@/public/images/event_finder1.png";
import event2 from "@/public/images/event_finder2.png";
import geo from "@/public/images/geo.gif";
import kanye from "@/public/images/kanye.gif";
import news1 from "@/public/images/news1.png";
import news2 from "@/public/images/news2.png";
import spending1 from "@/public/images/spending1.png";
import spending2 from "@/public/images/spending2.png";
import { StaticImageData } from "next/image";

export interface Project {
  id: number;
  name: string;
  github: string;
  link?: string;
  descriptionBlocks: string[];
  images: StaticImageData[];
}

export interface Data {
  projects: Project[];
}

export const data: Data = {
  projects: [
    {
      id: 1,
      name: "Event Finder - JavaScript",
      github: "https://www.github.com/gregorcox/Event-Finder-Project",
      descriptionBlocks: [
        "At CodeClan, my final project involved collaborating as an agile team of four to create an single-page informational web application using vanilla JavaScript. Together we built Eventfull, a full-stack JavaScript app that allows users to search for events based on category, dates and location.",
        "The app uses two APIs (Skiddle and GeoCode) to fetch event and geographical data. Search results are presented on an interactive Leaflet map where users can click through to see more information and buy tickets. The user can also save their favourite events through the use of a MongoDB NoSQL database. JavaScript is used heavily on the front-end to create a modern looking, responsive and dynamic UI.",
        "In addition to learning a huge amount about JavaScript, we also had the opportunity to practise agile methodologies to plan and coordinate as a team. Stand ups, sprints, scrum boards and pair programming were all used to deliver a fully functional MVP with additional features before the deadline.",
      ],
      images: [event1, event2],
    },
    {
      id: 2,
      name: "Geo Quiz - JavaScript (React)",
      github: "https://github.com/gregorcox/geo-quiz",
      link: "https://symphonious-stroopwafel-5c4678.netlify.app",
      descriptionBlocks: [
        "Built a React.js and TypeScript web app utilising a REST API for country data to allow users to test their geography knowledge. Users can choose a specific region, number of questions and categories such as flags, capitals and populations to generate questions and answers, with their score being presented on completion.",
      ],
      images: [geo],
    },
    {
      id: 3,
      name: "Spending Tracker - Ruby",
      github: "https://www.github.com/gregorcox/Spending-Tracker-Project",
      descriptionBlocks: [
        "My first solo project at CodeClan involved building a full-stack web application to allow users to track their financial transactions. Users are able to create, update, and delete transactions containing a date, and amount, a merchant and a tag, and view their transactions in a table.",
        "The project was created using Ruby with the Sinatra web framework. A postgreSQL database was also used to store transaction, merchant and tag data from the user. This meant users could also filter their transactions by merchant or tag. The app uses a sleek, minimalist front-end with a subtle colour pallette that results in a user friendly UI.",
      ],
      images: [spending1, spending2],
    },
    {
      id: 4,
      name: "News Website - Java",
      github: "https://github.com/gregorcox/News-Website-Project",
      descriptionBlocks: [
        "A paired project completed during my time at CodeClan. We were tasked with creating a full-stack web application using Java for a magazine eager to go digital. The app has an editor side, that allows the creation, update, and deletion of articles and journalists. It also has a user side, where users can browse and read articles, view journalists, and share stories on social media.",
        "The app was built using Java and made use of the Spark web framework. A simple database using the Hibernate framework means creating, editing and deleting articles/journalists is quick and easy. New articles appear on the homepage where users can view the latest stories or use the navigation bar to browse articles based on their respective category. Test driven development was used throughout the project to ensure a reliable backend. The front-end uses a clean and user friendly UI that encourages users to make use of all areas of the app.",
      ],
      images: [news1, news2],
    },
    {
      id: 5,
      name: "Kanye Quotes - JavaScript (React)",
      github: "https://github.com/gregorcox/kanye-quotes",
      link: "https://infallible-hodgkin-93e6e2.netlify.app/",
      descriptionBlocks: [
        "A just for fun project for generating quotes from our generation's greatest artist. Users can select their favourite album to change the design of the page.",
      ],
      images: [kanye],
    },
  ],
};
