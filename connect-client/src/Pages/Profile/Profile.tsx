import "./Profile.scss";
import {
  SlSocialFacebook,
  SlSocialInstagram,
  SlSocialLinkedin,
  SlSocialTwitter,
  SlSocialGithub,
  SlEnvolopeLetter,
} from "react-icons/sl";
import { HiOutlineLanguage } from "react-icons/hi2";
import { MdOutlinePlace } from "react-icons/md";
import { FiMoreVertical } from "react-icons/fi";
import LastActions from "../../components/LastActions/LastActions";
import { useContext, useState } from "react";
import { AuthContext } from "../../context/authContext";
import { useLocation } from "react-router-dom";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { axiosRequest } from "../../hooks/axios";
import UserUpdate from "../../components/userUpdate/UserUpdate";

const Profile = () => {
  const [openUpdate, setOpenUpdate] = useState(false);
  const { currentUser } = useContext(AuthContext);

  const userId = parseInt(useLocation().pathname.split("/")[2]);

  const { data } = useQuery(["user"], () =>
    axiosRequest.get("/users/find/" + userId).then((res) => {
      return res.data;
    })
  );

  const { isLoading: rIsLoading, data: relationshipData } = useQuery(
    ["relationship"],
    () =>
      axiosRequest
        .get("/relationships?followedUserId=" + userId)
        .then((res) => {
          return res.data;
        })
  );

  const queryClient = useQueryClient();

  const mutation = useMutation(
    (following: boolean) => {
      if (following) {
        return axiosRequest.delete("/relationships?userId=" + userId);
      } else {
        return axiosRequest.post("/relationships", { userId });
      }
    },
    {
      onSuccess: () => {
        // Invalidate and refetch
        queryClient.invalidateQueries(["relationship"]);
      },
    }
  );

  const handleFollow = () => {
    const following = relationshipData.includes(currentUser?.id);
    mutation.mutate(following);
  };
  return (
    <div className="profile">
      <div className="images">
        <img src={currentUser?.coverPic} alt="" className="coverPhoto" />
        <img src={currentUser?.profilePhoto} alt="" className="profilePic" />
      </div>
      <div className="profileContainer">
        <div className="Detail">
          <div className="leftside">
            <div className="social">
              <a href={`http://facebook.com/${currentUser?.facebook}`}>
                <SlSocialFacebook fontSize="large" />
              </a>
              <a href={`http://github.com/${currentUser?.github}`}>
                <SlSocialGithub fontSize="large" />
              </a>
              <a href="http://instagram.com">
                <SlSocialInstagram fontSize="large" />
              </a>
              <a href="http://linkedin.com">
                <SlSocialLinkedin fontSize="large" />
              </a>
              <a href="http://twitter.com">
                <SlSocialTwitter fontSize="large" />
              </a>
            </div>
            <div className="skill">
              <span>{currentUser?.title}</span>
              <span>{currentUser?.branch}</span>
            </div>
          </div>

          <div className="profileDetails">
            <span>{currentUser?.name}</span>
            <div className="info">
              <div className="item">
                <MdOutlinePlace />
                <span>{currentUser?.country}</span>
              </div>
              <div className="item">
                <HiOutlineLanguage />
                <span>{currentUser?.language}</span>
              </div>
            </div>
            <div className="updateProfile">
              {rIsLoading ? (
                "loading"
              ) : userId === currentUser?.id ? (
                <button onClick={() => setOpenUpdate(true)}>Update profile</button>
              ) : (
                <button onClick={handleFollow}>
                  {relationshipData.includes(currentUser?.id)
                    ? "Following"
                    : "Follow"}
                </button>
              )}
            </div>
          </div>

          <div className="moreDetail">
            <SlEnvolopeLetter />
            <FiMoreVertical />
          </div>
        </div>
        <LastActions />
      </div>

      {openUpdate && <UserUpdate setOpenUpdate={setOpenUpdate} user={data} />}
    </div>
  );
};

export default Profile;
