import React from "react";
import "./Hero.css";
import Card from "../card/Card";

const Hero = () => {
  return (
    <div className="hero grid gap-4 grid-cols-2 grid-rows-2 text-center">
      <Card>
        <h1 className="text-6xl m-8">Hello there!</h1>
      </Card>
      <Card>
        <p className="font-bold m-8 align-middle shadow-2xl pt-10">
          Recently I decided that I want to change my professional career to IT.
          I have been preparing for this for some time after completing the
          Infoshare Academy course. I am currently learning and improving my web
          developer skills as a self-taught in Javascript-related techs with the
          help of Udemy and more experienced colleauges . I deeply believe that
          my perseverance will help me achieve this goal.
        </p>
      </Card>
      <Card>
        <h1>Img placeholder</h1>
      </Card>
      <Card>
        <h1>More info...</h1>
      </Card>
    </div>
  );
};

export default Hero;
