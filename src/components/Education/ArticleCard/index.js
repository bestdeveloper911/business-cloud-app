import React from 'react'
import {Image, View} from 'react-native'
import * as Linking from 'expo-linking';

import {Container, ImageWrapper, Content, Title, styles, TypeProperty} from "./styles";
import Device from "../../../constants/Layout";
import { P } from "../../typography";

const colors = {
  'ACCOUNTING': {
    color: '#ac8576',
    bgColor: '#f8f4f2',
  },
  'APPROVAL': {
    color: '#ac8576',
    bgColor: '#f8f4f2',
  },
  'BOOKKEEPING': {
    color: '#7fa47b',
    bgColor: '#f6fff5',
  },
  'LEGAL': {
    color: '#659ea9',
    bgColor: '#e5f5f9',
  },
  'STARTUP': {
    color: '#996999',
    bgColor: '#fbebfb'
  }
};

const ArticleCard = ({ data, active }) => {
  return (
    <Container
      active={active}
      onPress={() => {
        const isMobile = Platform.OS === 'ios' || Platform.OS === 'android';
        if (isMobile) {
          Linking.openURL(data.link);
        } else {
          window.open(data.link, "_blank");
        }
      }}
    >
      <ImageWrapper active={active}>
        <Image
          source={{uri: data.img || ''}}
          style={styles.image}
        />
      </ImageWrapper>
      <Content active={active}>
        <View>
          <Title active={active}>{data.title}</Title>
        </View>
        <View style={Device.isSmallDevice ? styles.flex_column : styles.flex_row} >
          <View>
            <TypeProperty
              color={colors[data.type.toUpperCase()] ? colors[data.type.toUpperCase()].color : ''}
              bgColor={colors[data.type.toUpperCase()] ? colors[data.type.toUpperCase()].bgColor : ''}
              fontSize={12}
            >
              {data.type}
            </TypeProperty>
          </View>
          <View style={styles.min_wrapper}>
            <P style={styles.readNum}>{data.readNum}</P>
          </View>
        </View>
      </Content>
    </Container>
  );
};

export default ArticleCard;
