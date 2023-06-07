import { axiosRequest } from "../../hooks/axios";
import Action from "./Action";
import "./LastActions.scss";
import { useQuery } from "@tanstack/react-query";

export type ActionType = {
  id: number;
  profilePhoto: string;
  title: string;
  name: string;
  description: string;
  timestamp: string;
  userId: number;
  createdAt: Date;
  img: string;
};
const LastActions = ({ userId }: any) => {
  const { isLoading, error, data } = useQuery(["actions"], () =>
    axiosRequest.get("/actions?userId=" + userId).then((res) => {
      return res.data;
    })
  );

  return (
    <div className="actions-container">
      <h1>Recent Activities</h1>
      {error
        ? "Something went wrong!"
        : isLoading
        ? "loading"
        : data.map((action: ActionType) => (
            <Action key={action.id} action={action} />
          ))}
    </div>
  );
};

export default LastActions;
