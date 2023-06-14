import React from "react";
import "/public/styles.css";
import Instapic from "./components/instagram.png";
import Linkedinpic from "./components/linkedin.png";
import Mailpic from "./components/email.png";

function CurrentSpeakers(props) {
  return (
    <div className="currentspeakers">
      <div className="image">
        <img className="imag" src={props.imgURL} alt="" width="270px" />
      </div>
      <div className="info">
        <h1 className="infoh1">{props.name}</h1>
        <p>
          <i>{props.profession}</i>
        </p>
        <div className="team-contact-section">
          <a
            className="contactlink"
            href="https://www.instagram.com/kazu_kun106/"
          >
            <img className="contactimg" src={Instapic} alt=" " width="28px" />
          </a>
          <a
            className="contactlink"
            href="https://www.instagram.com/kazu_kun106/"
          >
            <img
              className="contactimg"
              src={Linkedinpic}
              alt=" "
              width="28px"
            />
          </a>
          <a
            className="contactlink"
            href="https://www.instagram.com/kazu_kun106/"
          >
            <img className="contactimg" src={Mailpic} alt=" " width="28px" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default CurrentSpeakers;
