import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Animated, { Easing } from "react-native-reanimated";
import { loop } from "react-native-redash";
import {compose, withProps} from "recompose";
import {inject, observer} from "mobx-react";

import {Container} from "./styles";
import Images from "../../constants/Images";
import {STORE_KEYS} from "../../stores";
const { Value, interpolate, Extrapolate, useCode, set, concat } = Animated;

const LoaderAPI = ({ isLoading }) => {
  const [progress] = useState(new Value(0));

  // Start animation
  useCode(() => set(progress, loop(
    {
      delay: 0,
      duration: 1000,
      autoStart: true,
      easing: Easing.linear
    }
  )), []);

  return isLoading > 1 && (
    <Container>
      <ImageWrapper>
        <BackgroundImage source={Images.Symbols} resizeMode='contain' />
        <PartSmall
          source={Images.PartBig}
          style={{
            transform: [
              {
                rotate: concat(interpolate(progress, {
                  inputRange: [0, 1],
                  outputRange: [0, 360],
                  extrapolate: Extrapolate.CLAMP
                }), 'deg')
              }
            ]
          }}
        />
        <PartBig
          source={Images.PartBig}
          style={{
            transform: [
              {
                rotate: concat(interpolate(progress, {
                  inputRange: [0, 1],
                  outputRange: [360, 0],
                  extrapolate: Extrapolate.CLAMP
                }), 'deg')
              }
            ]
          }}
        />
      </ImageWrapper>
    </Container>
  )
};

const ImageWrapper = styled.View`
  position: relative;
  flex-direction: row;
  width: 120px;
  height: 89px;
`;

const BackgroundImage = styled.Image`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const PartBig = styled(Animated.Image)`
  width: 38px;
  height: 38px;
  position: absolute;
  top: 20px;
  left: 50px;
`;

const PartSmall = styled(Animated.Image)`
  width: 25px;
  height: 25px;
  position: absolute;
  top: 45px;
  left: 25px;
`;

export default compose(
  inject(STORE_KEYS.VIEWMODESTORE),
  observer,
  withProps(
    ({
       [STORE_KEYS.VIEWMODESTORE]: {
         isLoading,
       },
     }) => ({
      isLoading,
    })
  )
)(LoaderAPI);
