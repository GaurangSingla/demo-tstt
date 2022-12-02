import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
//import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Home from '../Screens/Home';
import Promotion from '../Screens/Promotion';
import Topup from '../Screens/Topup';
import Support from '../Screens/Support';
import Paybill from '../Screens/Paybill';

const Tab = createBottomTabNavigator();
function Tab_navi() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarHideOnKeyboard:true,
        tabBarActiveTintColor: '#e91e63',
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Promotion"
        component={Promotion}
        options={{
          tabBarLabel: 'Promotion',
          headerShown: false,

          tabBarBadge: 3,
        }}
      />
      <Tab.Screen
        name="Paybill"
        component={Paybill}
        options={{
          tabBarLabel: 'Paybill',
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Topup"
        component={Topup}
        options={{
          tabBarLabel: 'Toneup',
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Support"
        component={Support}
        options={{
          tabBarLabel: 'Sport',
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
}
export default Tab_navi;
