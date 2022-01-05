import React from 'react';
import { View, Image} from "react-native";
import i18n from '../../../../i18n';
import {P} from "../../../../components/typography";
import Images from "../../../../constants/Images";
import Carousel from "../../../../components/Solutions/SpecialCardCarousel";
import {SubTitle, DescriptionCard} from "../styles";
import {styles} from "./styles";
import Device from "../../../../constants/Layout";
import ProductCard from "../../../../components/Solutions/ProductCard";

export default ({ data : products, spData: specialOfferData }) => {
  return (
    <>
      <DescriptionCard smallDevice={Device.isSmallDevice}>
        <View style={styles.brand}>
          <Image source={Images.SolutionProdDetails} style={styles.brandImg} resizeMode={'contain'}/>
        </View>
        <View style={styles.description}>
          <P>{i18n.t('dashboard.ourPartnerships')}</P>
        </View>
      </DescriptionCard>

      <SubTitle>{i18n.t('dashboard.specialOffers')}</SubTitle>
      <Carousel data={specialOfferData}/>

      <SubTitle>{i18n.t('dashboard.allProducts')}</SubTitle>
      {
        (products || []).map((item, index) => (
          <View style={{marginBottom: 30}} key={index}>
            <ProductCard data={item} key={index}/>
          </View>
        ))
      }
    </>
  )
}
