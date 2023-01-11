import {View, Text, LogBox, useColorScheme,Appearance} from 'react-native';
import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {darkTheme, lightTheme} from './utils/theme';
import Stacks from './android/Stack';
import {EventRegister} from 'react-native-event-listeners';
import {Provider} from 'react-redux';
import {store} from './redux/store/store';
import {setItem, getItem} from './utils/StorageHandling';
import {ASYNC_KEY} from './utils/string';
import Loader from './ActivityIndicator/Activityindicator';
import {
  requestUserPermission,
  notificationListener,
} from './Services.js/notificationService';
import AsyncStorage from '@react-native-async-storage/async-storage';
LogBox.ignoreAllLogs();
const colorScheme = Appearance.getColorScheme();
export const ThemeContext = React.createContext();
const App = props => {
  const [loadervisible, setLoaderVisible] = useState(false);
  const [check,setCheck]=useState(null);
 
  getData = async () => {
   
    try {
      const value = await getItem(ASYNC_KEY.auth)
      console.log(value)
      if(value !== null) {
       
         setCheck("Tab_navi");
      }else{
        setCheck("Welcome")
      }
    } catch(e) {
      
    }finally{
      console.log("check",check)
    }

  }
  useEffect(() => {
    getData()
   }, []);

  const [lightThemeselected, setLightThemeSelected] = useState(true);
  const [isResponseReceived, setisResponseReceived] = useState(false);
  useEffect(() => {
    requestUserPermission();
    notificationListener();
  }, []);
  useEffect(() => {
    // console.log('useefect caled in app.js')
    getSavedTheme();
    let receivedEvent = EventRegister.addEventListener('changeTheme', data => {
      console.log('event listener', data);
      //  data ? setScheme('light') : setScheme('dark');
      setLightThemeSelected(data);
      setItem(ASYNC_KEY.LIGHTTHEMESELECTED,'' + data);
    });
    return () => {
      true;
    };
  }, []);
  const getSavedTheme = async () => {
    try {
      let getsavedTheme = await getItem(ASYNC_KEY.LIGHTTHEMESELECTED);
      if (getsavedTheme != null) {
        getsavedTheme == 'true' ? setLightThemeSelected(true) : setLightThemeSelected(false);
        console.log('getSavedTheme ===>success ==> ');
      }
    } catch (e) {
      console.log(e);
    }
  };
  return check ? (
    <View style={{flex: 1, backgroundColor: '#FFF'}}>
        <Loader animating={loadervisible} />
      <Provider store={store}>
        <NavigationContainer
          theme={lightThemeselected ? lightTheme : darkTheme}>
          <Stacks initialScreen={check} />
        </NavigationContainer>
      </Provider>
    </View>
  ):  <Loader animating={true} />;
};
export default App;
