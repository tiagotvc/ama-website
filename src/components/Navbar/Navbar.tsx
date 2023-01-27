import ActionsContext, { useStore } from "@/contexts/ActionsContext";
import { JSXElement } from "@swc/core";
import React, { ReactElement, useContext } from "react";
import HamburguerMenu from "../HamburguerMenu";
import { NavigationWidget } from "../NavigationWidget/NavigationWidget";
import { SocialWidget } from "../SocialWidget/SocialWidget";
import { Container, MobileSideMenu } from "./Navbar.styles";

interface NavbarProps {
  logo: ReactElement;
}

export const Navbar: React.FC<NavbarProps> = ({ logo }) => {
  const [store, setStore] = useStore();

  return (
    <>
      <Container>
        <div className="logo-container">{logo}</div>
        <div className="mobile-menu">
          <HamburguerMenu />
        </div>

        <div className="navigation_links">
          <NavigationWidget />
        </div>
      </Container>

      <MobileSideMenu openHamburguer={store.toogleMenu}>
        <NavigationWidget />
      </MobileSideMenu>
    </>
  );
};
