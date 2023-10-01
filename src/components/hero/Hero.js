import React from "react";
import "./Hero.css";
import Card from "../card/Card";

const Hero = () => {
  return (
    <div className="hero">
      <Card>
        <img src="" />
        <h1
          style={{
            textAlign: "center",
            paddingTop: "20px",
            paddingBottom: "20px",
          }}
        >
          Hello there!
        </h1>
        <div
          style={{
            width: "50vw",
            textAlign: "center",
            opacity: "0.5",
            margin: "0 auto",
            backgroundColor: "#ffffff",
            
          }}
        >
          <p
            style={{
              textAlign: "center",
              margin: "0 auto",
              paddingTop: "20px",
              paddingBottom: "20px",
              width: "50vw",
              justifyContent: "center",
              fontSize: "20px",
              fontWeight: "bold",
              color: "black",
            }}
          >
            Recently I decided that I want to change my professional career to
            IT. I have been preparing for this for some time after completing
            the Infoshare Academy course. I am currently learning and improving
            my web developer skills as a self-taught Javascript-related techs
            with the help of Udemy and more experienced colleauges . I deeply
            believe that my perseverance will help me achieve this goal.
          </p>
        </div>
      </Card>
    </div>
  );
};

export default Hero;
