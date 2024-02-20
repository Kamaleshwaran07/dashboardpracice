import React from "react";

const Career = ({ data }) => {
  return (
    <div>
      <div className="container-fluid" id="coverimage">
        <a href="https://www.guvi.in/">
          <img
            src="July-last-week-offer-cover-2048x453.webp"
            width={"100%"}
            alt="image"
          ></img>
        </a>
      </div>
      <div className="containerhead mt-3">
        <div>
          <h3>Career</h3>
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
    </div>
  );
};

export default Career;
