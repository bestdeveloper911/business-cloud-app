import React from 'react'
import {Image, View} from 'react-native'
import {Container, ImageWrapper, Content, Title, styles, TypeProperty} from "./styles";
import i18n from '../../../i18n';
import { H3, Span, P } from "../../typography";
import * as Linking from 'expo-linking';

const colors = {
  'red': {
    color: '#ac8576',
    bgColor: '#f8f4f2',
  },
  'green': {
    color: '#7fa47b',
    bgColor: '#f6fff5',
  },
  'blue': {
    color: '#659ea9',
    bgColor: '#e5f5f9',
  },
  'pink': {
    color: '#996999',
    bgColor: '#fbebfb'
  }
};

const GuideCard = ({ data, active }) => {
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
          style={styles.image}
          source={{uri: data.img || ''}}
        />
      </ImageWrapper>
      <Content active={active}>
        <View style={styles.property}>
          <TypeProperty
            color={colors[data.color] ? colors[data.color].color : ''}
            bgColor={colors[data.color] ? colors[data.color].bgColor : ''}
            fontSize={12}
          >
            {data.type}
          </TypeProperty>
          <P style={styles.readNum}>{i18n.t('dashboard.minread').toUpperCase()}</P>
        </View>
        <View>
          <Title active={active}>{data.title}</Title>
        </View>
      </Content>
    </Container>
  );
};

export default GuideCard;

