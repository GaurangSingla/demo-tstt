import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
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
        tabBarActiveTintColor: '#e91e63',
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Home',headerShown: false,
          // tabBarIcon: ({ color, size }) => (
          //  // <MaterialCommunityIcons name="home" color={color} size={size} />
          // ),
        }}

      />
      <Tab.Screen
        name="Promotion"
        component={Promotion}
        options={{
<<<<<<< Updated upstream
          tabBarLabel: 'Promotion',headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="bell" color={color} size={size} />
          ),
=======
          tabBarLabel: 'Promotions',headerShown: false,
          // tabBarIcon: ({ color, size }) => (
          //   //<MaterialCommunityIcons name="bell" color={color} size={size} />
          // ),
>>>>>>> Stashed changes
          tabBarBadge: 3,
        }}
      />
      <Tab.Screen  
        name="Paybill"
        component={Paybill}
        options={{
          tabBarLabel: 'Paybill',headerShown: false,
<<<<<<< Updated upstream
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="book-marker" color={color} size={size} />
          ),
=======
          // tabBarIcon: ({ color, size }) => (
          //  // <MaterialCommunityIcons name="account" color={color} size={size} />
          // ),
>>>>>>> Stashed changes
        }}
      />
      <Tab.Screen  
        name="Topup"
        component={Topup}
        options={{
<<<<<<< Updated upstream
          tabBarLabel: 'Toneup',headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="blender-software" color={color} size={size} />
          ),
=======
          tabBarLabel: 'Topup',headerShown: false,
          // tabBarIcon: ({ color, size }) => (
          // //  <MaterialCommunityIcons name="account" color={color} size={size} />
          // ),
>>>>>>> Stashed changes
        }}
      />
       <Tab.Screen  
        name="Sport"
        component={Support}
        options={{
<<<<<<< Updated upstream
          tabBarLabel: 'Sport',headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
=======
          tabBarLabel: 'Support',headerShown: false,
          // tabBarIcon: ({ color, size }) => (
          // //  <MaterialCommunityIcons name="account" color={color} size={size} />
          // ),
>>>>>>> Stashed changes
        }}
      />
    </Tab.Navigator>
  );
}
export default Tab_navi;