import "./Contact.css"
const Contact = () => {
  return (
    <>
      <section id="contact">
        <h1 className="section-heading mb50px text-center">
          <span>
            <i className="far fa-address-card"></i>
          </span>
          <span> Contact </span>
        </h1>

        <div id="contact-container">
          <div id="contact-form-container">
            <form id="contact-form">
              <div className="input-group">
                <input id="SenderName" name="name" type="text" required="" />
                <span className="highlight"></span>
                <span className="bar"></span>
                <label> Name</label>
              </div>

              <div className="input-group">
                <input
                  id="SenderSubject"
                  name="email"
                  type="text"
                  required=""
                />
                <span className="highlight"></span>
                <span className="bar"></span>
                <label>Subject</label>
              </div>

              <div className="input-group">
                <textarea
                  id="SenderMessage"
                  name="message"
                  rows="2"
                  cols="40"
                  required=""
                  style={{ height: "63px", "overflow-y": "hidden" }}
                ></textarea>
                <span className="highlight"></span>
                <span className="bar"></span>
                <label>Message</label>
              </div>
              <button className="sub-btn" id="send-button" type="submit">
                Send Message
              </button>
            </form>
          </div>

          <div id="my-details-container">
            <h3> Get In touch </h3>
            <p>
              {" "}
              I would love to hear from you. Contact me on the number provided
              below.{" "}
            </p>

            <h3> My Address </h3>
            <div className="my-details-info-container">
              <i className="fas fa-map-marker-alt"></i>
              <span>Pratik Nagar Yerawada Pune, India</span>
            </div>
            <div className="my-details-info-container">
              <a
                className="contact-section-mail-link otherLinks"
                rel="noopener noreferrer"
               
                href="tel:7765942920"
              >
                <i className="fas fa-mobile-alt"></i>
                <span>7765942920</span>
              </a>
            </div>
            <div className="my-details-info-container">
              <a
                className="contact-section-mail-link otherLinks"
                rel="noopener noreferrer"
                
                href="mailto:vickyjaiswal647@gmail.com"
              >
                <i className="far fa-envelope"></i>
                <span>vickyjaiswal647@gmail.com</span>
              </a>
            </div>
          </div>
        </div>
        <div className="text-center social-icons">
          <ul className="horizontal-list no-list-style bottom-icons">
            <li>
              <a
                rel="noopener noreferrer"
                
                href="https://www.linkedin.com/in/vicky-jaiswal-92a33a175/"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
            </li>

            <li>
              <a
                rel="noopener noreferrer"
                
                href="mailto:vickyjaiswal647@gmail.com"
              >
                <i className="fas fa-envelope"></i>
              </a>
            </li>
            <li>
              <a
                rel="noopener noreferrer"
               
                href="https://github.com/vickyjaiswal647"
              >
                <i className="fab fa-github"></i>
              </a>
            </li>
            <li>
              <a
                rel="noopener noreferrer"
                
                href="#"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
            </li>
            <li>
              <a
                rel="noopener noreferrer"
                hidden
                href="https://www.quora.com/profile/Sagar-Garg-45"
              >
                <i className="fab fa-quora"></i>
              </a>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default Contact;
