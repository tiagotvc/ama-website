import styled, { css } from "styled-components";

interface SidebarProps {
  isOpen: string;
}

const changeComponent = {
  false: () => css`
    .divisor {
      width: 5px;
      right: 0px;
      transition: all 1s;
    }
    .profile_image {
      margin-left: 175px;
      transition: all 1s;
    }
    .user_info {
      opacity: 0;
      transition: all 0.2s;
    }
    .logout {
      opacity: 0;
      transition: all 0.2s;
    }
  `,
  true: () => css`
    .divisor {
      width: 85%;
      right: unset;
      transition: all 1s;
    }
    .profile_image {
      margin-left: 8px;
      transition: all 1s;
    }
    .user_info {
      opacity: 1;
      transition: all 3s;
    }
    .logout {
      opacity: 1;
      transition: all 3s;
    }
  `,
};

export const Container = styled("div")<SidebarProps>(
  ({ isOpen }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    ${changeComponent[isOpen]};

    .divisor {
      display: flex;
      position: absolute;
      width: 85%;
      opacity: 0.5;
      border-top: 1px solid white;
      margin-bottom: 100px;
    }

    .container_content {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: left;
      width: 250px;
      height: 75px;
      position: relative;

      .profile_image {
        display: flex;
        position: absolute;
        align-items: center;
        justify-content: left;
        width: 60px;
        height: 60px;
        border-radius: 50%;
        border: 1px solid white;
        left: 8px;
        cursor: pointer;
      }

      .user_info {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: left;
        margin-left: 85px;

        .title {
          display: flex;
          position: relative;

          color: white;
          > span {
            font-size: 18px;
          }
        }
        .subtitle {
          margin-top: 3px;
          color: white;
          opacity: 0.8;
          > span {
            font-size: 14px;
          }
        }
      }

      .logout {
        display: flex;
        margin-left: 15px;
      }
    }
  `
);
