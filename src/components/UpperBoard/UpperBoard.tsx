import { JSXElement } from "@swc/core";
import React, { ReactElement } from "react";
import { Container } from "./UpperBoard.styles";
import LockIcon from "@mui/icons-material/Lock";

interface UpperBoardProps {
  logo?: ReactElement;
}

export const UpperBoard: React.FC<UpperBoardProps> = ({ logo }) => {
  return (
    <Container>
      <div className="upperBoard_social">
        <ul>
          <li>Quem somos</li>
          <li>Metodologia</li>
          <li>Eventos</li>
          <li>Noticias</li>
        </ul>
      </div>

      <div className="upperBoard_admin">
        <ul>
          <li>
            <LockIcon sx={{ fontSize: "1.2rem", color: "gray" }} />
            Acesso adm
          </li>
        </ul>
      </div>
    </Container>
  );
};
