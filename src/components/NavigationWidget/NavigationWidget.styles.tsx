import styled, { css } from "styled-components";

export const Container = styled("div")(
  () => css`
    display: flex;
    flex-direction: row;
    position: relative;

    @media (max-width: 768px) {
      position: relative;
      flex-direction: column;
      width: 100%;
      z-index: 1500;
      background-color: white;
      height: 100%;
    }
  `
);
