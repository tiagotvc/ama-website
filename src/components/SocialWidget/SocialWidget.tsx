import React from "react";
import { List } from "../List/List";
import { Container } from "./SocialWidget.styles";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";

export const SocialWidget: React.FC = () => {
  const socialItens = [
    {
      action: () => null,
      icon: <FacebookRoundedIcon />,
    },
    {
      icon: <TwitterIcon />,
      action: () => null,
    },
    {
      icon: <InstagramIcon />,
      action: () => null,
    },
  ];
  return (
    <Container>
      <List listItens={socialItens} />
    </Container>
  );
};
