import React from 'react';
import './hero.css';

function HeroSection(props) {
  return (
    <>
      <div className={props.cName}>
        <img src={props.heroImg} alt="error" />
        <div className="hero-text">
          <h1>{props.title}</h1>
          <p>{props.text}</p>
          <a href={props.url} className={props.btnClass}>
            {props.buttontext}
          </a>
        </div>
      </div>
    </>
  );
}

export default HeroSection;
