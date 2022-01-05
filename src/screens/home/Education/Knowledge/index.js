import React, { useState, useEffect } from 'react'
import {compose, withProps} from "recompose";
import {inject, observer} from "mobx-react";
import { View } from "react-native";
import { SubTitle, styles, ButtonWrapper } from "../styles";
import i18n from '../../../../i18n';
import ArticleCard from '../../../../components/Education/ArticleCard';
import Button from '../../../../components/button';
import { STORE_KEYS } from "../../../../stores";

const Knowledge = ({
  getKnowledgeData, knowledgeData,
}) => {
  const [articlesLimitCount, setArticlesLimitCount] = useState(4);

  useEffect(() => {
    getKnowledgeData();
  }, []);

  let popularArticle = [];
  (knowledgeData || []).map((item, index) => {
    popularArticle.push({
      title: item.name || '',
      img: item.education_logo || '',
      type: item.category[0],
      readNum: item.education_duration,
      link: item.permalink || '',
    })
  });

  return (
    <View style={styles.wrapper}>
      <SubTitle>{i18n.t('dashboard.knowledgeArticles')}</SubTitle>
      <View style={{marginBottom: 25}}>
        <View>
          {
            popularArticle.slice(0, articlesLimitCount).map((item, index) => (
              <ArticleCard key={index} data={item} active={index === 0}/>
            ))
          }
        </View>
        <ButtonWrapper>
          <Button
            label={i18n.t('dashboard.moreArticles')}
            borderRadius={5}
            fontSize={18}
            onPress={() => setArticlesLimitCount(popularArticle.length)}
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
       [STORE_KEYS.KNOWLEDGESTORE]: {getKnowledgeData, knowledgeData},
     }) => ({
      getKnowledgeData,
      knowledgeData,
    })
  )
)(Knowledge);

