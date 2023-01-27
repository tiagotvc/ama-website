import React, { useState, ChangeEvent, useContext } from "react";
import { Container } from "./styles";
import { trueMock } from "utils/contants";
import MenuIcon from "@mui/icons-material/Menu";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import ActionsContext, { useStore } from "@/contexts/ActionsContext";

export const HamburguerMenu = () => {
  const [store, setStore] = useStore();

  return (
    <Container>
      {!store.toogleMenu ? (
        <MenuIcon onClick={() => setStore({ ...store, toogleMenu: true })} />
      ) : (
        <MenuOpenIcon
          onClick={() => setStore({ ...store, toogleMenu: false })}
        />
      )}
    </Container>
  );
};

export default HamburguerMenu;
