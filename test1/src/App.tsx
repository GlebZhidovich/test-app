import React from 'react';
import { NavBar } from "./components/NavBar";
import styled, { ThemeProvider } from "styled-components";
import config from "./config";

const theme = {
    main: '#577F95'
};

const Root = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;
  margin: 0;
`;

function App(): React.ReactElement {
    return (
        <ThemeProvider theme={theme}>
            <Root>
                <NavBar config={config}/>
            </Root>
        </ThemeProvider>
    );
}

export default App;
