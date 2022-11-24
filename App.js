// import { View, Text } from 'react-native'
// import React from 'react'
// import { NavigationContainer } from '@react-navigation/native';
// import Stacks from './android/Stack';
// const App = () => {
//   return (
//     <View>
//       <Text>App</Text>
//     </View>
//   )
// }

// export default  ()=>{
//   return(
//   <NavigationContainer>
//     <App/>
//    <Stacks/>
   
//   </NavigationContainer>)
// };


import React from 'react';
import TabNavigation from './navigations/TabNavigation';
import SignUpScreen from './Screens/SignUpScreen';
function App() {
  return <SignUpScreen/>
}

export default App;
