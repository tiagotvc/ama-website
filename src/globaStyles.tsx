import { createGlobalStyle, css } from "styled-components";

export const GlobalStyles = createGlobalStyle`

* {
    margin: 0;
    
  }

.icon {
    font-size: 10px;
}

.App_container {
  display: flex;
 
}

.home_page {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 5rem;
  z-index: -1;
  
}
  `;
