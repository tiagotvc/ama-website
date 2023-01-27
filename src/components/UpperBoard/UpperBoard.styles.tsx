import styled, { css } from "styled-components";

export const Container = styled("div")(
  () => css`
    display: flex;
    width: 100%;
    background-color: antiquewhite;
    margin: 0;
    height: 1.6rem;
    position: relative;

    .upperBoard_social {
      position: absolute;
      height: 100%;
      > ul {
        display: inline-flex;
        list-style: none;
        height: 100%;
        align-items: center;

        > li {
          padding-left: 1.4rem;
          color: black;
          cursor: pointer;
        }
      }
    }

    .upperBoard_admin {
      position: absolute;
      right: 4rem;
      height: 100%;
      > ul {
        display: inline-flex;
        list-style: none;
        height: 100%;
        align-items: center;

        > li {
          padding-left: 1.4rem;
          color: gray;
          cursor: pointer;
          display: flex;
          align-items: center;
        }
      }
    }
  `
);
