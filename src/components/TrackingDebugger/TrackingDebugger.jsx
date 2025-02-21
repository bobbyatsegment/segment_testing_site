import { useState, useEffect } from "react";
import { useCustomContext } from "../../state-management/app-context";
import "./TrackingDebugger.css";

const TrackingDebugger = () => {
    const { state } = useCustomContext();
    const [showJSON, setShowJSON] = useState(false);
    const [formattedEvent, setFormattedEvent] = useState(null);
  
    useEffect(() => {
      if (!state.currentUser) return;
  
      const eventData = {
        type: "identify",
        userId: state.currentUser.userId || null, // Ensures null if no userId
        traits: state.currentUser.traits || {}, // Ensures traits is always an object
        timestamp: new Date().toISOString(),
        anonymousId: state.currentUser.anonymousId || null,
        integrations: {},
        context: {
          page: {
            path: window.location.pathname,
            referrer: document.referrer,
            search: window.location.search,
            title: document.title,
            url: window.location.href,
          },
        },
      };
  
      setFormattedEvent(eventData);
    }, [state.currentUser]);
  
    return (
      <div className="debugger-container">
        <div className="debugger-header">
          <h3>Tracking Debugger</h3>
          <button onClick={() => setShowJSON(!showJSON)}>
            {showJSON ? "Show Code" : "Show JSON"}
          </button>
        </div>
        <pre className="debugger-code">
          {showJSON ? (
            <SyntaxHighlightedJSON data={formattedEvent} />
          ) : (
            <SyntaxHighlightedCode data={formattedEvent} />
          )}
        </pre>
      </div>
    );
  };
  
  // ✅ Safe rendering of JSON with React components (No `[object Object]` issues)
  const SyntaxHighlightedJSON = ({ data }) => {
    if (!data) return null;
  
    const jsonString = JSON.stringify(data, null, 2);
    return jsonString.split("\n").map((line, index) => (
      <div key={index} className="json-line">
        {line}
      </div>
    ));
  };
  
  // ✅ Properly formats `analytics.identify` call
  const SyntaxHighlightedCode = ({ data }) => {
    if (!data) return null;
  
    const identifyCall = `analytics.identify(${data.userId ? `'${data.userId}'` : "null"}, ${JSON.stringify(
      data.traits,
      null,
      2
    )})`;
  
    return identifyCall.split("\n").map((line, index) => (
      <div key={index} className="json-line">
        {line}
      </div>
    ));
  };
  
  export default TrackingDebugger;
  