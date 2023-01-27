import React, { useState } from "react";
import { Container } from "./styles";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";
import { whiteIcon } from "utils/icons";
import { Profile } from "../Profile";
import logo from "./ama_img.jpeg";
import Image from "next/image";

export const Sidebar = () => {
  const [openSidebar, toogleSidebar] = useState<boolean>(false);

  return (
    <Container isOpen={openSidebar.toString()}>
      <div className="logotipo" />

      <div className="expand_icon">
        <DoubleArrowIcon
          sx={whiteIcon}
          onClick={() => toogleSidebar(!openSidebar)}
        />
      </div>
      <div className="profile">
        <Profile isOpen={openSidebar.toString()} />
      </div>
      {/*   <div className="menus">
        <ul>
          <li>Ama Brain</li>
          <li>Ama Commerce</li>
          <li>Ama Feed</li>
          <li>Ama Doações</li>
        </ul>
      </div> */}
    </Container>
  );
};
