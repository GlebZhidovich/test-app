import React from 'react';
import styled from "styled-components";
import { Logo } from "./Logo";
import { List } from "./List";

const Nav = styled.nav`
  position: absolute;
  top: 0;
  left: 0;
  width: 224px;
  height: 100vh;
  padding: 0 8px;
  background-color: ${props => props.theme.main};
`;

export function NavBar(props: any): React.ReactElement {
    const { config } = props;
    console.log(config);
    return <Nav>
        <Logo/>
        <List data={config.main}/>
    </Nav>
}