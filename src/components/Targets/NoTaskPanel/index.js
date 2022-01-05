import React from "react";
import {Image} from "react-native";
import {H3, P} from "../../typography";
import i18n from '../../../i18n';
import Images from "../../../constants/Images";

//styles
import { Wrapper, Title, styles, ButtonWrapper } from "./styles";
import Button from '../../button'

const NoTaskPanel = () => {
  return (
    <Wrapper>
      <Title>
        <Image
          source={Images.Service_Accounting}
          style={styles.img}
          alt={'Image'}
        />
        <H3 style={styles.noTaskTitle}>{i18n.t('dashboard.noTasks')}</H3>
      </Title>
      <P style={styles.desc}>{i18n.t('dashboard.addSomeServices')}</P>

      <ButtonWrapper>
        <Button borderRadius={5} bgColor='#8cc178' onPress={() => {}} label={i18n.t('dashboard.explore').toUpperCase()} />
      </ButtonWrapper>
      {/*<Link to="https://frontend.cloudmeb.com/solution">*/}
      {/*  <Button>EXPLORE</Button>*/}
      {/*</Link>*/}
    </Wrapper>
  )
};

export default NoTaskPanel;
