import { MdOutlineDarkMode } from "react-icons/md";
import { BsSun } from "react-icons/bs";
import { BsGrid } from "react-icons/bs";
import { IoIosNotificationsOutline } from "react-icons/io";
import { AiOutlineMail } from "react-icons/ai";
import { IoPersonOutline } from "react-icons/io5";
import { IoSearchOutline } from "react-icons/io5";
import LogoInWhite from "../../assets/Logo.png";
import LogoInDark from "../../assets/LogoInDark.png";
import "./Navbar.scss";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { DarkModeContext } from "../../context/themeContext";
const Navbar = () => {
  const { toggle, darkMode } = useContext(DarkModeContext);
  return (
    <div className="navbar">
      <div className="left">
        <Link to="/">
          {darkMode ? (
            <img src={LogoInDark} alt="logo" />
          ) : (
            <img src={LogoInWhite} alt="logo" />
          )}
        </Link>
      </div>
      <div className="center">
        <BsGrid />
        {darkMode ? (
          <BsSun onClick={toggle} />
        ) : (
          <MdOutlineDarkMode onClick={toggle} />
        )}

        <div className="search">
          <IoSearchOutline />
          <input type="text" placeholder="Search..." />
        </div>
      </div>
      <div className="right">
        <IoPersonOutline />
        <AiOutlineMail />
        <IoIosNotificationsOutline />
        <div className="user">
          <img
            src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
          <span>Patrick Müller</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
