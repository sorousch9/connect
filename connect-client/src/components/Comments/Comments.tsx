import { useContext } from "react";
import "./Comments.scss";
import { AuthContext } from "../../context/authContext";

const Comments = () => {
  const { currentUser } = useContext(AuthContext);
  const comments = [
    {
      id: 1,
      desc: "I really enjoyed reading this comment. The author expressed their thoughts eloquently and captured my attention. The content was engaging and thought-provoking. I appreciate the effort put into writing such a great comment. Well done!",
      name: "John Smith",
      userId: 1,
      profilePicture:
        "https://images.pexels.com/photos/804009/pexels-photo-804009.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    {
      id: 2,
      desc: "This comment is concise yet impactful. It conveys a clear message and leaves room for interpretation. The author did a fantastic job of expressing their thoughts in a concise manner. Great work!",
      name: "Sophia Wilson",
      userId: 2,
      profilePicture:
        "https://images.pexels.com/photos/1820559/pexels-photo-1820559.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
  ];
  return (
    <div className="comments">
      <div className="write">
        <img src={currentUser?.profilePic} alt="" />
        <input type="text" placeholder="write a comment" />
        <button>Send</button>
      </div>
      {comments.map((comment) => (
        <div className="comment">
          <img src={comment.profilePicture} alt="" />
          <div className="info">
            <span>{comment.name}</span>
            <p>{comment.desc}</p>
          </div>
          <span className="date">1 hour ago</span>
        </div>
      ))}
    </div>
  );
};

export default Comments;
