import "./RightBar.scss";

const RightBar = () => {
  return (
    <div className="rightBar">
      <div className="container">
        <div className="item">
          <span className="activityHeader">Latest Activities</span>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://images.pexels.com/photos/1520760/pexels-photo-1520760.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="Profile"
                className="profileImage"
              />
              <p className="activityDetails">
                <span className="username">Mary Jane </span> just completed a
                task on the Automation Workflow app.
              </p>
            </div>
            <span className="activityTime">1 minute ago</span>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://images.pexels.com/photos/6801642/pexels-photo-6801642.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Profile"
                className="profileImage"
              />
              <p className="activityDetails">
                <span className="username">John Smith</span> created a new
                workflow on the Automation Workflow app.
              </p>
            </div>
            <span className="activityTime">2 hours ago</span>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://images.pexels.com/photos/2269872/pexels-photo-2269872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Profile"
                className="profileImage"
              />
              <p className="activityDetails">
                <span className="username">Fin Johnson</span> updated an
                existing workflow on the Automation Workflow app.
              </p>
            </div>
            <span className="activityTime">4 hours ago</span>
          </div>
        </div>
        <div className="item">
          <span>Your Last Connect</span>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://images.pexels.com/photos/3260957/pexels-photo-3260957.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Profile"
                className="profileImage"
              />
              <div className="onlineIndicator" />
              <span className="username">Ham Otto</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://images.pexels.com/photos/5794945/pexels-photo-5794945.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Profile"
                className="profileImage"
              />
              <div className="onlineIndicator" />
              <span className="username">Sarah Fischer</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default RightBar;
