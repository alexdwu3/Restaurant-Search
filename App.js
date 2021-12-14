import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import SearchScreen from './src/screens/SearchScreen';
import BusinessDetailScreen from './src/screens/BusinessDetailScreen';

const navigator = createStackNavigator(
  {
    Search: SearchScreen,
    BusinessDetail: BusinessDetailScreen,
  },
  {
    initialRouteName: 'Search',
    defaultNavigationOptions: {
      title: 'Business Search',
    },
  }
);

export default createAppContainer(navigator);
