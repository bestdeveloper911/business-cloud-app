import React, { useState, useEffect } from 'react'
import { View } from "react-native";
import {compose, withProps} from "recompose";
import {inject, observer} from "mobx-react";
import i18n from '../../../../i18n';
import {SubTitle, styles, ButtonWrapper} from "../styles";
import Button from '../../../../components/button';
import GuideCard from "../../../../components/Education/GuideCard";
import {STORE_KEYS} from "../../../../stores";

const Integration = ({ guidesData, getGuidesData }) => {
  const [guidesLimitCount, setGuidesLimitCount] = useState(4);

  useEffect(() => {
    getGuidesData();
  }, []);

  let integrations = [];
  if ((guidesData || []).length > 0) {
    (guidesData || []).map((item, index) => {
      integrations.push({
        title: item.name || '',
        img: item.logo || '',
        type: item.category[0],
        readNum: '',
        link: item.permalink || '',
      })
    });
  }

  return (
    <View style={styles.wrapper}>
      <SubTitle>{i18n.t('dashboard.integrationGuides')}</SubTitle>
      <View style={{marginBottom: 25}}>
        {
          integrations.slice(0, guidesLimitCount).map((item, index) => (
            <GuideCard key={index} data={item} active={index === 0}/>
          ))
        }
        <ButtonWrapper>
          <Button
            label={i18n.t('dashboard.moreGuides')}
            borderRadius={5}
            fontSize={18}
            onPress={() => setGuidesLimitCount(integrations.length)}
          />
        </ButtonWrapper>
      </View>
    </View>
  );
}

export default compose(
  inject(STORE_KEYS.KNOWLEDGESTORE),
  observer,
  withProps(
    ({
       [STORE_KEYS.KNOWLEDGESTORE]: {guidesData, getGuidesData},
     }) => ({
      guidesData,
      getGuidesData,
    })
  )
)(Integration);
