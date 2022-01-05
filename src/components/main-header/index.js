// Dependencies
import React, { Fragment,  } from 'react'
import styled from 'styled-components/native'

// Constants
import { MAX_HEADER_HEIGHT } from './constants'

// Components
import Top from './components/top'
import Actions from './components/actions'
import Accounts, { top as AccountsTop } from './components/accounts'
import Cards from './components/cards'

// Export top section
export const top = React.forwardRef(({ y, navigation, onScroll }, ref) => {
  return (
    <Fragment>
      <Top {...{ y, navigation, onScroll }}/>
      <AccountsTop {...{ y, navigation, ref }}/>
    </Fragment>
  )
});

// Export component
export default ({ y, navigation, onAccountChange: onChange }) => {
  return (
    <Header>
      <Cards {...{ y, navigation }}/>
      <Actions {...{ y, navigation }}/>
      <Accounts {...{ y, navigation, onChange }}/>
    </Header>
  )
}

// Styles
const Header = styled.View`
  height: ${MAX_HEADER_HEIGHT}px;
`
