import styled, { css } from "styled-components";

export const Container = styled("div")(
  () => css`
    position: fixed;
    width: 100%;
    height: 4rem;
    display: none;
    flex-direction: column;
    justify-content: center;
    bottom: 0;
    z-index: 2000;
    background-color: white;

    ul {
      display: flex;
      width: 350px;

      .indicator {
        position: absolute;
        width: 70px;
        height: 70px;
        background: deepskyblue;
        top: -50px;
        border-radius: 50%;
        border: 6px solid #f7e5eb;
        transition: 0.5s;
        margin-left: -5px;
        opacity: 0;
      }

      .indicator::before {
        content: "";
        position: absolute;
        top: 62%;
        width: 20px;
        height: 20px;
        background: red;
        left: -18px;
        border-top-right-radius: 20px;
        box-shadow: 0px -10px 0 0 #f7e5eb;
        background: transparent;
      }
      .indicator::after {
        content: "";
        position: absolute;
        top: 62%;
        width: 20px;
        height: 20px;
        background: red;
        right: -18px;
        border-top-left-radius: 20px;
        box-shadow: 0px -10px 0 0 #f7e5eb;
        background: transparent;
      }

      li {
        position: relative;
        list-style: none;
        width: 70px;
        height: 70px;
        z-index: 1;
        align-items: center;
        justify-content: center;

        :nth-child(1):hover ~ .indicator {
          opacity: 1;
          transform: translateX(calc(70px * 0));
        }
        :nth-child(2):hover ~ .indicator {
          opacity: 1;
          transform: translateX(calc(70px * 1));
        }
        :nth-child(3):hover ~ .indicator {
          opacity: 1;
          transform: translateX(calc(70px * 2));
        }
        :nth-child(4):hover ~ .indicator {
          opacity: 1;
          transform: translateX(calc(70px * 3));
        }

        > div {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          height: 5.5rem;
          width: 100%;
          border-radius: 5px;
          position: relative;
          text-align: center;
          font-weight: 500;

          > span {
            .icx {
              font-size: 35px;
            }
          }

          .icon {
            position: relative;
            display: block;
            line-height: 75px;
            font-size: 1.5em;
            text-align: center;
            transition: 0.5s;
            align-items: center;
            justify-content: center;
          }

          .text {
            position: absolute;
            font-weight: 400;
            font-size: 0.95em;
            letter-spacing: 0.05em;
            transition: 0.5s;
            opacity: 0;
            transform: translateY(20px);
            align-items: center;
            justify-content: center;
            text-align: center;
          }
        }

        :hover {
          > div .icon {
            transform: translateY(-40px);
          }
          > div .icx {
            color: white;
          }
          > div .text {
            opacity: 1;
            transform: translateY(6px);
          }
        }
      }
    }

    @media (max-width: 768px) {
      display: flex;
      align-items: center;
      justify-content: center;
    }
  `
);
