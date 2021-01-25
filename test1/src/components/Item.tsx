import React from "react";
import styled from "styled-components";

const NavItem = styled.li`
  
`;

export function Item(props: any): React.ReactElement {
    console.log('Item:', props)
    const {info} = props;
    return <li>
        <img src={info.icon} alt="icon"/>
        <span>{info.title}</span>
    </li>
}
