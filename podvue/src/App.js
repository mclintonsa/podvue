import { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./utils/Themes";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100vh;
  background: ${({ theme }) => theme.bgLight};
  overflow-y: hidden;
  overflow-x: hidden;
`;

function App() {
  //hooks
  const [darkMode, setDarkMode] = useState(true);

  return (
  <ThemeProvider theme={darkTheme}>
    <Container>PodVue</Container>
  </ThemeProvider>

  )
}

export default App; 