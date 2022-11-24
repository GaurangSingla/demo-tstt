import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Home from '../Screens/Home';
import Promotion from '../Screens/Promotion';
import Topup from '../Screens/Topup';
import Sport from '../Screens/Sport';
import Paybill from '../Screens/Paybill';

const Tab = createBottomTabNavigator();
function Tab_navi() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: '#e91e63',
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Home',headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}

      />
      <Tab.Screen
        name="Promotion"
        component={Promotion}
        options={{
          tabBarLabel: 'Promotion',headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="bell" color={color} size={size} />
          ),
          tabBarBadge: 3,
        }}
      />
      <Tab.Screen  
        name="Paybill"
        component={Paybill}
        options={{
          tabBarLabel: 'Paybill',headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="book-marker" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen  
        name="Topup"
        component={Topup}
        options={{
          tabBarLabel: 'Toneup',headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="blender-software" color={color} size={size} />
          ),
        }}
      />
       <Tab.Screen  
        name="Sport"
        component={Sport}
        options={{
          tabBarLabel: 'Sport',headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
export default Tab_navi;