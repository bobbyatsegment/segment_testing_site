import './Support.css';
import SupportTicketForm from '../../components/SupportTicketForm/SupportTicketForm.jsx';

const Support = () => {
  return (
    <div className="support-container">
      <h1>Contact Support</h1>
      <p>Need help? Fill out the form below and we’ll get back to you as soon as possible.</p>
      <SupportTicketForm />
    </div>
  );
};

export default Support;
