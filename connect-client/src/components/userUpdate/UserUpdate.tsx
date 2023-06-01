import React, { useState } from "react";
import "./UserUpdate.scss";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AiOutlineCloudUpload } from "react-icons/ai";
import { axiosRequest } from "../../hooks/axios";
interface User {
  email: string;
  password: string;
  name: string;
  city: string;
  website: string;
  coverPic: string;
  profilePhoto: string;
}

interface UpdateProps {
  setOpenUpdate: React.Dispatch<React.SetStateAction<boolean>>;
  user: User;
}

const UserUpdate: React.FC<UpdateProps> = ({ setOpenUpdate, user }) => {
  const [cover, setCover] = useState<File | null>(null);
  const [profile, setProfile] = useState<File | null>(null);
  const [texts, setTexts] = useState<User>({
    email: user.email,
    password: user.password,
    name: user.name,
    city: user.city,
    website: user.website,
    coverPic: user.coverPic,
    profilePhoto: user.profilePhoto,
  });

  const upload = async (file: File) => {
    try {
      const formData = new FormData();
      formData.append("file", file);
      const res = await axiosRequest.post("/upload", formData);
      return res.data;
    } catch (err) {
      console.log(err);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTexts((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const queryClient = useQueryClient();

  const mutation = useMutation(
    (user: User) => {
      return axiosRequest.put("/users", user);
    },
    {
      onSuccess: () => {
        // Invalidate and refetch
        queryClient.invalidateQueries(["user"]);
      },
    }
  );

  const handleClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    let coverUrl;
    let profileUrl;
    coverUrl = cover ? await upload(cover) : user.coverPic;
    profileUrl = profile ? await upload(profile) : user.profilePhoto;

    mutation.mutate({ ...texts, coverPic: coverUrl, profilePhoto: profileUrl });
    setOpenUpdate(false);
    setCover(null);
    setProfile(null);
  };

  return (
    <div className="update">
      <div className="wrapper">
        <h1>Update Your Profile</h1>
        <form>
          <div className="files">
            <label htmlFor="cover">
              <span>Cover Picture</span>
              <div className="imgContainer">
                <img
                  src={
                    cover
                      ? URL.createObjectURL(cover)
                      : "/upload/" + user.coverPic
                  }
                  alt=""
                />
                <AiOutlineCloudUpload className="icon" />
              </div>
            </label>
            <input
              type="file"
              id="cover"
              style={{ display: "none" }}
              onChange={(e) => setCover(e.target.files?.[0] || null)}
            />
            <label htmlFor="profile">
              <span>Profile Picture</span>
              <div className="imgContainer">
                <img
                  src={
                    profile
                      ? URL.createObjectURL(profile)
                      : "/upload/" + user.profilePhoto
                  }
                  alt=""
                />
                <AiOutlineCloudUpload className="icon" />
              </div>
            </label>
            <input
              type="file"
              id="profile"
              style={{ display: "none" }}
              onChange={(e) => setProfile(e.target.files?.[0] || null)}
            />
          </div>
          <label>Email</label>
          <input
            type="text"
            value={texts.email}
            name="email"
            onChange={handleChange}
          />
          <label>Password</label>
          <input
            type="text"
            value={texts.password}
            name="password"
            onChange={handleChange}
          />
          <label>Name</label>
          <input
            type="text"
            value={texts.name}
            name="name"
            onChange={handleChange}
          />
          <label>Country / City</label>
          <input
            type="text"
            name="city"
            value={texts.city}
            onChange={handleChange}
          />
          <label>Website</label>
          <input
            type="text"
            name="website"
            value={texts.website}
            onChange={handleChange}
          />
          <button onClick={handleClick}>Update</button>
        </form>
        <button className="close" onClick={() => setOpenUpdate(false)}>
          close
        </button>
      </div>
    </div>
  );
};

export default UserUpdate;
