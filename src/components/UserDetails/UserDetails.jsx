import React from 'react';
import './UserDetails.css'; // Import the CSS file

const UserDetails = ({ currentUser }) => {
    if (!currentUser) {
      return <p className="user-details-message">No user selected.</p>;
    }
  
    const { traits } = currentUser;
  
    return (
      <div className="user-details-compact">
        <h3 className="user-name">{traits.name || 'N/A'}</h3>
        <div className="user-traits">
          <span className="trait">
            <strong>Email</strong> {traits.email || 'N/A'}
          </span>
          <span className="trait">
            <strong>Company</strong> {traits.company || 'N/A'}
          </span>
          <span className="trait">
            <strong>Role</strong> {traits.role || 'N/A'}
          </span>
          <span className="trait">
            <strong>Plan</strong> {traits.plan || 'N/A'}
          </span>
        </div>
      </div>
    );
  };
  
  export default UserDetails;