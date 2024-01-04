import PropTypes from "prop-types";
import "./ContactInfoCard.css";

const ContactInfoCard = ({ icon, text }) => {
  return (
    <div className="contact-details-card">
      <div className="icon">
        <span>{icon}</span>
      </div>
      <p>{text}</p>
    </div>
  );
};

ContactInfoCard.propTypes = {
  icon: PropTypes.node.isRequired,
  text: PropTypes.string.isRequired,
};

export default ContactInfoCard;
