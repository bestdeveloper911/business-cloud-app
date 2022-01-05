// Dependencies
import React from 'react'
import { Image } from "react-native";
import { Wrapper, styles } from "./styles";

// Components
import { H3 } from "../../../typography";

// Export component
export default  ({ data }) => {
  return (
    <Wrapper>
      <Image
        style={styles.image}
        source={{uri: data.img}}
      />
      <H3 style={styles.name}>{data.name}</H3>
    </Wrapper>
  );
}
