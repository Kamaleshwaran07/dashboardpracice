import React from "react";
import Allimage from "/blog-header-2048x315.webp";
import Context from "./Context";
import Card from "./Card";
const All = ({ data }) => {
  return (
    <div className="containerhead" id="all">
      <a href="https://www.guvi.in/">
        <img src={Allimage} height={"175em"} width={"100%"}></img> 
      </a>
      <div className="container-card row ">
        {data.map((item, index) => {
          return (
            <>
              <div className="card rounded col-3 p-0 m-3" id="card">
                <img src={item.image}></img>
                <div className="container-desc">
                  <h5>{item.title}</h5>
                  <p>
                    {item.description} <br />
                    <span className="fs-6" id="read">
                      Read more..
                    </span>
                  </p>
                </div>
                <hr />
                <footer className="me-5">
                  <p className="text-muted">{item.date}</p>
                </footer>
              </div>
            </>
          );
        })}
      </div>
      ;
    </div>
  );
};

export default All;
