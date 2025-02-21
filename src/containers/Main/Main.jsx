import './Main.css'
import { useContext, useState, useEffect } from "react";
import { CustomContext } from "../../state-management/app-context";
import UserSwitcher from '../../components/UserSwitcher/UserSwitcher.jsx'
import UserDetails from '../../components/UserDetails/UserDetails.jsx'
import TrackingDebugger from '../../components/TrackingDebugger/TrackingDebugger.jsx'

const Main = () => {
    const { state } = useContext(CustomContext);
    const [lastEvent, setLastEvent] = useState(null);
  
    useEffect(() => {
      if (!state.currentUser) return;
  
      // Capture the last event in TrackingDebugger
      setLastEvent({
        eventType: "identify",
        eventData: {
          type: "identify",
          userId: state.currentUser.userId || null,
          traits: state.currentUser.traits,
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
        },
      });
    }, [state.currentUser]);
  
    return (
      <div className="main-container">
        <h1>Welcome to the Segment Demo</h1>
        <p>This site showcases how Segment can track users and events.</p>
  
        <div className="identity-debugger-container">
          <div className="identity-container">
            <UserDetails currentUser={state.currentUser} />
            <UserSwitcher />
          </div>
          <TrackingDebugger eventType={lastEvent?.eventType} eventData={lastEvent?.eventData} />
        </div>
      </div>
    );
  };
  
  export default Main;