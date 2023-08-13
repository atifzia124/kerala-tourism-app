import React from "react";
import aboutImg from "../images/about.jpeg";
import Title from "./Title";

const About = () => {
  return (
    <section className="section" id="about">
      <Title title="about" subTitle="us" />

      <div className="section-center about-center">
        <div className="about-img">
          <img src={aboutImg} className="about-photo" alt="awesome beach" />
        </div>
        <article className="about-info">
          <h3>explore the difference</h3>
          <p>
            Pick your favorite and explore the best of God’s Own Country!.If you
            wish to dive deeper and soak in the culture of Kerala, you should
            opt one from our more than 100 Kerala tour packages.
          </p>
          <p>
            Whatever the budget, from standard to luxury, our Kerala tour
            packages are customizable as per your wants. Be it a sightseeing
            tour across the beaches of Kerala, a tour in the lush green spice
            plantations, a wildlife tour in the untouched forests of Thekkady or
            a romantic getaway Kerala tour package for the newly wed.
          </p>
          <a href="#about" className="btn">
            read more
          </a>
        </article>
      </div>
    </section>
  );
};

export default About;
