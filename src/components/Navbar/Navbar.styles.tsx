import styled, { css } from "styled-components";
import logo from "../Logotype/ama_logotipo.svg";
import agendado from "./agendado.png";

export const Container = styled("div")(
  () => css`
    display: flex;
    position: fixed;
    z-index: 1000;
    width: 94%;
    box-shadow: rgba(136, 165, 191, 0.48) 6px 2px 16px 0px,
      rgba(255, 255, 255, 0.8) -6px -2px 16px 0px;
    height: 5rem;
    border-radius: 15px 15px 15px 15px;
    margin-top: 12rem;

    .navigation_links_mobile {
      display: none;
    }

    .mobile-menu {
      display: none;
    }

    .logo-container {
      display: flex;
      position: absolute;
      height: 10rem;
      width: 10rem;
      border-radius: 50%;
      background: white;
      margin-top: -2.5rem;
      margin-left: -2rem;
      box-shadow: rgba(136, 165, 191, 0.48) 6px 2px 16px 0px,
        rgba(255, 255, 255, 0.8) -6px -2px 16px 0px;
      cursor: pointer;
    }

    .navigation_links {
      display: flex;
      justify-content: right;
      width: 50%;
    }

    @media (max-width: 1440px) {
      .logo-container {
        margin-left: -1rem;
      }
      .navigation_links {
        margin-left: 8rem;
      }
      .navigation_links_mobile {
        display: none;
      }
    }

    @media (max-width: 1024px) {
      height: 4rem;

      .logo-container {
        margin-left: 0;
        height: 9rem;
        width: 9rem;
      }
      .navigation_links {
        margin-left: 14rem;
        font-size: 0.9em;
      }
      .navigation_links_mobile {
        display: none;
      }
    }

    @media (max-width: 768px) {
      border-radius: 0;
      height: 4rem;
      margin: 0;
      width: 100%;
      position: sticky;
      background: white;

      .navigation_links {
        display: none;
      }

      .navigation_links_mobile {
        display: flex;
        flex-direction: column;

        background-color: yellow;
        z-index: 1500;
        width: 100%;
      }

      .mobile-menu {
        display: flex;
        margin-left: 1rem;
      }

      .logo-container {
        display: none;
      }
    }
  `
);

type MobileProps = {
  openHamburguer?: boolean;
};

export const MobileSideMenu = styled("div")<MobileProps>(
  ({ openHamburguer }) => css`
    display: none;

    @media (max-width: 768px) {
      display: flex;
      flex-direction: column;
      width: 100%;
      height: 93vh;
      position: relative;
      z-index: 500;
      align-items: center;
      justify-content: center;
      transition: all 1s;
      left: ${!openHamburguer ? "-800px" : 0};
    }
  `
);
