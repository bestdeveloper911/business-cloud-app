import React from 'react';
import { Block, Footer, Header, MethodWrapper, Value } from "./style";
import MethodMenu from "../MethodMenu";
import { Text } from "../../auth/components";
import theme from "../../../theme";

const PaymentMethod = ({
  title, options, value, date,
}) => {
  return (
    <MethodWrapper>
      <Header>
        <Text color={theme.colors.black}>{title}</Text>
        <MethodMenu options={options} value='primary' onChange={() => {}} />
      </Header>
      <Footer>
        <Value>
          <Block />
          <Text fontSize={16} color={theme.colors.black}>{value}</Text>
        </Value>
        <Text fontSize={16} color={theme.colors.black}>{date}</Text>
      </Footer>
    </MethodWrapper>
  );
};

export default PaymentMethod;
