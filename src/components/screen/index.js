import React, {useEffect, useState} from 'react'
import { SafeAreaView } from 'react-native'
import styled from 'styled-components/native'
import Navigation from './navigation'
import Loader from "../Loader";
import * as SplashScreen from 'expo-splash-screen';

const Screen = ({ children, right, left, title, ...props }) => {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    SplashScreen.hideAsync();

    setTimeout(() => {
      setReady(true);
    }, 0);
  }, []);

  if (!ready) return <Loader />;

  return (
    <Container>
      <Navigation right={right} left={left} {...props}/>
      <SafeAreaViewContainer>
        <Content {...props}>{children}</Content>
      </SafeAreaViewContainer>
    </Container>
  )
}

// Styles
const SafeAreaViewContainer = styled(SafeAreaView)`
  flex: 1;
  margin-top: 50px;
  background-color: white;
`;

const Container = styled.View`
  height: 100%;
  background-color: white;
  display: flex;
`;

const Content = styled.View`
  flex: 1;
  ${props => props.center && `
    justify-content: center;
    align-items: center;
  `}
`;

export default Screen;
