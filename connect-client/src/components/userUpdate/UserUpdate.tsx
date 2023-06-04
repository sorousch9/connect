import React, { useState } from "react";
import "./UserUpdate.scss";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AiOutlineCloudUpload } from "react-icons/ai";
import { axiosRequest } from "../../hooks/axios";
import { Form, Input, Button, Upload, message } from "antd";
import { UploadOutlined } from "@ant-design/icons";

const { Item } = Form;

interface User {
  email: string;
  password: string;
  name: string;
  country: string;
  language: string;
  website: string;
  facebook: string;
  github: string;
  branch: string;
  title: string;
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
  const [form] = Form.useForm();

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

  const handleSubmit = async (values: User) => {
    let coverUrl;
    let profileUrl;
    coverUrl = cover ? await upload(cover) : user.coverPic;
    profileUrl = profile ? await upload(profile) : user.profilePhoto;

    mutation.mutate({
      ...values,
      coverPic: coverUrl,
      profilePhoto: profileUrl,
    });
    setOpenUpdate(false);
    setCover(null);
    setProfile(null);
  };

  const handleCoverChange = (info: any) => {
    if (info.file.status === "done") {
      message.success(`${info.file.name} file uploaded successfully`);
      setCover(info.file.originFileObj);
    } else if (info.file.status === "error") {
      message.error(`${info.file.name} file upload failed.`);
    }
  };

  const handleProfileChange = (info: any) => {
    if (info.file.status === "done") {
      message.success(`${info.file.name} file uploaded successfully`);
      setProfile(info.file.originFileObj);
    } else if (info.file.status === "error") {
      message.error(`${info.file.name} file upload failed.`);
    }
  };

  return (
    <div className="update">
      <div className="wrapper">
        <h1>Update Your Profile</h1>
        <Form
          form={form}
          onFinish={handleSubmit}
          initialValues={{
            email: user.email,
            password: user.password,
            name: user.name,
            country: user.country,
            website: user.website,
            facebook: user.facebook,
            github: user.github,
            branch: user.branch,
            title: user.title,
            language: user.language,
            coverPic: user.coverPic,
            profilePhoto: user.profilePhoto,
          }}
        >
          <div className="files">
            <Item label="Cover Picture">
              <Upload
                onChange={handleCoverChange}
                maxCount={1}
                listType="picture-card"
                beforeUpload={() => false}
                className="imgContainer"
              >
                {cover ? (
                  <img
                    src={URL.createObjectURL(cover)}
                    alt=""
                    style={{ width: "100%" }}
                  />
                ) : (
                  <>
                    <UploadOutlined />
                    <div style={{ marginTop: 8 }}>Upload</div>
                  </>
                )}
              </Upload>
            </Item>
            <Item label="Profile Picture">
              <Upload
                onChange={handleProfileChange}
                maxCount={1}
                listType="picture-card"
                beforeUpload={() => false}
                className="imgContainer"
              >
                {profile ? (
                  <img
                    src={URL.createObjectURL(profile)}
                    alt=""
                    style={{ width: "100%" }}
                  />
                ) : (
                  <>
                    <UploadOutlined />
                    <div style={{ marginTop: 8 }}>Upload</div>
                  </>
                )}
              </Upload>
            </Item>
          </div>
          <div className="inputs">
            <Item label="Email" name="email">
              <Input />
            </Item>
            <Item label="Password" name="password">
              <Input.Password />
            </Item>
            <Item label="Name" name="name">
              <Input />
            </Item>
            <Item label="Country" name="country">
              <Input />
            </Item>
            <Item label="Website" name="website">
              <Input />
            </Item>
            <Item label="Language" name="language">
              <Input />
            </Item>
            <Item label="Facebook" name="facebook">
              <Input />
            </Item>
            <Item label="Github" name="github">
              <Input />
            </Item>
            <Item label="Rolle" name="branch">
              <Input />
            </Item>
            <Item label="Title" name="title">
              <Input />
            </Item>
          </div>
        </Form>
        <Button type="primary" htmlType="submit">
          Update
        </Button>
        <Button className="close" onClick={() => setOpenUpdate(false)}>
          Close
        </Button>
      </div>
    </div>
  );
};

export default UserUpdate;
