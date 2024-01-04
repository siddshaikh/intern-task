import { useEffect, useState } from "react";
import "./HeroSection.css";
import { FaReact } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";

const HeroSection = () => {
  const [screenWidthForIcon, setScreenWidthForIcon] = useState(
    window.innerWidth
  );
  const handleResize = () => {
    setScreenWidthForIcon(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <>
      <section className="hero-container">
        <div className="hero-content">
          <h2>Creative Coder & Developer.</h2>
          <p>
            I&apos;M A PASSIONATE WEB DEVELOPER WITH A MISSION TO CREATE
            DELIGHTFUL AND INTUITIVE DIGITAL EXPERIENCES. WITH A STRONG
            FOUNDATION IN CODING PRINCIPLES AND A KEEN EYE FOR DETAIL, I
            SPECIALIZE IN TRANSLATING COMPLEX IDEAS INTO USER-FRIENDLY
            INTERFACES THAT CAPTIVATE AND ENGAGE.
          </p>
        </div>
        <div className="hero-image">
          <div>
            <div className="tech-icon">
              <span>
                <FaReact
                  size={`${screenWidthForIcon < 600 ? "1.5rem" : "3rem"}`}
                  style={{
                    color: "rgb(0, 255, 255)",
                  }}
                />
              </span>
            </div>
            <img
              src="https://e7.pngegg.com/pngimages/496/551/png-clipart-osomatsu-kun-anime-manga-youtube-chibita-anime-boy-album-face-thumbnail.png"
              alt="hero"
            />
          </div>
          <div>
            <div className="tech-icon">
              <span>
                <FaHtml5
                  size={`${screenWidthForIcon < 600 ? "1.5rem" : "3rem"}`}
                  style={{ color: "rgb(255, 165, 0)" }}
                />
              </span>
            </div>
            <div className="tech-icon">
              <span>
                <FaCss3Alt
                  size={`${screenWidthForIcon < 600 ? "1.5rem" : "3rem"}`}
                  style={{ color: "rgb(0, 0, 128)" }}
                />
              </span>
            </div>
            <div className="tech-icon">
              <span>
                <IoLogoJavascript
                  className="icon"
                  size={`${screenWidthForIcon < 600 ? "1.5rem" : "3rem"}`}
                  style={{ color: "rgb(255, 255, 0)" }}
                />
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
