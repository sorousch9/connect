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
const Profile = () => {
  return (
    <div className="profile">
      <div className="images">
        <img
          src="https://images.pexels.com/photos/1271619/pexels-photo-1271619.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
          className="coverPhoto"
        />
        <img
          src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
          className="profilePic"
        />
      </div>
      <div className="profileContainer">
        <div className="Detail">
          <div className="leftside">
            <div className="social">
              <a href="http://facebook.com">
                <SlSocialFacebook fontSize="large" />
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
              <a href="http://github.com">
                <SlSocialGithub fontSize="large" />
              </a>
            </div>
            <div className="skill">
              <span>Developer</span>
              <span>IT department</span>
            </div>
          </div>

          <div className="profileDetails">
            <span>Patrick Müller</span>
            <div className="info">
              <div className="item">
                <MdOutlinePlace />
                <span>Germany</span>
              </div>
              <div className="item">
                <HiOutlineLanguage />
                <span>Deutsch</span>,<span>Englisch</span>
              </div>
            </div>
          </div>
          <div className="moreDetail">
            <SlEnvolopeLetter />
            <FiMoreVertical />
          </div>
        </div>
        <LastActions />
      </div>
    </div>
  );
};

export default Profile;
