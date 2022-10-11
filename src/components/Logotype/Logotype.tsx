import React from "react";
import Image from "next/image";
import { Container } from "./Logotype.styles";
import TextInput from "../Text";

export const LogoType: React.FC = () => (
  <Container>
    <Image
      src="/assets/ama_logotipo.svg"
      alt="Logotipo da Ama NH"
      width={150}
      height={150}
    />
    <div>
      <div className="red_paint">
        <Image
          className="image_laco"
          src="/assets/red.png"
          alt="Logotipo da Ama NH"
          width={80}
          height={80}
        />
      </div>
      <div className="blue_paint">
        <Image
          className="image_laco"
          src="/assets/blue.png"
          alt="Logotipo da Ama NH"
          width={80}
          height={100}
        />
      </div>
      <div className="yellow_paint">
        <Image
          className="image_laco"
          src="/assets/yellow.png"
          alt="Logotipo da Ama NH"
          width={100}
          height={100}
        />
      </div>
      <div className="container_content">
        <TextInput uppercase variant="body1" >
          Associação dos pais e
        </TextInput>
        <TextInput uppercase variant="body3" fontColor="white" textShadow="2px 2px 4px #000000">
          Amigos dos
        </TextInput>
        <TextInput uppercase variant="body2" textdecoration="underline" >
          Autistas de NH
        </TextInput>
      </div>
    </div>
  </Container>
);
