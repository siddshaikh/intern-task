import "./ContactForm.css";

const ContactForm = () => {
  return (
    <div className="contact-form-container">
      <form>
        <div className="name-container">
          <input type="text" name="firstname" placeholder="First Name" />
          <input type="text" name="lastname" placeholder="Last Name" />
        </div>
        <input type="email" name="email" placeholder="Email" />
        <textarea name="message" id="" rows="3" placeholder="Message" />
        <button>SEND</button>
      </form>
    </div>
  );
};

export default ContactForm;
