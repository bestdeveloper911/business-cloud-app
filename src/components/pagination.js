// Dependencies
import React from 'react'
import { Pagination } from 'react-native-snap-carousel'

// Export component
export default ({ length, active, backgroundColor }) => {
  return (
    <Pagination
      dotsLength={length}
      activeDotIndex={active}
      containerStyle={{
        paddingHorizontal: 0,
        paddingVertical: 10,
        backgroundColor: backgroundColor
      }}
      dotContainerStyle={{
        marginHorizontal: 7
      }}
      dotStyle={{
        width: 10,
        height: 10,
        borderRadius: 5,
        marginHorizontal: 0 ,
        backgroundColor: '#8d9bb0'
      }}
      inactiveDotOpacity={0.2}
      inactiveDotScale={1}
    />
  )
}