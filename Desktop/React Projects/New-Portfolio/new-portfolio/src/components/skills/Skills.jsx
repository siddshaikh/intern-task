import { useState } from "react";
import { SKILLS } from "../../utils/Data";
import "./Skills.css";
import Card from "./card/Card";
import { CgWebsite } from "react-icons/cg";
import { FaCode } from "react-icons/fa";
import { FaTools } from "react-icons/fa";
import { GiSkills } from "react-icons/gi";
import SkillInfoCard from "./skillInfoCard/skillInfoCard";

const Skills = () => {
  const [selectedSkill, setSelectedSkill] = useState(SKILLS[0]);
  const handleSkill = (data) => {
    setSelectedSkill(data);
  };
  const getIconComponent = (iconName) => {
    switch (iconName) {
      case "CgWebsite":
        return <CgWebsite />;
      case "FaCode":
        return <FaCode />;
      case "FaTools":
        return <FaTools />;
      case "GiSkills":
        return <GiSkills />;
      default:
        return null;
    }
  };
  return (
    <section className="skills-container">
      <h5>How Much I Know?</h5>
      <div className="skills-content">
        <div className="skills">
          {SKILLS.map((item) => (
            <Card
              key={item.title}
              icon={getIconComponent(item.icon)}
              title={item.title}
              isActive={selectedSkill.title === item.title}
              onClick={() => handleSkill(item)}
            />
          ))}
        </div>
        <div className="skills-info">
          <SkillInfoCard
            heading={selectedSkill.title}
            skills={selectedSkill.skills}
          />
        </div>
      </div>
    </section>
  );
};

export default Skills;
