import React from "react";
import { TextInput } from "components/Text/index";
import Button from "@/components/Button";
import InputText from "@/components/InputText";
import { LogoType } from "@/components/Logotype/Logotype";
import Layout from "@/components/Layout/Layout";
import { useStore } from "@/contexts/ActionsContext";

export default function Home() {
  return (
    <Layout>
      <div className="home_page">Essa é a Página Inicial</div>
    </Layout>
  );
}
