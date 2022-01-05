import React from 'react';
import { View, Image} from "react-native";
import i18n from '../../../../i18n';
import {P} from "../../../../components/typography";
import Images from "../../../../constants/Images";
import {styles} from "./styles";
import {SubTitle, DescriptionCard} from "../styles";
import Device from "../../../../constants/Layout";
import TemplateCard from "../../../../components/Solutions/TemplateCard";

export default ({ data: xeroTemplates }) => {
  return (
    <>
      <DescriptionCard smallDevice={Device.isSmallDevice}>
        <View style={styles.brand}>
          <Image source={Images.SolutionLocation} style={styles.brandImg} resizeMode={'contain'}/>
        </View>
        <View style={styles.description}>
          <P>{i18n.t('dashboard.customizeXeroTemplates')}</P>
        </View>
      </DescriptionCard>

      <SubTitle>{i18n.t('dashboard.allTemplates')} {xeroTemplates?.length}</SubTitle>
      {
        xeroTemplates?.map((item, index) => (
          <View
            style={{marginBottom: 30}}
            key={index}
          >
            <TemplateCard
              data={item}
            />
          </View>

        ))
      }
    </>
  )
}
