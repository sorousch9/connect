import React, { useState } from "react";
import "./update.scss";
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

const Update: React.FC<UpdateProps> = ({ setOpenUpdate, user }) => {
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
          <input type="text" value={texts.email} name="email" />
          <label>Password</label>
          <input type="text" value={texts.password} name="password" />
          <label>Name</label>
          <input type="text" value={texts.name} name="name" />
          <label>Country / City</label>
          <input type="text" name="city" value={texts.city} />
          <label>Website</label>
          <input type="text" name="website" value={texts.website} />
          <button>Update</button>
        </form>
        <button className="close" onClick={() => setOpenUpdate(false)}>
          close
        </button>
      </div>
    </div>
  );
};

export default Update;
