import "./Contact.css";
import ContactInfoCard from "./contactInfoCard/ContactInfoCard";
import { MdOutlineMailOutline } from "react-icons/md";
import { FiGithub } from "react-icons/fi";
import ContactForm from "./contactForm/ContactForm";

const Contact = () => {
  return (
    <section className="contact-container">
      <h5>Contact Me</h5>
      <div className="contact-content">
        <div style={{ flex: 1 }}>
          <ContactInfoCard
            icon={<MdOutlineMailOutline />}
            text={"siddeekshaikh97@gmail.com"}
          />
          <ContactInfoCard
            icon={<FiGithub />}
            text={"https://github.com/siddshaikh?tab=repositories"}
          />
        </div>
        <div style={{ flex: 1 }}>
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default Contact;
