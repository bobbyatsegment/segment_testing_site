import { useSearchParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import "./ContactForm.css";

const ContactForm = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const plan = searchParams.get("plan") || "unknown";
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Track event in Segment
    window.analytics?.track("Sales Contact Requested", {
      email,
      plan,
      timestamp: new Date().toISOString(),
    });

    setSubmitted(true); // Show thank-you message
  };

  const capitalize = (str) => {
	if (!str) return ''; // Handle null, undefined, or empty strings
	return str.charAt(0).toUpperCase() + str.slice(1);
  }

  return (
    <div className="contact-container">
      {submitted ? (
        // Thank You Message (Displayed after form submission)
        <div className="thank-you-message">
          <h2>Thank You!</h2>
          <p>Our sales team will reach out soon regarding the <strong>{capitalize(plan)}</strong> plan.</p>
          <button className="return-button" onClick={() => navigate("/")}>
            Return to Main Page
          </button>
        </div>
      ) : (
        // Contact Form (Displayed before submission)
        <>
          <h2>Get in Touch</h2>
          <p>Enter your email and our sales team will reach out about the <strong>{capitalize(plan)}</strong> plan.</p>
          <form onSubmit={handleSubmit}>
            <input 
              type="email" 
              placeholder="Your Email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button type="submit">Submit</button>
          </form>
          <button className="return-button" onClick={() => navigate("/pricing")}>
            Return to Plans
          </button>
        </>
      )}
    </div>
  );
};

export default ContactForm;
