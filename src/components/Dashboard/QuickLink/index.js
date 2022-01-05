// Dependencies
import React from 'react'
import { Wrapper } from "./styles";
import i18n from '../../../i18n';
// Components
import QuickLinkItem from './QuickLinkItem'
import { P } from "../../typography";

// Export component
export default  ({ data }) => {
  return (
    <Wrapper>
      <P color='#75787d'>{i18n.t('dashboard.loginSolution')}</P>
      {
        data.map((item, index) => (
          <QuickLinkItem data={item} key={index}/>
        ))
      }
    </Wrapper>
  );
}
