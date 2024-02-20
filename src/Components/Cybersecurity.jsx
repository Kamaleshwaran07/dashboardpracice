import React from "react";

const Cybersecurity = ({ data }) => {
  return (
    <div>
      <div className="container-fluid" id="coverimage">
        <a href="https://www.guvi.in/">
          <img
            src="https://cdn.discordapp.com/attachments/1018124413176135700/1209486337539842088/July-last-week-offer-cover-2048x453.webp?ex=65e718ee&is=65d4a3ee&hm=dd834784dd497840f16dc1a9cc2ab2725f7465ad673205e05ce2803f41dd1f5d&"
            width={"100%"}
            alt="image"
          ></img>
        </a>
      </div>
      <div className="containerhead mt-3">
        <div>
          <h3>Cyber Security</h3>
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

export default Cybersecurity;
