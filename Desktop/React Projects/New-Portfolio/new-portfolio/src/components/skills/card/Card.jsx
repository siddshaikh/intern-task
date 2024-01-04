import "./Card.css";

const Card = ({ title, icon, isActive, onClick }) => {
  return (
    <div
      className={`card ${isActive ? "active" : ""}`}
      onClick={() => onClick()}
    >
      <div className="card-icon">{icon}</div>
      <span>{title}</span>
    </div>
  );
};

export default Card;
