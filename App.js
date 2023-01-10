import {View, Text, LogBox, useColorScheme} from 'react-native';
import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {darkTheme, lightTheme} from './utils/theme';
import Stacks from './android/Stack';
import {EventRegister} from 'react-native-event-listeners';
import {Provider} from 'react-redux';
import {store} from './redux/store/store';
import {
  requestUserPermission,
  notificationListener,
} from './Services.js/notificationService';

LogBox.ignoreAllLogs();
const App = props => {
  const [lightThemeselected, setLightThemeSelected] = useState(true);
  useEffect(() => {
    requestUserPermission();
    notificationListener();
  }, []);
  useEffect(() => {
    // console.log('useefect caled in app.js')
    let receivedEvent = EventRegister.addEventListener('changeTheme', data => {
      console.log('event listener', data);
      //  data ? setScheme('light') : setScheme('dark');
      setLightThemeSelected(data);
    });
    return () => {
      true;
    };
  }, []);
  return (
    <View style={{flex: 1, backgroundColor: '#FFF'}}>
      <Provider store={store}>
        <NavigationContainer
          theme={lightThemeselected ? lightTheme : darkTheme}>
          <Stacks />
        </NavigationContainer>
      </Provider>
    </View>
  );
};
export default App;
