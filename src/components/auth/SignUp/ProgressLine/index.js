import React, { Fragment } from 'react';
import styled from 'styled-components/native'
import theme from "../../../../theme";
import Circle from "./Circle";
import { BoxContainer } from "../../components";

export default ({ stepCount, currentStep }) => {
  return (
    <BoxContainer>
    <Wrapper>
      {Array(stepCount).fill(1).map((d, i) => d + i).map((step, index) => (
        <Fragment key={step}>
          {index > 0 && (
            <Line active={index < currentStep} />
          )}
          <Circle checked={index < currentStep - 1} active={index < currentStep} />
        </Fragment>
      ))}
    </Wrapper>
    </BoxContainer>
  )
};

// Styles
const Line = styled.View`
  height: 2px;
  flex: 1;
  ${props => props.active ? `
    background-color: ${theme.colors.lightGreen};
  ` : `
    background-color: ${theme.colors.gray1};
  `}
`;

const Wrapper = styled.View`
  width: 100%;
  height: 50px;
  display: flex;
  flex-direction: row;
  align-items: center;
  background: transparent;
`;
