import "./DocAlert.css";

const DocAlert = ({ type = "info", title, children }) => {
  // Define styles based on type
  const alertTypes = {
    info: {
      icon: "ℹ️",
      className: "doc-alert info",
    },
    warning: {
      icon: "⚠️",
      className: "doc-alert warning",
    },
  };

  const { icon, className } = alertTypes[type] || alertTypes.info; // Default to info

  return (
    <div className={className}>
      <div className="doc-alert-header">
        <span className="doc-alert-icon">{icon}</span>
        <strong>{title}</strong>
      </div>
      <div className="doc-alert-content">{children}</div>
    </div>
  );
};

export default DocAlert;
