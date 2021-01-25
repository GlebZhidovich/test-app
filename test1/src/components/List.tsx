import React from "react";
import { Item } from "./Item";
import styled from "styled-components";

const NavList = styled.nav`
  margin: 0;
  list-style-type: none;
`;

export function List(props: any): React.ReactElement {
    console.log('List:', props);
    const { data } = props;
    return <NavList>
        <Item info={data[0]}/>
    </NavList>
}
