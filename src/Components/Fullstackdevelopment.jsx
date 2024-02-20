import React from "react";

const Fullstackdevelopment = ({ data }) => {
  return (
    <div className="containerhead">
      <div>
        <h3>Full Stack Development</h3>
        <p>
          "Are you a curious geek with an unstoppable urge to develop? Then,
          your Full Stack Development knack would be sun-glazed with an
          innovative and informative piece of knowledge that comes from Top
          industrialists and Appreneurs!
          <br />
          The GUVI Blog’s Full Stack Development category is here to help you
          steer through a lot of opinions that float on the internet.
          High-Quality content curated by experts!",
        </p>
      </div>
      <div className="container-card row">
        {data.map((item, index) => {
          return (
            <>
              <div className="card rounded col-3 p-0 m-3" id="card">
                <img src={item.image} className="card-img-top w-100"></img>

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
                <footer>
                  <p className="text-muted me-2">{item.date}</p>
                </footer>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Fullstackdevelopment;
