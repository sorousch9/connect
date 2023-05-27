import { useContext, useState } from "react";
import "./Comments.scss";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import moment from "moment";
import { axiosRequest } from "../../hooks/axios";
import { AuthContext } from "../../context/authContext";

interface Comment {
  description: string;
  actionId: number;
  createdAt?: string;
}

interface QueryData {
  data: Comment[];
  map: (callback: (comment: Comment) => any) => any[];
}

const Comments: React.FC<{ actionId: number }> = ({ actionId }) => {
  const [description, setDescription] = useState("");
  const { currentUser } = useContext(AuthContext);

  const { isLoading, error, data } = useQuery<QueryData>(["comments"], () =>
    axiosRequest.get("/comments?actionId=" + actionId).then((res) => {
      return res.data;
    })
  );

  const queryClient = useQueryClient();

  const mutation = useMutation(
    (newComment: Comment) => {
      return axiosRequest.post("/comments", newComment);
    },
    {
      onSuccess: () => {
        // Invalidate and refetch
        queryClient.invalidateQueries(["comments"]);
      },
    }
  );

  const handleClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    mutation.mutate({ description, actionId });
    setDescription("");
  };

  return (
    <div className="comments">
      <div className="write">
        <img src={currentUser?.profilePhoto} alt="" />
        <input
          type="text"
          placeholder="write a comment"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button onClick={handleClick}>Send</button>
      </div>
      {error
        ? "Something went wrong"
        : isLoading
        ? "loading"
        : data?.map((comment) => (
            <div className="comment" key={comment.createdAt}>
              <img src="" alt="" />
              <div className="info">
                <span>commnet.name</span>
                <p>{comment.description}</p>
              </div>
              <span className="date">
                {moment(comment.createdAt).fromNow()}
              </span>
            </div>
          ))}
    </div>
  );
};

export default Comments;
