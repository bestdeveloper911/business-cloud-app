// Dependencies
import React from 'react'
import styled from 'styled-components/native'
import i18n from '../../i18n';
// Components
import { Heading } from '../typography'
import Button from '../button'
import TouchableOpacity from '../touchable-opacity'

// Export component
export default ({ onCancel }) => {
  return (
    <Container>
      <Item onPress={onCancel}>
        <ItemImage source={require('./assets/lock-icon.png')}/>
        <ItemName>{i18n.t('auth.forgotPassword')}</ItemName>
      </Item>
      <Item onPress={onCancel}>
        <ItemImage source={require('./assets/user-icon.png')}/>
        <ItemName>{i18n.t('auth.loginAnother')}</ItemName>
      </Item>
      <Item onPress={onCancel}>
        <ItemImage source={require('./assets/help-icon.png')}/>
        <ItemName>{i18n.t('auth.help')}</ItemName>
      </Item>
      <FooterButton footer onPress={onCancel} label={i18n.t('dashboard.cancel')} />
    </Container>
  )
}

// Styles
const Container = styled.View`
  flex: 1;
`

const Item = styled(TouchableOpacity)`
  flex-direction: row;
  align-items: center;
  height: 60px;
`

const ItemImage = styled.Image`
  width: 18px;
  height: 18px;
`

const ItemName = styled(Heading)`
  padding: 0 ${props => props.theme.spacing * .5}px;
  font-size: 16px;
  line-height: 24px;
`

const FooterButton = styled(Button)`
  margin-top: ${props => props.theme.spacing * .75}px;
`
