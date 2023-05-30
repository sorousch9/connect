import "./share.scss";

import { useContext, useState, ChangeEvent, MouseEvent } from "react";
import { AuthContext } from "../../context/authContext";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { axiosRequest } from "../../hooks/axios";
import { FcCollaboration } from "react-icons/fc";
import { FcAddImage } from "react-icons/fc";
import { FcViewDetails } from "react-icons/fc";
interface FormData {
  append(key: string, value: any): void;
}

interface ResponseData {
  data: string;
}

interface NewAction {
  title: string;
  description: string;
  img: string;
}

const Share = (): JSX.Element => {
  const [file, setFile] = useState<File | null>(null);
  const [description, setDescription] = useState<string>("");
  const [title, setTitle] = useState<string>("");

  const upload = async (): Promise<string> => {
    try {
      const formData: FormData = new FormData();
      if (file) {
        formData.append("file", file);
        const res: ResponseData = await axiosRequest.post("/upload", formData);
        return res.data;
      }
      return "";
    } catch (err) {
      console.log(err);
      return "";
    }
  };

  const { currentUser } = useContext(AuthContext);

  const queryClient = useQueryClient();

  const mutation = useMutation(
    (newAction: NewAction) => {
      return axiosRequest.post("/actions", newAction);
    },
    {
      onSuccess: () => {
        // Invalidate and refetch
        queryClient.invalidateQueries(["actions"]);
      },
    }
  );

  const handleClick = async (
    e: MouseEvent<HTMLButtonElement>
  ): Promise<void> => {
    e.preventDefault();
    let imgUrl = "";
    if (file) imgUrl = await upload();
    mutation.mutate({ title, description, img: imgUrl });
    setDescription("");
    setTitle("");
    setFile(null); // Set file to null after handling it
  };
  const handleFileChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const selectedFile = e.target.files?.[0];
    setFile(selectedFile || null); // Set file to null if no file is selected
  };
  return (
    <div className="share">
      <div className="container">
        <div className="top">
          <div className="inputs">
            <img src={currentUser?.profilePhoto} alt="" />
            <form style={{ width: "100%" }}>
              <label>
                Title
                <input
                  type="text"
                  placeholder={`Title your Action ?`}
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    setTitle(e.target.value)
                  }
                  required
                  value={title}
                />
              </label>
              <label>
                Description
                <input
                  type="text"
                  style={{ minHeight: "40px" }}
                  placeholder={`Write a short description from last your Action ?`}
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    setDescription(e.target.value)
                  }
                  value={description}
                />
              </label>
            </form>
          </div>
          <div className="other-insert">
            {file && (
              <img className="file" alt="" src={URL.createObjectURL(file)} />
            )}
          </div>
        </div>
        <hr />
        <div className="bottom">
          <div className="left">
            <input
              type="file"
              id="file"
              style={{ display: "none" }}
              onChange={handleFileChange}
            />
            <label htmlFor="file">
              <div className="item">
                <FcAddImage />
                <span>Add Image</span>
              </div>
            </label>
            <div className="item">
              <FcViewDetails />
              <span>Add Details</span>
            </div>
            <div className="item">
              <FcCollaboration />
              <span>Tag contributors to the topic</span>
            </div>
          </div>
          <div className="right">
            <button onClick={handleClick}>Share</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Share;
