import React from "react";
import styled from "styled-components/native";

export const ModalWrapper = styled.View`
  background-color: transparent;
  flex: 1;
  justify-content: flex-end;
  z-index: 200;
`;

export const ModalBody = styled.View`
  width: 100%;
  background-color: white;
  padding: 20px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  height: auto;
  elevation: 3;
`;

export const DividerWrapper = styled.View`
  padding-top: 10px;
  padding-bottom: 20px;
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: center;
`;

export const Divider = styled.View`
  width: 100px;
  height: 3px;
  background: #cccccc;
`;

export const ButtonWrapper = styled.View`
  width: 100%;
  margin-top: 20px;
  margin-bottom: 20px;
  display: flex;
  flex-direction: row;
`;
