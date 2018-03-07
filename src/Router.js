import { StackNavigator } from 'react-navigation';
import { HomeScreen,UsersScreen } from './screens';
const Root = StackNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    Users: {
      screen: UsersScreen,
    },
    
    // TODO: handle app navigation here.
  },
  {
    
  },
);

export default Root;
