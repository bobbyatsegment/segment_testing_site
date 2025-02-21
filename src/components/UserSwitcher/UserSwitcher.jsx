import { users } from "../../utilities/userData";
import { useContext, useEffect } from "react";
import { CustomContext } from "../../state-management/app-context";
import { setCurrentUserAction } from "../../state-management/action";
import "./UserSwitcher.css";

const UserSwitcher = () => {
  const { dispatch, state } = useContext(CustomContext);

  const knownUsers = users.filter((user) => user.userId);
  const anonymousUsers = users.filter((user) => user.anonymousId);

  useEffect(() => {
    dispatch(setCurrentUserAction(users[0]));
  }, [])

  // Handle user switch
  const handleUserSwitch = (user) => {
    // Reset analytics
    window.analytics?.reset();

    // Identify the selected user
    if (user.userId) {
      window.analytics?.identify(user.userId, user.traits);
    } else if (user.anonymousId) {
      window.analytics?.identify(null, user.traits, { anonymousId: user.anonymousId });
    }

    // Update the global state
    dispatch(setCurrentUserAction(user));
    console.log('switched: ', user)
    console.log('state: ', state)
  };

  return (
    <div className="switcher-container">
      <h2 className="switcher-heading">Switch Identities</h2>

      <div className="user-section">
        <h3 className="sub-heading">Known Users</h3>
        <div className="button-container">
          {knownUsers.map((user, index) => (
            <button key={index} onClick={() => handleUserSwitch(user)} className="switcher-button">
              {user.traits.name}
            </button>
          ))}
        </div>
      </div>

      <div className="user-section">
        <h3 className="sub-heading">Anonymous Users</h3>
        <div className="button-container">
          {anonymousUsers.map((user, index) => (
            <button key={index} onClick={() => handleUserSwitch(user)} className="switcher-button">
              {user.traits.name || `${user.anonymousId}`}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserSwitcher;