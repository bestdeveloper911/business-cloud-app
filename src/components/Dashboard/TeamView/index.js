// Dependencies
import React from 'react'
import { Wrapper } from "./styles";

// Components
import MyTeamItem from './MyTeamItem';

export default  ({ data }) => {
  return (
    <Wrapper>
      {
        data.map((item, index) => (
          <MyTeamItem data={item} key={index}/>
        ))
      }
    </Wrapper>
  );
}
