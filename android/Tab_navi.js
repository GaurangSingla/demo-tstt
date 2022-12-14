import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
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
        
        
      }}
      options={{headerShown:false}}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Home',headerShown:false,
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
        name="Support"
        component={Support}
        options={{
          tabBarLabel: 'Support',headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
export default Tab_navi;
