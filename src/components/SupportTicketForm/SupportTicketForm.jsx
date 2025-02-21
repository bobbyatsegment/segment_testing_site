import React, { useState } from 'react';
import './SupportTicketForm.css';

const SupportTicketForm = () => {
  const [subject, setSubject] = useState('');
  const [priority, setPriority] = useState('Medium');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Generate a unique ticket ID (for demonstration purposes)
    const ticketId = 'TICK' + Math.floor(Math.random() * 100000);

    // Create the event payload
    const eventPayload = {
      ticketId,
      subject,
      priority,
      submittedAt: new Date().toISOString(),
      description,
    };

    // Trigger the "Support Ticket Submitted" event
    window.analytics?.track('Support Ticket Submitted', eventPayload);

    // Reset the form
    setSubject('');
    setPriority('Medium');
    setDescription('');
  };

  return (
    <form className='support-form' onSubmit={handleSubmit}>
      <h2 className='form-heading'>Submit a Support Ticket</h2>

      <div className="form-group">
        <label className='form-label'>Subject:</label>
        <input
          type="text"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          className="form-input"
          required
        />
      </div>

      <div className="form-group">
        <label className='form-label'>Priority:</label>
        <select
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
          className="form-input"
        >
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>
      </div>

      <div className="form-group">
        <label className='form-label'>Description:</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="support-description"
          required
        />
      </div>

      <button type="submit" className="form-button">
        Submit Ticket
      </button>
    </form>
  );
};

export default SupportTicketForm;
