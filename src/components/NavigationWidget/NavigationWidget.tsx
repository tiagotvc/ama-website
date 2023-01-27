import React from "react";
import { List } from "../List/List";
import { Container } from "./NavigationWidget.styles";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";

export const NavigationWidget: React.FC = () => {
  const links = [
    {
      action: () => null,
      name: "Metodologia",
    },
    {
      action: () => null,
      name: "Missão",
    },
    {
      name: "Quem somos",
      action: () => null,
    },
    {
      name: "Noticias",
      action: () => null,
    },
  ];
  return (
    <Container>
      <List listItens={links} />
    </Container>
  );
};
