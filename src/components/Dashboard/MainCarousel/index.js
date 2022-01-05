import React, {useState} from 'react';
import Carousel from 'react-native-snap-carousel';
import styled from 'styled-components/native';
import {Dimensions, Image} from 'react-native';
import Pagination from '../../pagination';
import Animated from 'react-native-reanimated';
import Images from '../../../constants/Images';
import {SvgArticleIcon, SvgKnowledgeIcon, SvgReadMoreIcon} from '../../SvgIcon';
import { Box, FullView } from '../../common';
import Device from "../../../constants/Layout";
import NativeLinking from 'react-native/Libraries/Linking/NativeLinking';
import i18n from '../../../i18n';



const { width } = Dimensions.get("window");

// Prepare carousel item width (20px "peak" area)
const itemWidth = width;

const MainCarousel = () => {
  const [active, setActive] = useState(0);
  const data = [
    {
      icon: Images.ConnectXero,
      description: i18n.t('dashboard.connectXeroAccount'),
      link: "Get Xero today at our special price."
    },
    {
      title: i18n.t('dashboard.knowledgeArticles'),
      color: '#9159da',
      titleIcon: Images.KnowledgeArticle,
      textColor: '#5b3c83',
      description: i18n.t('dashboard.learnPractices')
    },
    {
      title: i18n.t('dashboard.integrationGuides'),
      color: '#53cceb',
      titleIcon: Images.KnowledgeArticle,
      textColor: '#457c8e',
      description: i18n.t('dashboard.customizeXero')
    }
  ];
  const renderItem = ({item, index}) => {
    return (
      <Card>
        {
          index % 3 === 0 &&
          <CardContent>
            <Box
              paddingRight={Device.isSmallDevice ? 10 : 60}
              paddingTop={Device.isSmallDevice ? 10 : 0}
              paddingLeft={Device.isSmallDevice ? 10 : 60}
              direction='column'
              justifyContent='center'
              alignItems='center'
            >
              <Image source={ Images.ConnectXero } />
              <Box direction='column' marginTop={20}>
                <Text color='#000' fontSize={16}>
                  {i18n.t('dashboard.connectXeroAccount')}
                </Text>
                <Text color='#274767' fontSize={16} underline={true}>
                  {i18n.t('dashboard.getXero')}
                </Text>
              </Box>
            </Box>
          </CardContent>
        }
        {
          index % 3 === 1 &&
          <CardContent>
            <Box alignItems='center' marginTop={40}>
              <SvgKnowledgeIcon color={item.color} />
              <Text color={item.color}>{item.title}</Text>
            </Box>
            <Box justifyContent='center' alignItems='center' marginTop={10}>
              <Box marginRight={5} paddingTop={8} paddingBottom={8}>
                <Text color={item.textColor} fontSize={16}>{item.description}</Text>
              </Box>
              <SvgReadMoreIcon color={item.textColor} />
            </Box>
          </CardContent>
        }
        {
          index % 3 === 2 &&
          <CardContent>
            <Box alignItems='center' marginTop={40}>
              <SvgArticleIcon color={item.color} />
              <Text color={item.color}>{item.title}</Text>
            </Box>
            <Box justifyContent='center' alignItems='center' marginTop={10}>
              <Box marginRight={5} paddingTop={8} paddingBottom={8}>
                <Text color={item.textColor} fontSize={16}>{item.description}</Text>
              </Box>
              <SvgReadMoreIcon color={item.textColor} />
            </Box>
          </CardContent>
        }
      </Card>
    )
  };

  return (
    <Container>
      <Carousel
        data={data}
        renderItem={renderItem}
        sliderWidth={width}
        itemWidth={itemWidth}
        autoplay={true}
        loop={true}
        onBeforeSnapToItem={setActive}
        inactiveSlideScale={1}
        inactiveSlideOpacity={1}
        firstItem={0}
      />
      <Box backgroundColor='#fbf9fe'>
        <FullView>
          <Pagination length={data.length} active={active} backgroundColor='#fbf9fe' />
        </FullView>
      </Box>
    </Container>
  )
};

export default MainCarousel;

const Container = styled(Animated.View)`
  width: 100%;
  display: flex;
  align-items: center;
  padding-top: 20px;
  height: 250px;
`;

const Card = styled.View`
  border-top-width: 1px;
  border-top-color: #e5e5e5;
  height: 200px;
  background-color: #fbf9fe;
  padding: 5px 20px;
  flex: 1;
  display: flex;
  justify-content: center;
`;

const CardContent = styled.View`
`;

const Text = styled.Text`
  ${props => props.underline ?
  'border-style: solid;' +
  'padding-bottom: 5px;' +
  'border-bottom-width: 2px;'
  : ''}
  line-height: 22px;
  border-color: ${props => props.color};
  fontSize: ${props => props.fontSize || 20}px;
  color: ${props => props.color || '#fff'}; 
`;
