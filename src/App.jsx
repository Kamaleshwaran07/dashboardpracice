import { useState } from "react";

import "./App.css";
import Navbar from "./Components/Navbar";
import Body from "./Components/Body";

function App() {
  const data = [
    {
      image:
        "https://cdn.discordapp.com/attachments/1018124413176135700/1209475268385706085/Feature-image-Backend-Development-Roadmap-A-Complete-Guide.png?ex=65e70e9e&is=65d4999e&hm=7727717ae028786a31db72f4896e7215529ed82797b9da803fa386c04847f35f&",

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
        "https://cdn.discordapp.com/attachments/1018124413176135700/1209475270713671700/Feature-image-Frontend-vs-Backend-Development-Top-Differences.png?ex=65e70e9f&is=65d4999f&hm=8cc4f5bbe158b4442ee64872e11b7f61d6e8944dd54b24ed3382d2f27141e745&",
    },
    {
      head: "Full Stack Development",
      title:
        "Comprehensive List of Project Ideas for Frontend Development [2024]",
      description:
        "During your college days, you must’ve been bombarded with lots of projects and at that",
      date: "16 March 2023",
      image:
        "https://cdn.discordapp.com/attachments/1018124413176135700/1209475269891727361/Feature-image-Comprehensive-List-of-Project-Ideas-for-Frontend-Development.png?ex=65e70e9f&is=65d4999f&hm=16bae33d4f7e5088a313cb6a2bc4a19841f1d10b171396971b6ea8f4037aa70a&",
    },
    {
      head: "Full Stack Development",
      title: "10 Best Frontend Development Frameworks",
      description:
        "Frontend development frameworks are the backbone of user interface development, enabling developers to build seamless,",
      date: "12 February 2024",
      image:
        "https://media.discordapp.net/attachments/1018124413176135700/1209475269417639976/Feature-image-Best-Frontend-Development-Frameworks.png?ex=65e70e9f&is=65d4999f&hm=625c6f4ea1c9c59648f3482ec6fc73e19ad2027cd739994719da184c88465cf2&=&format=webp&quality=lossless&width=376&height=200",
    },
    {
      head: "Full Stack Development",
      title: "Top 6 Backend Frameworks That You Should Know in 2024",
      description:
        "If you are looking to ace the field of backend development, you must be able",
      date: "12 February 2024",
      image:
        "https://media.discordapp.net/attachments/1018124413176135700/1209475514390290442/Feature-image-Top-Backend-Frameworks-That-You-Should-Know.png?ex=65e70ed9&is=65d499d9&hm=6bcdfb28e8b8246438f735e50629b85f92e108a2dccafa849119fad54b7d06e7&=&format=webp&quality=lossless&width=376&height=200",
    },
    {
      head: "Full Stack Development",
      title: "Backend Developer Salary in India & USA [2024]",
      description:
        "If you’re into making websites and apps work smoothly behind the scenes, you’re probably curious",
      date: "12 February 2024",
      image:
        "https://cdn.discordapp.com/attachments/1018124413176135700/1209475268062740521/Feature-image-Backend-Developer-Salary-in-India-USA.png?ex=65e70e9e&is=65d4999e&hm=e1c0491c7aedbe391f6be27ef81689be88906e24660cb2427174e7bcbfd07d3b&",
    },
    {
      head: "Full Stack Development",
      title: "What Does a Top Backend Developer Do? The Ultimate Guide",
      description:
        "Backend development plays a vital role in the functioning of websites and web applications. While",
      date: "12 February 2024",
      image:
        "https://media.discordapp.net/attachments/1018124413176135700/1209475615946711060/image_3.png?ex=65e70ef1&is=65d499f1&hm=ec3425b7fb88ff14007bb9379bbc07241d5733574f961f616955ddb5e50c8fbc&=&format=webp&quality=lossless&width=376&height=200",
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
      image:
        "https://media.discordapp.net/attachments/1018124413176135700/1209475616387371078/image_4.png?ex=65e70ef1&is=65d499f1&hm=373ae04ffb27dda70c487302a145b40130a13fadb33e49311120ebaefe49311b&=&format=webp&quality=lossless&width=376&height=200",
    },

    {
      head: "Data Science",
      title:
        "What is the Difference between Data Science and Data Engineering?",
      date: "2 December 2023",
      description:
        "India has been making some serious waves in the world of data. Just like the",
      image:
        "https://media.discordapp.net/attachments/1018124413176135700/1209475270340382820/Feature-image-Difference-between-Data-Science-and-Data-Engineering.png?ex=65e70e9f&is=65d4999f&hm=e5b0408f6308a5111bbcd1ec4b00001efb307af014f6727d549911a87f22b189&=&format=webp&quality=lossless&width=376&height=200",
    },
    {
      head: "Data Science",
      title: "Impact of Certification Programs on Hiring Data Scientists",
      date: "15 November 2023",
      description:
        "Data scientists are the creators behind transforming the raw data into edible data insights. These",
      image:
        "https://media.discordapp.net/attachments/1018124413176135700/1209475513916330046/Feature-image-1-1200x600.png?ex=65e70ed9&is=65d499d9&hm=9a636201435ede106318cc11b49f104d97a8a09259a4a2b218395f1f88d5a14e&=&format=webp&quality=lossless&width=376&height=200",
    },
    {
      head: "Data Science",
      title: "Top Product-Based Companies for Data Science Freshers",
      date: "10 November 2023 ",
      description:
        "In today’s data-driven world, data science has emerged as a crucial field, with companies harnessing",
      image:
        "https://cdn.discordapp.com/attachments/1018124413176135700/1209481155556941865/image_5.png?ex=65e7141a&is=65d49f1a&hm=3d7ca20cdfd6f839bd5427a9ce3128c01d474fa121abba663e82255b7dc7b900&",
    },
    {
      head: "Data Science",
      title: "Top Product-Based Companies for Data Scientists in 2024",
      date: "5 October 2023 ",
      description:
        "We all know about the kind of buzz surrounding data science right now, it is",
      image:
        "https://media.discordapp.net/attachments/1018124413176135700/1209475515317223446/Feature-image-Top-Product-Based-Companies-for-Data-Scientists.png?ex=65e70ed9&is=65d499d9&hm=216b6e28dfcf1127a01b92658c138e5714fe44ffac0a2ba4aa71d158ac1fc3e2&=&format=webp&quality=lossless&width=376&height=200",
    },
    {
      head: "Data Science",
      title: "Top 10 Data Science Tools in 2024",
      date: "5 October 2023",
      description:
        "Data Science is an in-demand profession and will continue growing in the coming years. From",
      image:
        "https://media.discordapp.net/attachments/1018124413176135700/1209475618031534080/Top-10-Data-Science-Tools-1-2048x1072.png?ex=65e70ef2&is=65d499f2&hm=e7ab3dd5195c0101420b8b8499ffe52e4b92ffe72b5c5207f38fe34f07b9bf7d&=&format=webp&quality=lossless&width=376&height=200",
    },
    {
      head: "Data Science",
      title: "Useful Python Libraries & Tools for Data Science Beginners",
      date: "29 September 2023",
      description:
        "In a world filled with information, knowing how to understand and use data is super",
      image:
        "https://media.discordapp.net/attachments/1018124413176135700/1209475615154249788/Feature-image-Useful-Python-Libraries-and-Tools-For-Data-Science-Beginners.png?ex=65e70ef1&is=65d499f1&hm=c753722de7aa061681036a64a663f631d385a09ae3a82603f67926e44b8b3455&=&format=webp&quality=lossless&width=376&height=200",
    },
    {
      head: "Data Science",
      title:
        "Extraordinary Data Science Projects for Beginners As Well as Veterans",
      date: "28 August 2023",
      description:
        "As the demand for data and the people that can conquer it, i.e. Data Scientists",
      image:
        "https://cdn.discordapp.com/attachments/1018124413176135700/1209475513706352730/Data-Science-project-showcase.png?ex=65e70ed9&is=65d499d9&hm=29d56effc32efdb759e7b5e246b3798fd8fbe5b1f847dac51826330f26eeb889&",
    },
    {
      head: "Cyber Security",
      title: "Non-Coding Jobs in Cybersecurity: A Comprehensive Guide",
      date: "4 December 2023",
      description:
        "In the rapidly evolving field of cybersecurity, there is a common misconception that coding skills",
      image:
        "https://media.discordapp.net/attachments/1018124413176135700/1209475271107805234/Feature-image-Non-Coding-Jobs-in-Cybersecurity.png?ex=65e70e9f&is=65d4999f&hm=af13e53f72d942ccc3e9982701106917b8caf7b4e4b6d940c8dd74858759a22e&=&format=webp&quality=lossless&width=376&height=200",
    },
    {
      head: "Cyber Security",
      title: "What Is Hacking? Types of Hacking & More",
      date: "25 September 2023",
      description:
        "Have you ever wondered what hacking is all about? It’s a big deal in today’s",
      image:
        "https://media.discordapp.net/attachments/1018124413176135700/1209475615539859536/Feature-image-What-Is-Hacking_-Types-of-Hacking-More.png?ex=65e70ef1&is=65d499f1&hm=ccae46776bef105816acae25b672c0ca6bf608c9f09c85861f363e9126583385&=&format=webp&quality=lossless&width=376&height=200",
    },
    {
      head: "Cyber Security",
      title:
        "What is Cybersecurity? Importance and its uses & the growing challenges in 2023!",
      date: "20 December 2022",
      description:
        "Look around today, you will witness that we are more reliant on technology and devices",
      image:
        "https://cdn.discordapp.com/attachments/1018124413176135700/1209475513459023913/cybersecuity-.png?ex=65e70ed9&is=65d499d9&hm=19151b2354f922d129c644b38254010b4a3500c2694a15192ce5dd6e6889b644&",
    },
    {
      head: "Career",
      title: "Master JavaScript Frontend Roadmap: From Novice to Expert [2024]",
      date: "4 April 2023",
      description:
        "Are you eager to learn JavaScript? Want to dive deep into the JavaScript frontend roadmap?",
      contextdescription: "",
      image:
        "https://media.discordapp.net/attachments/1018124413176135700/1209475616676646962/javascript-animated-image.png?ex=65e70ef1&is=65d499f1&hm=d020c8113a5893f0c8bec1b2c1f71274757de6e1cc0c8d2e9ecae772c66c56a8&=&format=webp&quality=lossless&width=376&height=200",
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
        "https://media.discordapp.net/attachments/1018124413176135700/1209475515539398656/Feature-image-Top-Technologies-to-Learn-Jumpstart-a-Successful-Tech-Career.png?ex=65e70ed9&is=65d499d9&hm=6e33ffe78359c3909014e1a60286f4c6c1ab02dc356cf5e421eae1933e892c99&=&format=webp&quality=lossless&width=376&height=200",
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
        "https://cdn.discordapp.com/attachments/1018124413176135700/1209475614860509204/feature-image-UIUX-Designer-Roles-Responsibilities-Job-Description.png?ex=65e70ef1&is=65d499f1&hm=57483912d3cf83490c56e8e973cdc4e302073cb4620bf981789e1605a654d94b&",
      contextimage: "July-last-week-offer-cover-2048x453.webp",
    },
    {
      head: "Career",
      title: "Top 5 IT Jobs for Economics Students",
      date: "4 April 2023",
      description:
        "In today’s digital age, the intersection of economics and technology offers exciting career opportunities for",
      contextdescription: "",
      image:
        "https://media.discordapp.net/attachments/1018124413176135700/1209475515094798386/Feature-image-Top-IT-Jobs-for-Economics-Students.png?ex=65e70ed9&is=65d499d9&hm=65f35ee6d55cac30f2e0a03690be4ae8800aeeb7c9fe6652935a360c63f34ea4&=&format=webp&quality=lossless&width=376&height=200",
      contextimage: "July-last-week-offer-cover-2048x453.webp",
    },
    {
      head: "Career",
      title: "Top IT Jobs for Commerce Students: A Lucrative Career Path",
      date: "2 December 2023 ",
      description:
        "With the rapid advancement of technology, the demand for IT professionals has soared in recent",
      contextdescription: "",
      image:
        "https://media.discordapp.net/attachments/1018124413176135700/1209475514863976498/Feature-image-Top-IT-Jobs-for-Commerce-Students.png?ex=65e70ed9&is=65d499d9&hm=3e6dde8580071a298c4238f5bc9b987a02c4a1c43689d2e1361d7b06ff71e888&=&format=webp&quality=lossless&width=376&height=200",
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
        "https://media.discordapp.net/attachments/1018124413176135700/1209475514167730176/Feature-image-Automation-Test-Engineer-Resume-Important-Things-To-Consider.png?ex=65e70ed9&is=65d499d9&hm=6d97ccafa378613da3cb638650fa81134f2443b05430818711e5a56ae2e24482&=&format=webp&quality=lossless&width=376&height=200",
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
