import "./instantMessenger.css";
import Auth from "../../utils/auth";

export default function InstantMessenger() {
  function render() {
    if (Auth.loggedIn()) {
      return (
        <>
          <div>I'm a chat window</div>
        </>
      );
    } else {
      return <h2>You need to be logged in to view this page</h2>;
    }
  }
  return <div className="iMessenger">{render()}</div>;
}
