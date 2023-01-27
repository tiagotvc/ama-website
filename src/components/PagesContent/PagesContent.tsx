import ActionsContext, { useStore } from "@/contexts/ActionsContext";
import { JSXElement } from "@swc/core";
import React, { ReactElement, useContext } from "react";
import HamburguerMenu from "../HamburguerMenu";
import { NavigationWidget } from "../NavigationWidget/NavigationWidget";
import { SocialWidget } from "../SocialWidget/SocialWidget";
import { Container } from "./PagesContent.styles";

type PagesContentProps = {
  children: React.ReactNode;
};

export const PagesContent: React.FC<PagesContentProps> = ({ children }) => {
  const [store, setStore] = useStore();

  return (
    <>
      <Container openHamburguer={store.toogleMenu}>{children}</Container>
    </>
  );
};
