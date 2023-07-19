import React from "react";
//import { useLocation } from "react-router-dom";

import "./Users/Users.css";
import LeftSidebar from "../components/LeftSidebar/LeftSidebar";
import SocialMediaPage from "../components/SocialMediaPage";
import RightSidebar from "../components/RightSidebar/RightSidebar";

const Users = () => {
  return (
    <div className="home-container-1">
      <LeftSidebar />
      <div className="home-container-2" style={{ marginTop: "30px" }}>
        <div style={{marginLeft:"-20px",width:"68.9%"}}><SocialMediaPage /> </div>
        <div style={{marginTop:"-30px"}}><RightSidebar /></div>
      </div>
    </div>
  );
};

export default Users;
