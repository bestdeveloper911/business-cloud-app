// Dependecies
import React, { useState } from 'react'
import { Dimensions } from 'react-native'
import Animated from 'react-native-reanimated'
import Carousel from 'react-native-snap-carousel'
import styled from 'styled-components/native'

import SpecialSolutionCard from "../SpecialSolutionCard";
import Pagination from "../../pagination";
import SpecialServiceCard from "../SpecialServiceCard";

// Get window dimensions
const { width } = Dimensions.get("window")

// Prepare carousel item width (20px "peak" area)
const itemWidth = width

// Export component
export default ({ data, isService = false }) => {
  // Handle active slide
  const [active, setActive] = useState(0)

  // Render each carousel item
  const renderItem = ({ item }) => {
    return (
      <RenderContent>
        {isService ? (
          <SpecialServiceCard data={item} />
        ) : (
          <SpecialSolutionCard data={item} />
        )}
      </RenderContent>
    );
  }

  return (
    <Container>
      <Carousel
        data={data}
        onBeforeSnapToItem={setActive}
        inactiveSlideScale={1}
        inactiveSlideOpacity={1}
        renderItem={renderItem}
        sliderWidth={width}
        itemWidth={itemWidth}
        firstItem={0}
        autoplay={true}
        loop={true}
      />
      <Pagination length={data.length} active={active}/>
    </Container>
  )
}

// Styles
const Container = styled(Animated.View)`
  width: 100%;
  display: flex;
  flex: 1;
  height: 100%;
  align-items: center;
`;

const RenderContent = styled.View`
  padding: 5px 20px;
  flex: 1;
  height: 100%;
`;
