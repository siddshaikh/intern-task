import { useRef } from "react";
import { WORK_EXPERIENCE } from "../../utils/Data";
import "./WorkExperience.css";
import ExperienceCard from "./experienceCard/ExperienceCard";
import Slider from "react-slick";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const WorkExperience = () => {
  const sliderRef = useRef();
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const sliderRight = () => {
    sliderRef.current.slickNext();
  };
  const sliderLeft = () => {
    sliderRef.current.slickPrev();
  };
  return (
    <section className="experience-container">
      <h5>My Role in the Tech Industry</h5>
      <div className="experience-content">
        <div className="arrow-right" onClick={sliderRight}>
          <span className="material-symbols-outlined">
            <IoIosArrowForward />
          </span>
        </div>
        <div className="arrow-left" onClick={sliderLeft}>
          <span className="material-symbols-outlined">
            <IoIosArrowBack />
          </span>
        </div>
        <Slider ref={sliderRef} {...settings}>
          {WORK_EXPERIENCE.map((item) => (
            <ExperienceCard key={item.title} details={item} />
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default WorkExperience;
