import Action from "./Action";
import "./LastActions.scss";
const lastActivies = [
  {
    id: 1,
    title: "Database Backup Completed",
    content:
      "The automated task for database backup has been successfully completed.",
    timestamp: "2023-05-20T10:15:00Z",
    author: {
      name: "John Smith",
      photo:
        "https://images.pexels.com/photos/804009/pexels-photo-804009.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
  },
  {
    id: 2,
    title: "Reports Generation Started",
    content: "The scheduled job for reports generation has started execution.",
    timestamp: "2023-05-20T14:30:00Z",
    author: {
      name: "Emily Johnson",
      photo:
        "https://images.pexels.com/photos/8199174/pexels-photo-8199174.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
  },
  {
    id: 3,
    title: "New Email Notification Rule Created",
    content: "A new automation rule for email notifications has been created.",
    timestamp: "2023-05-21T09:45:00Z",
    author: {
      name: "Michael Davis",
      photo:
        "https://images.pexels.com/photos/2380794/pexels-photo-2380794.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
  },
  {
    id: 4,
    title: "Data Cleanup Script Updated",
    content:
      "The automation script for data cleanup has been updated with new logic.",
    timestamp: "2023-05-21T16:20:00Z",
    author: {
      name: "Sophia Wilson",
      photo:
        "https://images.pexels.com/photos/1820559/pexels-photo-1820559.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
  },
  {
    id: 5,
    title: "Reminder Emails Task Failed",
    content:
      "The automated task for sending reminder emails has encountered an error and failed.",
    timestamp: "2023-05-22T08:55:00Z",
    author: {
      name: "Robert Brown",
      photo:
        "https://images.pexels.com/photos/749091/pexels-photo-749091.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
  },
];
const LastActions = () => {
  return (
    <div>
      <h1>Recent Activities</h1>
      <div className="posts-container">
        {lastActivies.map((post) => (
          <Action post={post} />
        ))}
      </div>
    </div>
  );
};

export default LastActions;
