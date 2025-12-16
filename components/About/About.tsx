import React from 'react';
import styles from './About.module.scss';

const About: React.FC = () => {
  return (
    <section className="section-about" id="section-about">
      <div className="u-center-text u-margin-bottom-big">
        <h2 className="heading-secondary">About</h2>
      </div>
      <div className="row">
        <div className="col-1-of-2">
          <h3 className="heading-tertiary u-margin-bottom-small">
            Graphics Designer turned Web Developer
          </h3>
          <p className="paragraph">
            Even earlier in life I was always interested in technology and the web, but I started my
            career as a salesman. But after a few years I was unhappy with my trajectory. On my own
            I started learning Illustrator and Photoshop and got the opportunity at Dell to switch
            up my career. To improve more I also went back to school and started to work at Creative
            Clicks since they had more possibilities for me to grow and become a Web-Developer.
            During my career as a whole I always tried to improve my knowledge. And since I feel I
            outgrew my role within Creative Clicks I'm looking for my next challenge.
          </p>
          <a
            href="https://docs.google.com/document/d/1LJPb-8iOm7oP7KZzxdB98Qp_BMOfeE21cHiaUeV1mTY"
            className="btn-text"
          >
            My CV &rarr;
          </a>
        </div>
        <div className="col-1-of-2">
          <div className={styles.composition}>
            <img
              srcSet="/images/about_3-small.jpg 300w, /images/about_3.jpg 1000w"
              src="/images/about_3.jpg"
              sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px"
              alt="Photo 3"
              className={`${styles.compositionPhoto} ${styles.compositionPhotoP1}`}
            />

            <img
              srcSet="/images/about_2-small.jpg 300w, /images/about_2.jpg 1000w"
              src="/images/about_2.jpg"
              sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px"
              alt="Photo 2"
              className={`${styles.compositionPhoto} ${styles.compositionPhotoP2}`}
            />

            <img
              srcSet="/images/about_1-small.jpg 300w, /images/about_1.jpg 1000w"
              src="/images/about_1.jpg"
              sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px"
              alt="Photo 1"
              className={`${styles.compositionPhoto} ${styles.compositionPhotoP3}`}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
