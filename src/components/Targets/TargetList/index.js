import React from 'react'
import { View } from "react-native";

import TargetBlock from "../TargetBlock";

const TargetList = ({ targets = [], markTaskAsComplete }) => {
  const [detailViewId, setDetailViewId] = React.useState('');

  return (
    <View>
      {
        targets.map((item, index) => (
          <TargetBlock
            target={item}
            showAll={detailViewId !== ''}
            setDetailViewId={setDetailViewId}
            key={index}
            markTaskAsComplete={markTaskAsComplete}
          />
        ))
      }
    </View>
  )
};

export default TargetList;
