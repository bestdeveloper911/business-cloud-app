// Dependencies
import React from 'react'
import {
  Container,
  Header,
  Content,
  EmptyBody,
  Footer,
  SolutionCardList,
  styles } from "./styles";
import i18n from '../../../i18n';
// Components
import { H3, P } from "../../typography";
import SolutionCard from '../SolutionCard';
import Button from '../../button';

// Export component
export default  ({ data, title }) => {
  const itemList = data;
  const [showAllItems, setShowAllItems] = React.useState(false);

  return (
    <Container>
      <Header>
        <H3 style={styles.title}>{title}</H3>
      </Header>
      <Content>
        {
          itemList.length === 0 ?
            <EmptyBody>
              <P>{i18n.t('dashboard.add')} {title.toLowerCase()} {i18n.t('dashboard.toAccount')}</P>
            </EmptyBody> :
            <SolutionCardList>
              {
                showAllItems ?
                  itemList.map((item, index) => (
                    <SolutionCard key={index} data={item}/>
                  ))
                  :
                  itemList.filter((item, index) => index < 2).map((item, index) => (
                    <SolutionCard key={index} data={item}/>
                  ))
              }
            </SolutionCardList>
        }
      </Content>
      {
        !showAllItems && data.length > 1 &&
        <Footer>
          <Button
            onPress={() => setShowAllItems(true)}
            label={`${i18n.t('dashboard.exploreMore')} ${title}`}
            bgColor={'#f5f7f9'}
            color={'#6e83a3'}
            fontSize={16}
          />
        </Footer>
      }
    </Container>
  );
}
