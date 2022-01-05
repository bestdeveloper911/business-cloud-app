import React from 'react';
import { View, Image} from "react-native";
import i18n from '../../../../i18n';
import {P} from "../../../../components/typography";
import Images from "../../../../constants/Images";
import {styles} from "./styles";
import SolutionCard from "../../../../components/Solutions/SolutionCard";
import {SubTitle, DescriptionCard} from "../styles";
import Carousel from "../../../../components/Solutions/SpecialCardCarousel";
import Device from "../../../../constants/Layout";

export default ({ data : services, spData: specialOfferData }) => {
  return (
    <>
      <DescriptionCard smallDevice={Device.isSmallDevice}>
        <View style={styles.brand}>
          <Image source={Images.SolutionService05} style={styles.brandImg} resizeMode={'contain'}/>
        </View>
        <View style={styles.description}>
          <P>{i18n.t('dashboard.managingAccounting')}</P>
        </View>
      </DescriptionCard>

      <SubTitle>{i18n.t('dashboard.specialOffers')}</SubTitle>
      <Carousel data={specialOfferData} isService={true} />

      <SubTitle>{i18n.t('dashboard.allServices')}</SubTitle>
      {
        (services || []).map((item, index) => (
          <View
            style={{marginBottom: 30}}
            key={index}
          >
            <SolutionCard
              data={item}
            />
          </View>

        ))
      }
    </>
  )
}
