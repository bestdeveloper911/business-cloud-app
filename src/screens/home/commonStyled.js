import React from "react";
import styled from "styled-components/native";
import {css} from "styled-components/native/dist/styled-components.native.esm";

export const TabContainer = styled.View`
  display: flex;
  flex-direction: row;
  ${props => props.smallDevice && css`
     flex-direction: column;
  `}
`;

export const Mb20View = styled.View`
  margin-bottom: 20px;
`;
