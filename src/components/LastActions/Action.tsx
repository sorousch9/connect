import "./Actions.scss";
import { useState } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { AiFillHeart } from "react-icons/ai";
import { MdOutlineTextsms } from "react-icons/md";
import { FC } from "react";
import Comments from "../Comments/Comments";
type Props = {
  post: {
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
const Action: FC<Props> = ({ post }) => {
  const [commentOpen, setCommentOpen] = useState(false);

  return (
    <div>
      <div key={post.id} className="post">
        <div className="post-header">
          <img
            src={post.author.photo}
            alt="Profile"
            className="profile-picture"
          />
          <div className="author-name">{post.author.name}</div>
          <div className="timestamp">{post.timestamp}</div>
        </div>
        <h2 className="post-title">{post.title}</h2>
        <p className="post-content">{post.content}</p>
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
