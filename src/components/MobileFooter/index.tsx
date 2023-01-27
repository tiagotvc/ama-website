import React, { useState, ChangeEvent, useContext } from "react";
import { Container } from "./styles";
import { trueMock } from "utils/contants";
import MenuIcon from "@mui/icons-material/Menu";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import ActionsContext, { useStore } from "@/contexts/ActionsContext";
import HomeIcon from "@mui/icons-material/Home";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";

export const MobileFooter = () => {
  const [store, setStore] = useStore();

  return (
    <Container>
      <ul>
        <li>
          <div>
            <span className="icon">
              <HomeIcon className="icx" />
            </span>
            <span className="text">Inicio</span>
          </div>
        </li>
        <li>
          <div>
            <span className="icon">
              <ArticleOutlinedIcon className="icx" />
            </span>
            <span className="text">Documentos</span>
          </div>
        </li>
        <li>
          <div>
            <span className="icon">
              <ShoppingBagOutlinedIcon className="icx" />
            </span>

            <span className="text">Loja</span>
          </div>
        </li>
        <li>
          <div>
            <span className="icon">
              <SchoolOutlinedIcon className="icx" />
            </span>
            <span className="text">Cursos</span>
          </div>
        </li>
        <div className="indicator"></div>
      </ul>
    </Container>
  );
};

export default MobileFooter;
