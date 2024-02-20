import { useState } from "react";

import "./App.css";
import Navbar from "./Components/Navbar";
import Body from "./Components/Body";

function App() {
  const data = [
    {
      image: "Feature-image-Backend-Development-Roadmap-A-Complete-Guide.png",

      head: "Full Stack Development",
      title: "Backend Development Roadmap: A Complete Guide 2024",
      description:
        "In the swiftly evolving landscape of technology, backend development stands as an important foundation that",
      date: "28 January 2024",
    },

    {
      head: "Full Stack Development",
      title: "Frontend vs Backend Development: Top 7 Differences",
      description:
        "In today’s digital age, web development has become a crucial component of the IT industry.",
      date: "16 February 2024",
      image:
        "Feature-image-Frontend-vs-Backend-Development-Top-Differences.png",
    },
    {
      head: "Full Stack Development",
      title:
        "Comprehensive List of Project Ideas for Frontend Development [2024]",
      description:
        "During your college days, you must’ve been bombarded with lots of projects and at that",
      date: "16 March 2023",
      image:
        "Feature-image-Comprehensive-List-of-Project-Ideas-for-Frontend-Development.png",
    },
    {
      head: "Full Stack Development",
      title: "10 Best Frontend Development Frameworks",
      description:
        "Frontend development frameworks are the backbone of user interface development, enabling developers to build seamless,",
      date: "12 February 2024",
      image: "Feature-image-Best-Frontend-Development-Frameworks.png",
    },
    {
      head: "Full Stack Development",
      title: "Top 6 Backend Frameworks That You Should Know in 2024",
      description:
        "If you are looking to ace the field of backend development, you must be able",
      date: "12 February 2024",
      image: "Feature-image-Top-Backend-Frameworks-That-You-Should-Know.png",
    },
    {
      head: "Full Stack Development",
      title: "Backend Developer Salary in India & USA [2024]",
      description:
        "If you’re into making websites and apps work smoothly behind the scenes, you’re probably curious",
      date: "12 February 2024",
      image:
        "Feature-image-Top-High-Paying-Non-Coding-Jobs-in-Data-Science.png",
    },
    {
      head: "Full Stack Development",
      title: "What Does a Top Backend Developer Do? The Ultimate Guide",
      description:
        "Backend development plays a vital role in the functioning of websites and web applications. While",
      date: "12 February 2024",
      image: "image 3.png",
    },
    {
      head: "Full Stack Development",
      title:
        "What is Frontend Development? Roles, Responsibilities, Skills & Salary",
      description:
        "Frontend development is all about making websites that look good and work well for people",
      date: "15 February 2024",
      image: "who_is_a_front_end_developer.png",
    },
    {
      head: "Full Stack Development",
      title: "Top Full Stack Development Trends for 2024: What to Expect",
      description:
        "In the ever-evolving world of technology, developers must stay up-to-date with the latest trends. Full",
      date: "15 February 2024",
      image: "image 4.png",
    },

    {
      head: "Data Science",
      title:
        "What is the Difference between Data Science and Data Engineering?",
      date: "2 December 2023",
      description:
        "India has been making some serious waves in the world of data. Just like the",
      image:
        "Feature-image-Difference-between-Data-Science-and-Data-Engineering.png",
    },
    {
      head: "Data Science",
      title: "Impact of Certification Programs on Hiring Data Scientists",
      date: "15 November 2023",
      description:
        "Data scientists are the creators behind transforming the raw data into edible data insights. These",
      image: "Feature-image-1-1200x600.png",
    },
    {
      head: "Data Science",
      title: "Top Product-Based Companies for Data Science Freshers",
      date: "10 November 2023 ",
      description:
        "In today’s data-driven world, data science has emerged as a crucial field, with companies harnessing",
      image:
        "Feature-image-Top-Product-Based-Companies-for-Data-Scientists.png",
    },
    {
      head: "Data Science",
      title: "Top Product-Based Companies for Data Scientists in 2024",
      date: "5 October 2023 ",
      description:
        "We all know about the kind of buzz surrounding data science right now, it is",
      image: "Top-10-Data-Science-Tools-1-2048x1072.png",
    },
    {
      head: "Data Science",
      title: "Top 10 Data Science Tools in 2024",
      date: "5 October 2023",
      description:
        "Data Science is an in-demand profession and will continue growing in the coming years. From",
      image:
        "Feature-image-Top-Product-Based-Companies-for-Data-Scientists.png",
    },
    {
      head: "Data Science",
      title: "Useful Python Libraries & Tools for Data Science Beginners",
      date: "29 September 2023",
      description:
        "In a world filled with information, knowing how to understand and use data is super",
      image:
        "Feature-image-Useful-Python-Libraries-and-Tools-For-Data-Science-Beginners.png",
    },
    {
      head: "Data Science",
      title:
        "Extraordinary Data Science Projects for Beginners As Well as Veterans",
      date: "28 August 2023",
      description:
        "As the demand for data and the people that can conquer it, i.e. Data Scientists",
      image: "Data-Science-project-showcase.png",
    },
    {
      head: "Cyber Security",
      title: "Non-Coding Jobs in Cybersecurity: A Comprehensive Guide",
      date: "4 December 2023",
      description:
        "In the rapidly evolving field of cybersecurity, there is a common misconception that coding skills",
      image: "Feature-image-Non-Coding-Jobs-in-Cybersecurity.png",
    },
    {
      head: "Cyber Security",
      title: "What Is Hacking? Types of Hacking & More",
      date: "25 September 2023",
      description:
        "Have you ever wondered what hacking is all about? It’s a big deal in today’s",
      image: "Feature-image-What-Is-Hacking_-Types-of-Hacking-More.png",
    },
    {
      head: "Cyber Security",
      title:
        "What is Cybersecurity? Importance and its uses & the growing challenges in 2023!",
      date: "20 December 2022",
      description:
        "Look around today, you will witness that we are more reliant on technology and devices",
      image: "cybersecuity-.png",
    },
    {
      head: "Career",
      title: "Master JavaScript Frontend Roadmap: From Novice to Expert [2024]",
      date: "4 April 2023",
      description:
        "Are you eager to learn JavaScript? Want to dive deep into the JavaScript frontend roadmap?",
      contextdescription: "",
      image: "javascript-animated-image.png",
      contextimage: "July-last-week-offer-cover-2048x453.webp",
    },
    {
      head: "Career",
      title:
        "Top Technologies to Learn in 2024: Jumpstart a Successful Tech Career",
      date: "19 January 2024 ",
      description:
        "If your New Year resolution consists of building a successful tech career in 2024, then",
      contextdescription: "",
      image:
        "Feature-image-Top-Technologies-to-Learn-Jumpstart-a-Successful-Tech-Career.png",
      contextimage: "July-last-week-offer-cover-2048x453.webp",
    },
    {
      head: "Career",
      title: "UI/UX Designer Job Description and Roles & Responsibilities",
      date: "4 April 2023",
      description:
        "UI UX is the abbreviated word that’s been rocking the trend over the years, especially",
      contextdescription: "",
      image:
        "feature-image-UIUX-Designer-Roles-Responsibilities-Job-Description.png",
      contextimage: "July-last-week-offer-cover-2048x453.webp",
    },
    {
      head: "Career",
      title: "Top 5 IT Jobs for Economics Students",
      date: "4 April 2023",
      description:
        "In today’s digital age, the intersection of economics and technology offers exciting career opportunities for",
      contextdescription: "",
      image: "Feature-image-Top-IT-Jobs-for-Economics-Students.png",
      contextimage: "July-last-week-offer-cover-2048x453.webp",
    },
    {
      head: "Career",
      title: "Top IT Jobs for Commerce Students: A Lucrative Career Path",
      date: "2 December 2023 ",
      description:
        "With the rapid advancement of technology, the demand for IT professionals has soared in recent",
      contextdescription: "",
      image: "Feature-image-Top-IT-Jobs-for-Commerce-Students.png",
      contextimage: "July-last-week-offer-cover-2048x453.webp",
    },
    {
      head: "Career",
      title: "Automation Test Engineer Resume: 10 Important Things To Consider",
      date: "1 December 2023",
      description:
        "The world is moving towards automating the testing of products in order to increase work",
      contextdescription: "",
      image:
        "Feature-image-Automation-Test-Engineer-Resume-Important-Things-To-Consider.png",
      contextimage: "July-last-week-offer-cover-2048x453.webp",
    },
  ];
  return (
    <>
      <Navbar />
      <Body data={data} /> 
      {/* Passing the data to the main component */}
    </>
  );
}

export default App;
