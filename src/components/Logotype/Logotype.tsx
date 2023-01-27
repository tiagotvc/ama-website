import React from "react";
import Image from "next/image";
import { Container } from "./Logotype.styles";
import TextInput from "../Text";

export const LogoType: React.FC = () => (
  <Container>
    <Image
      className="image"
      src="/assets/ama_logotipo.svg"
      alt="Logotipo da Ama NH"
      width={150}
      height={150}
      quality={100}
      objectFit="fill"
      style={{ borderRadius: "50%" }}
    />
  </Container>
);
