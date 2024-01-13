import React, { useState, useEffect } from "react";
import "./about.css";

const About = () => {
  const [isWideScreen, setIsWideScreen] = useState(window.innerWidth > 1169);
  const [isLaptopL, setIsLaptopL] = useState(window.innerWidth < 1441);
  const [isLaptop, setIsLaptop] = useState(window.innerWidth < 976);
  const [isTablet, setIsTablet] = useState(window.innerWidth < 769);
  const [isSmallerTablet, setIsSmallerTablet] = useState(
    window.innerWidth < 570
  );
  const [isMobileM, setIsMobileM] = useState(window.innerWidth < 376);

  useEffect(() => {
    const handleResize = () => {
      const width = document.documentElement.clientWidth;

      const isBiggerThan1440 = width > 1440;
      const isLaptopL = width < 1441 && width > 975;
      const isLaptop = width < 976 && width > 767;
      const isTablet = width < 768 && width > 569;
      const isSmallerTablet = width < 570 && width > 375;
      const isMobileM = width < 376;

      setIsWideScreen(isBiggerThan1440);
      setIsLaptopL(isLaptopL);
      setIsLaptop(isLaptop);
      setIsTablet(isTablet);
      setIsSmallerTablet(isSmallerTablet);
      setIsMobileM(isMobileM);

      console.log("isWideScreen:", isBiggerThan1440);
      console.log("isLaptopL:", isLaptopL);
      console.log("isLaptop:", isLaptop);
      console.log("isTablet:", isTablet);
      console.log("isSmallerTablet:", isSmallerTablet);
      console.log("isMobileM:", isMobileM);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      className={`pt-5 px-5 
    ${isWideScreen ? "wide-screen" : ""} 
    ${isLaptopL ? "laptopL-screen" : ""}
    ${isLaptop ? "laptop-screen" : ""}
    ${isTablet ? "tablet-screen" : ""}
    ${isSmallerTablet ? "smaller-tablet-screen" : ""}
    ${isMobileM ? "mobileM-screen" : ""}
    `}
    >
      <div id="about" className="container-fluid">
        <div className="row">
          <div className="col-md-6">
            <img
              src={process.env.PUBLIC_URL + "/assets/karina.jpeg"}
              alt="KRN"
              className="img-fluid shadow-lg"
              style={{ maxWidth: "75%", height: "auto" }}
            />
          </div>
          <div className="col-md-6 text-start">
            <h1
              className={`text-start ${
                isTablet || isSmallerTablet || isMobileM ? "text-center" : ""
              }`}
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

            <p>
              I like shooting Lovestory, children, catching and leaving their
              memory in the photo.
            </p>

            <p>
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
