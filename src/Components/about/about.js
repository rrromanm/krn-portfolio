import React from "react";
import "./about.css";

const About = () => {
  
  return (
    <div
      className="py-5 px-5"
    >
      <div id="about" className="container-fluid">
        <div className="row">
          <div className="col-md-6">
            <img
              src={process.env.PUBLIC_URL + "/assets/karina.jpeg"}
              alt="KRN"
              className="img-fluid shadow-lg mx-auto d-block "
              style={{ width: '75%' }}  
            />
          </div>
          <div className="col-md-6 text-start ">
            <h1
              className="text-center"
            >
              ABOUT ME
            </h1>

            <p>
              My name is Karina, and I am an aspiring photographer and
              videographer in Spain. I hope to remove the beginner label soon
              because every day I feel more confident in myself and my
              creativity.
            </p>

            <p>
              I developed a love for photography in childhood when my dad and I
              were developing photographs in the bathtub. Dad's camera is always
              with me!
            </p>

            <p>
              All my life, I just liked filming, but now a fire flared up in my
              heart with incredible power. I decided to let my creativity be!
            </p>

            <p>
              I see the details and display the story. I love Streetphoto, where
              everything is as it is in Our life - people, houses, cars, nature.
              Everything is fine.
            </p>

            <p className="d-none d-xl-block">
              I like shooting Lovestory, children, catching and leaving their
              memory in the photo.
            </p>

            <p className="d-none d-xl-block">
              My style is clean and natural.
              <br />
              I am always looking for an original and individual vision, whether
              for a family celebration, an outing, or other events. I believe
              that a photo report should convey emotions and capture those
              unique moments of joy.
              <br />I display all this in Our photographs, so that when years
              pass and you look at the report from the shooting again, those
              feelings and moments of happiness will return to you.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
