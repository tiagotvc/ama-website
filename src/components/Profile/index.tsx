import React, { useState } from "react";
import { Container } from "./styles";
import bg from "./teste.png";
import ama from "./ama_img.jpeg";
import LogoutIcon from "@mui/icons-material/Logout";
import { logoutIcon } from "utils/icons";

export const Profile = ({ isOpen }) => {
  const [option, setOption] = useState<boolean>(false);
  const picture = option ? ama.src : bg.src;
  return (
    <Container isOpen={isOpen}>
      <div className="divisor" />
      <div className="container_content">
        <div
          className="profile_image"
          style={{
            backgroundImage: `url(${bg.src})`,
            objectFit: "fill",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        />

        <div className="user_info">
          <div className="title">
            <span>Tiago Carvalho</span>
          </div>
          <div className="subtitle">
            <span>Administrador</span>
          </div>
        </div>
        <div className="logout">
          <LogoutIcon sx={logoutIcon} />
        </div>
      </div>
    </Container>
  );
};
