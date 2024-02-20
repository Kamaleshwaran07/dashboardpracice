import React from "react";

const DS = ({ data }) => {
  return (
    <div>
      <div className="containerhead">
        <div>
          <h3>Data Science</h3>
          <p>
            One of the most propelling careers on the planet today, Data Science
            is a vast arena of diverse technologies and techniques. Are you
            ready to step into the world of Data? Then you probably should not
            miss this corner of articles that is an assorted curation out of
            tedious research & exploration.
            <br />
            The GUVI Blog’s Data Science category is here to help you steer
            through a lot of opinions that float on the internet. High-Quality
            content curated by experts!
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
    </div>
  );
};

export default DS;
