import styled, { css } from "styled-components";
import logo from "./ama_img.jpeg";

interface SidebarProps {
  isOpen: string;
}

const transformState = {
  false: () => css`
    left: -170px;
    transition: all 1s;
    .expand_icon {
      transform: rotate(0deg);
      transition: all 1s;
    }

    .logotipo {
      transform: scale(0.5);
      transition: all 2s;
      margin-left: 170px;
    }
  `,
  true: () => css`
    left: 0;
    transition: all 1s;
    .expand_icon {
      transform: rotate(-180deg);
      transition: all 1s;
    }
    .logotipo {
      transition: all 2s;
      transform: scale(1);
      margin-left: 0;
    }
  `,
};

export const Container = styled("div")<SidebarProps>(
  ({ isOpen }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    background-color: deepskyblue;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    position: fixed;
    width: 250px;

    ${transformState[isOpen]};

    .logotipo {
      display: flex;
      position: absolute;
      width: 140px;
      height: 140px;
      top: 20px;
      border-radius: 50%;
      background-image: ${`url(${logo.src})`};
      object-fit: fill;
      background-size: cover;
      background-repeat: no-repeat;
      border: 5px solid white;
      box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    }

    .expand_icon {
      display: flex;
      position: absolute;
      top: 10px;
      align-items: center;
      justify-content: center;
      right: -15px;
      z-index: 9999;
      background: white;
      border-radius: 50%;
      border: 2px solid deepskyblue;
    }

    .profile {
      display: flex;
      flex-direction: column;
      position: absolute;
      bottom: 20px;
    }

    .menus {
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
      margin-top: 70px;
      width: 100%;

      > ul {
        margin: 0;
        padding: 0;
        list-style: none;
        align-items: center;
        justify-content: center;
        width: 85%;

        > li {
          cursor: pointer;
          display: flex;
          margin-bottom: 15px;
          border: 1px solid white;
          border-radius: 7px;
          height: 30px;
          text-align: center;
          align-items: center;
          justify-content: center;
          width: 100%;
          color: white;
          font-size: 18px;
          &:hover {
            background: white;
            color: deepskyblue;
          }
        }
      }
    }
  `
);
