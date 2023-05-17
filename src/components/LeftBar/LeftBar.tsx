import "./LeftBar.scss";
import Dashboard from "../../assets/leftBar/Dashboard.png";
import History from "../../assets/leftBar/History.png";
import Notifications from "../../assets/leftBar/Notifications.png";
import events from "../../assets/leftBar/events.png";
import HelpSupport from "../../assets/leftBar/HelpSupport.png";
import Integrations from "../../assets/leftBar/Integrations.png";
import workflow from "../../assets/leftBar/workflow.png";
import Tutorials from "../../assets/leftBar/Tutorials.png";
import Messages from "../../assets/leftBar/Messages.png";

const LeftBar = () => {
  return (
    <div className="leftBar">
      <div className="container">
        <div className="menu">
          <div className="user">
            <img
              src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
            />
            <span>Patrick Müller</span>
          </div>

          <div className="item">
            <img src={Dashboard} alt="Dashboard" />
            <span>Dashboard</span>
          </div>
          <div className="item">
            <img src={workflow} alt="Workflow" />
            <span>Workflow </span>
          </div>
          <div className="item">
            <img src={Integrations} alt="Integrations" />
            <span>Integrations </span>
          </div>
          <div className="item">
            <img src={HelpSupport} alt="HelpSupport" />
            <span>Help/Support </span>
          </div>
        </div>
        <hr />
        <div className="menu">
          <span>Your shortcuts</span>
          <div className="item">
            <img src={events} alt="events" />
            <span>Events</span>
          </div>
          <div className="item">
            <img src={Notifications} alt="Notifications" />
            <span>Notifications </span>
          </div>
          <div className="item">
            <img src={History} alt="History" />
            <span>History/Logs</span>
          </div>

          <div className="item">
            <img src={Messages} alt="" />
            <span>Messages</span>
          </div>
        </div>
        <hr />
        <div className="menu">
          <span>Others</span>

          <div className="item">
            <img src={Tutorials} alt="Tutorials" />
            <span>Tutorials</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftBar;
