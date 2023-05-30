import "./Actions.scss";
import { useContext, useState } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { AiFillHeart } from "react-icons/ai";
import { AiOutlineMore } from "react-icons/ai";
import { MdOutlineTextsms } from "react-icons/md";
import { FC } from "react";
import Comments from "../Comments/Comments";
import { ActionType } from "./LastActions";
import { axiosRequest } from "../../hooks/axios";
import { useQuery, useQueryClient, useMutation } from "@tanstack/react-query";
import { AuthContext } from "../../context/authContext";
import moment from "moment";
type Props = {
  action: ActionType;
};
const Action: FC<Props> = ({ action }) => {
  const [commentOpen, setCommentOpen] = useState<boolean>(false);
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const { currentUser } = useContext(AuthContext);
  const { isLoading, data } = useQuery(["likes", action.id], () =>
    axiosRequest.get("/likes?actionId=" + action.id).then((res) => {
      return res.data;
    })
  );

  const queryClient = useQueryClient();

  const mutation = useMutation(
    (liked: boolean) => {
      if (liked) return axiosRequest.delete("/likes?actionId=" + action.id);
      return axiosRequest.post("/likes", { actionId: action.id });
    },
    {
      onSuccess: () => {
        // Invalidate and refetch
        queryClient.invalidateQueries(["likes"]);
      },
    }
  );
  const deleteMutation = useMutation(
    (actionId) => {
      return axiosRequest.delete("/actions/" + actionId);
    },
    {
      onSuccess: () => {
        // Invalidate and refetch
        queryClient.invalidateQueries(["actions"]);
      },
    }
  );

  const handleLike = () => {
    mutation.mutate(data.includes(currentUser?.id));
  };

  const handleDelete = () => {
    deleteMutation.mutate();
  };

  return (
    <div key={action.id} className="action">
      <div className="action-header">
        <img
          src={currentUser?.profilePhoto}
          alt="Profile"
          className="profile-picture"
        />
        <div className="author-name">{currentUser?.name}</div>
        <div className="timestamp">{moment(action.createdAt).fromNow()}</div>

        <AiOutlineMore onClick={() => setMenuOpen(!menuOpen)} />
        {menuOpen && action.userId === currentUser?.id && (
          <button onClick={handleDelete}>delete</button>
        )}
      </div>

      <h2 className="action-title">{action.title}</h2>
      <hr />
      <p className="action-content">{action.description}</p>
      <div className="info">
        <div className="item">
          {isLoading ? (
            "loading"
          ) : data.includes(currentUser?.id) ? (
            <AiFillHeart style={{ color: "red" }} onClick={handleLike} />
          ) : (
            <AiOutlineHeart onClick={handleLike} />
          )}
          {data?.length} Likes
        </div>
        <div className="item" onClick={() => setCommentOpen(!commentOpen)}>
          <MdOutlineTextsms />
          See Comments
        </div>
      </div>
      {commentOpen && <Comments actionId={action.id} />}
    </div>
  );
};

export default Action;
