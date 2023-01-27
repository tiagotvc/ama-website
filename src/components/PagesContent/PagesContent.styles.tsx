import styled, { css } from "styled-components";
import logo from "../Logotype/ama_logotipo.svg";
import agendado from "./agendado.png";

type MobileProps = {
  openHamburguer?: boolean;
};

export const Container = styled("div")<MobileProps>(
  ({ openHamburguer }) => css`
    position: absolute;
    float: right;
    transition: all 1s;
    display: "flex";
    top: 8rem;

    @media (max-width: 768px) {
      top: 2rem;
    }
  `
);
