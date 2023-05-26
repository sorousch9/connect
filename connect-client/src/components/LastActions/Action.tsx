import "./Actions.scss";
import { useState } from "react";
/* import { AiOutlineHeart } from "react-icons/ai"; */
import { AiFillHeart } from "react-icons/ai";
import { MdOutlineTextsms } from "react-icons/md";
import { FC } from "react";
import Comments from "../Comments/Comments";
type Props = {
  action: {
    id: number;
    author: {
      name: string;
      photo: string;
    };
    timestamp: string;
    title: string;
    content: string;
  };
};
const Action: FC<Props> = ({ action }) => {
  const [commentOpen, setCommentOpen] = useState(false);

  return (
    <div>
      <div key={action.id} className="action">
        <div className="action-header">
          <img
            src={action.author.photo}
            alt="Profile"
            className="profile-picture"
          />
          <div className="author-name">{action.author.name}</div>
          <div className="timestamp">{action.timestamp}</div>
        </div>
        <h2 className="action-title">{action.title}</h2>
        <p className="action-content">{action.content}</p>
        <div className="info">
          <div className="item">
            <AiFillHeart />
            12 Likes
          </div>
          <div className="item" onClick={() => setCommentOpen(!commentOpen)}>
            <MdOutlineTextsms />
            12 Comments
          </div>
        </div>
        {commentOpen && <Comments />}
      </div>
    </div>
  );
};

export default Action;
