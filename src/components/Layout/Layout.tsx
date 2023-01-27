import React, { useState } from "react";
import { Navbar } from "../Navbar/Navbar";
import { LogoType } from "../Logotype/Logotype";
import { UpperBoard } from "../UpperBoard/UpperBoard";
import { GlobalStyles } from "../../globaStyles";
import { Provider, useStore } from "@/contexts/ActionsContext";
import { Content } from "./Layout.styles";
import { PagesContent } from "../PagesContent/PagesContent";
import { MobileFooter } from "../MobileFooter";
import { Sidebar } from "../Sidebar";

export default function Layout({ children }) {
  return (
    <Provider>
      <div>
        <GlobalStyles />
        <Sidebar />
        {/*  <Navbar logo={<LogoType />} />
        <PagesContent>{children}</PagesContent>
        <MobileFooter /> */}
      </div>
    </Provider>
  );
}
