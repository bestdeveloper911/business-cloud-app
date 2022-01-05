import React, { useEffect } from 'react';
import { ScrollView } from "react-native";
import {compose, withProps} from "recompose";
import {inject, observer} from "mobx-react";
import i18n from '../../../i18n';
import Screen from '../../../components/screen';
import TouchableOpacity from '../../../components/touchable-opacity';
import All from './All';
import Products from './Products';
import Services from './Services';
import Templates from './Templates';
import Device from '../../../constants/Layout';
import { Heading, Span } from "../../../components/typography";
import FadeIn from "../../../components/animations/fade-in";
import { Container, Tabs, TabItem } from "./styles";
import { Box } from "../../../components/common";
import { TabContainer } from "../commonStyled";
import { STORE_KEYS } from "../../../stores";

const Solutions = (props) => {

  const {
    navigation,
    requestCloudProducts,
    requestCloudServices,
    requestXeroTemplates,
    countOfProducts,
    countOfServices,
    cloudProducts,
    cloudSpecialProducts,
    cloudServices,
    cloudSpecialServices,
    xeroTemplates,
    countOfTemplates,
  } = props;

  useEffect(() => {
    requestCloudProducts();
    requestCloudServices();
    requestXeroTemplates();
  }, []);

  const [content, setContent] = React.useState(
      <All
        cloudSpecialProducts={cloudSpecialProducts}
        cloudProducts={cloudProducts}
        cloudSpecialServices={cloudSpecialServices}
        cloudServices={cloudServices}
        xeroTemplates={xeroTemplates}
      />
    );
  const [tabNo, setTabNo] = React.useState(2);

  const changeContent = (tabNo) => {
    setTabNo(tabNo);
    switch (tabNo) {
      case 1:
        setContent(
          <All
            cloudSpecialProducts={cloudSpecialProducts}
            cloudProducts={cloudProducts}
            cloudSpecialServices={cloudSpecialServices}
            cloudServices={cloudServices}
            xeroTemplates={xeroTemplates}
          />
        );
        break;
      case 2:
        setContent(
          <Products data={cloudProducts} spData={cloudSpecialProducts}/>
        );
        break;
      case 3:
        setContent(
          <Services data={cloudServices} spData={cloudSpecialServices}/>
        );
        break;
      case 4:
        setContent(
          <Templates data={xeroTemplates}/>
        );
        break;
      default:
        setContent(
          <All
            cloudSpecialProducts={cloudSpecialProducts}
            cloudProducts={cloudProducts}
            cloudSpecialServices={cloudSpecialServices}
            cloudServices={cloudServices}
            xeroTemplates={xeroTemplates}
          />
        );
        break;
    }
  };

  const right = {
    icon: 'menu',
    onPress: () => navigation.navigate('Settings')
  };

  const tabItems = [
    {
      id: 1,
      name: i18n.t('dashboard.all'),
      viewMode: 'solution_all',
      count: Number(countOfProducts) + Number(countOfServices) + Number(countOfTemplates),
    },
    {
      id: 2,
      name: i18n.t('dashboard.products'),
      viewMode: 'solution_products',
      count: countOfProducts,
    },
    {
      id: 3,
      name: i18n.t('dashboard.services'),
      viewMode: 'solution_services',
      count: countOfServices,
    },
    {
      id: 4,
      name: i18n.t('dashboard.templates'),
      viewMode: 'solution_templates',
      count: countOfTemplates,
    }
  ];

  return (
    <Screen title="Solutions" {...{ navigation, right }} left={false}>
      <FadeIn style={{ flex: 1 }}>
        <ScrollView>
          <Box paddingTop={20} paddingLeft={20}>
            <Heading fontSize={30} lineHeight={40}>{i18n.t('dashboard.solutions')}</Heading>
          </Box>
          <ScrollView horizontal={true}>
            <Tabs>
              <TabContainer smallDevice={Device.isSmallDevice}>
              {
                tabItems.map((item, index) => (
                  <TouchableOpacity key={index} style={{flexDirection: 'row', alignItems: 'center', marginRight: 20}} onPress={() => changeContent(item.id)}>
                      <TabItem active={item.id === tabNo} smallDevice={Device.isSmallDevice}>
                      {item.name}
                      {
                        item.count > 0 &&
                        <Span style={{color: '#9da9bb', marginLeft: 5, fontSize: 12}}>  {item.count}</Span>
                      }
                    </TabItem>
                  </TouchableOpacity>
                ))
              }
              </TabContainer>
            </Tabs>
          </ScrollView>
          <Container>
            { content }
          </Container>
        </ScrollView>
      </FadeIn>
    </Screen>
  );
}

export default compose(
  inject(
    STORE_KEYS.SOLUTIONSSTORE
  ),
  observer,
  withProps(
    ({
       [STORE_KEYS.SOLUTIONSSTORE]: {
         requestCloudProducts,
         requestCloudServices,
         requestXeroTemplates,
         countOfProducts,
         cloudSpecialProducts,
         countOfServices,
         cloudSpecialServices,
         cloudProducts,
         cloudServices,
         xeroTemplates,
         countOfTemplates,
       },
     }) => ({
      requestCloudProducts,
      requestCloudServices,
      requestXeroTemplates,
      countOfProducts,
      cloudSpecialProducts,
      countOfServices,
      cloudSpecialServices,
      cloudProducts,
      cloudServices,
      xeroTemplates,
      countOfTemplates,
    })
  )
)(Solutions);
