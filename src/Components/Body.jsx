import React from "react";
import Context from "./Context";
import All from "./All";
import Card from "./Card";
import Navtitles from "./Navtitles";
import { Route, Routes } from "react-router-dom";
import Fullstackdevelopment from "./Fullstackdevelopment";
import DS from "./DS";
import Cybersecurity from "./Cybersecurity";
import Career from "./Career";

const Body = ({ data }) => {
  return (
    <>
      <div>
        <Navtitles />  
        {/* Navigating titles are created in one component */}
      </div>
      <Routes>
        <Route path="/" element={<All data={data} />} />
        <Route
          path="/FSD"
          element={
            <Fullstackdevelopment
              data={data.filter(
                (item) => item.head === "Full Stack Development"
                // Filtering the data to display the specific information according to the head

              )}
            />
          }
        />
        <Route
          path="/DS"
          element={
            <DS data={data.filter((item) => item.head === "Data Science")} />
          }
        />
        <Route
          path="/CS"
          element={
            <Cybersecurity
              data={data.filter((item) => item.head === "Cyber Security")}
            />
          }
        />
        <Route
          path="/Career"
          element={
            <Career
              data={data.filter((item) => item.head === "Career")}
            />
          }
        />
      </Routes>
    </>
  );
};

export default Body;
