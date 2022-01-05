import { StyleSheet } from 'react-native';

// Components
import CardList from './components/Dashboard/CardList.style';

const createThemedStyles = () => ({
  components: {
    CardList: CardList
  },
});

export const lightTheme = createThemedStyles();
