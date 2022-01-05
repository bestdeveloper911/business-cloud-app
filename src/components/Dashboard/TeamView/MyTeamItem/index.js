// Dependencies
import React from 'react'
import { Wrapper, Photo, Content, styles } from "./styles";
import Device from "../../../../constants/Layout";

// Components
import { H3, P } from "../../../typography";
import { SvgCalendarIcon } from "../../../SvgIcon";

// Export component
export default  ({ data }) => {
  return (
    <Wrapper>
      {data.img ? 
        <Photo source={{uri: data.img}} /> :
        <Photo source={data.default_img} />   
      }
      <Content>
        { !!data.name && <H3 style={styles.name}>{data.name}</H3> }
        { !!data.property && <P style={styles.property}>{data.property}</P> }
      </Content>
      { !!data.name && !Device.isSmallDevice && <SvgCalendarIcon/> }
    </Wrapper>
  );
}
