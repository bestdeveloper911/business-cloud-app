import React, { useEffect, useState, useMemo } from "react";
import Screen from "../../../components/screen";
import {
  Container,
  FooterSticker,
  ScrollContainer,
  TabItem,
  Tabs,
  styles, MainContent,
} from "./styles";
import TouchableOpacity from "../../../components/touchable-opacity";
import { Text } from "../../../components/auth/components";
import { Box } from "../../../components/common";
import { Heading } from "../../../components/typography";
import Financial from './Financial';
import Billing from './Billing';
import Profile from './Profile';
import i18n from '../../../i18n';
import VisaFormModal from "../../../components/Settings/VisaFormModal";

const Settings = ({ navigation }) => {
  const [activeTab, setActiveTab] = useState('financial');
  const [isOpenVisa, setIsOpenVisa] = useState(false);

  const tabName = navigation.getParam('tab');

  useEffect(() => {
    setActiveTab(tabName);
  }, [tabName]);

  const renderTabContent = useMemo(
    () => {
      switch (activeTab) {
        case 'financial': return <Financial />;
        case 'billing': return <Billing />;
        case 'profile': return <Profile />;
      }
    },
    [activeTab]
  );

  const tabItems = [
    {
      name: i18n.t('dashboard.financial'),
      viewMode: 'financial',
    },
    {
      name: i18n.t('dashboard.billing'),
      viewMode: 'billing',
    },
    {
      name: i18n.t('dashboard.profile'),
      viewMode: 'profile',
    },
  ];

  return (
    <Screen title="Settings" navigation={navigation}>
      <ScrollContainer>
        <Box paddingTop={20} paddingLeft={20} paddingBottom={0}>
          <Heading fontSize={30} lineHeight={40}>{i18n.t('dashboard.settings')}</Heading>
        </Box>
        <Tabs>
          {
            tabItems.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={styles.touch}
                onPress={() => setActiveTab(item.viewMode)}
              >
                <TabItem active={activeTab === item.viewMode}>
                  {item.name}
                </TabItem>
              </TouchableOpacity>
            ))
          }
        </Tabs>
        <Container>
          <MainContent>
            {renderTabContent}
          </MainContent>
          <FooterSticker>
            <Text fontSize={15}>2020 @ Cloudmeb</Text>
            <Text fontSize={15}>{i18n.t('dashboard.support')}</Text>
          </FooterSticker>
        </Container>
        <VisaFormModal isOpen={isOpenVisa} close={() => setIsOpenVisa(false)} />
      </ScrollContainer>
    </Screen>
  );
};

export default Settings;
