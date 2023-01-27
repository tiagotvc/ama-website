import styled, { css } from "styled-components";

export const Container = styled("div")(
  () => css`
    display: flex;
    flex-direction: row;
    position: relative;

    > ul {
      list-style: none;
      display: inline-flex;
      padding: 0;

      > li {
        padding-right: 1rem;
        display: flex;
        align-items: center;

        .last_child {
          display: flex;
          padding: 0.3rem;
          height: 2rem;
          border-radius: 0.6rem;

          align-items: center;
          justify-content: center;
          cursor: pointer;
          color: black;
          &:hover {
            background-color: deepskyblue;
            transition: all 0.5s;
          }

          > a {
            font-family: "Bungee", cursive;
            font-size: 1.3em;
            color: black;
            transition: color 0.1 cubic-bezier(0.32, 0, 0.67, 0);
            line-height: 1em;

            &:hover {
              color: white;
            }
          }
        }
      }
    }

    @media (max-width: 768px) {
      display: flex;
      flex-direction: column;

      width: 100%;
      height: 100%;

      > ul {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        background-color: deepskyblue;

        > li {
          padding: 0;

          .last_child {
            width: 100%;
            border-radius: 0;

            > a {
              color: white;
            }

            &:hover {
              background-color: white;
              > a {
                color: black;
              }
            }
          }
        }
      }
    }
  `
);
