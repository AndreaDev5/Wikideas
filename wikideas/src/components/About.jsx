import React from "react";
import dev from "../Assets/yo.jpeg";
import "../css/About.css";

const About = () => {
  return (
    <section className="about">
      <h2>Conoce mas</h2>
      <p>Aca hay mas información</p>
      <section className="teammates">
        <article>
          <div>
            <h3>Mision1</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Dignissimos impedit consequuntur iusto eaque illum. Fugit, vero
              labore, eius quis aspernatur saepe sint placeat voluptatem at
              voluptas debitis in molestias consequatur.
            </p>
          </div>
          <img src={dev} alt="ola" />
        </article>
        <article>
          <div>
            <h3>Mision2</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Dignissimos impedit consequuntur iusto eaque illum. Fugit, vero
              labore, eius quis aspernatur saepe sint placeat voluptatem at
              voluptas debitis in molestias consequatur.
            </p>
          </div>
          <img src={dev} alt="ola" />
        </article>
        <article>
          <div>
            <h3>Mision3</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Dignissimos impedit consequuntur iusto eaque illum. Fugit, vero
              labore, eius quis aspernatur saepe sint placeat voluptatem at
              voluptas debitis in molestias consequatur.
            </p>
          </div>
          <img src={dev} alt="ola" />
        </article>
      </section>
    </section>
  );
};

export default About;
