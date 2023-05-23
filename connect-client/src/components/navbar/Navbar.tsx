import { MdOutlineDarkMode } from "react-icons/md";
import { BsSun } from "react-icons/bs";
import { BsGrid } from "react-icons/bs";
import { IoIosNotificationsOutline } from "react-icons/io";
import { AiOutlineMail } from "react-icons/ai";
import { IoPersonOutline } from "react-icons/io5";
import { IoSearchOutline } from "react-icons/io5";
import LogoInWhite from "../../assets/Logo.svg";
import LogoInDark from "../../assets/LogoInDark.png";
import "./Navbar.scss";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { DarkModeContext } from "../../context/themeContext";
import { AuthContext } from "../../context/authContext";
import { Col, Row } from "antd";
const Navbar = () => {
  const { toggle, darkMode } = useContext(DarkModeContext);
  const { currentUser } = useContext(AuthContext);
  return (
    <Row className="navbar">
      <Col className="left" md={4}>
        <Link to="/">
          {darkMode ? (
            <img src={LogoInDark} alt="logo" />
          ) : (
            <img src={LogoInWhite} alt="logo" />
          )}
        </Link>
      </Col>
      <Col className="center" md={16}>
        <BsGrid size={"1.5rem"} />
        {darkMode ? (
          <BsSun onClick={toggle} size={"1.5rem"} />
        ) : (
          <MdOutlineDarkMode onClick={toggle} size={"1.5rem"} />
        )}

        <div className="search">
          <IoSearchOutline />
          <input type="text" placeholder="Search..." />
        </div>
      </Col>
      <Col className="right" md={4}>
        <IoPersonOutline size={"1.5rem"} />
        <AiOutlineMail size={"1.5rem"} />
        <IoIosNotificationsOutline size={"1.6rem"} />
        <div className="user">
          <img src={currentUser?.profilePic} alt="" />
          <span>{currentUser?.name}</span>
        </div>
      </Col>
    </Row>
  );
};

export default Navbar;
