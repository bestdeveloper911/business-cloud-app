import React from 'react';
import { View, Image} from "react-native";
import i18n from '../../../../i18n';
import {P} from "../../../../components/typography";
import Images from "../../../../constants/Images";
import Carousel from "../../../../components/Solutions/CardCarousel";
import {styles} from "./styles";
import {DescriptionCard, SubTitle} from "../styles";
import SpecialSolutionCard from "../../../../components/Solutions/SpecialSolutionCard";
import SpecialServiceCard from "../../../../components/Solutions/SpecialServiceCard";
import Device from "../../../../constants/Layout";

export default ({
  cloudSpecialProducts,
  cloudProducts,
  cloudSpecialServices,
  cloudServices,
  xeroTemplates,
}) => {
  return (
    <>
      <DescriptionCard smallDevice={Device.isSmallDevice}>
        <View style={styles.brand}>
          <Image source={Images.SolutionService02} style={styles.brandImg} resizeMode={'contain'}/>
        </View>
        <View style={styles.description}>
          <P>{i18n.t('dashboard.buildSolution')}</P>
        </View>
      </DescriptionCard>

      <SubTitle>{i18n.t('dashboard.products')}</SubTitle>
      {cloudSpecialProducts[0] && (
        <SpecialSolutionCard data={cloudSpecialProducts[0]}/>
      )}
      <Carousel data={cloudProducts} mode="products" />

      <SubTitle>{i18n.t('dashboard.services')}</SubTitle>
      {cloudSpecialServices[0] && (
        <SpecialServiceCard data={cloudSpecialServices[0]}/>
      )}
      <Carousel data={cloudServices} mode="services" />

      <SubTitle>{i18n.t('dashboard.templates')}</SubTitle>
      <Carousel data={xeroTemplates} mode="templates" />
    </>
  )
}
