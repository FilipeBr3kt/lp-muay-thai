import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
body {
    margin: 0;
    font-family: 'Inter', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: #e5e7eb;
  }
  
  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;

  }

::-webkit-scrollbar {
  width: 10px; 
}


::-webkit-scrollbar-thumb {
  border: solid 1px #f1f1f1;
  border-radius: 80px;
  background-color: rgb(79 70 229); 
}


::-webkit-scrollbar-track {
  background-color: #f1f1f1; 
}
  
`;
