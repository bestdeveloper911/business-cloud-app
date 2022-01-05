import React, {useContext} from "react";
import {Text, View} from "react-native";
import i18n from '../../../i18n';
import {styles, Wrapper, Card} from "./styles";
import {P} from "../../../components/typography";

const CardList = () => {

  // const { theme } = useContext(ThemeContext);
  // const baseStyles = theme.components.CardList;

  const items = [];

  items.push(
    <Card>
      <Text style={styles.card_title}>
        {i18n.t('dashboard.oldestUnreconciled')}
        {/*<Tooltip/>*/}
      </Text>
      <View style={styles.card_content}>
        <P center fontSize={18}>May 12, 2020</P>
      </View>
    </Card>,
    // <Card>
    //   <div className={'title text-center'}>
    //     SALES TAX
    //   </div>
    //   <div className={'content'}>
    //     <div className="d-flex justify-content-around w-100">
    //       <div className={'content-item'}>
    //         <p>This Month</p>
    //         <h3 className={'bold'}>$4,991<span>_20</span></h3>
    //       </div>
    //       <div className={'content-item'}>
    //         <p>YTD</p>
    //         <h3 className={'bold'}>$2,341<span>_58</span></h3>
    //       </div>
    //     </div>
    //   </div>
    // </Card>
  );

  return (
    <Wrapper>
      {
        items.map((item, index) => (
          <React.Fragment key={index}>{item}</React.Fragment>
        ))
      }
    </Wrapper>
  )
};

export default CardList;