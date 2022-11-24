const {default: axios} = require('axios');
import {Platform} from 'react-native';
import DeviceInfo from 'react-native-device-info';

axios.defaults.headers.common['client-type'] = Platform.OS;
axios.defaults.headers.common['client-version'] = DeviceInfo.getVersion();


export default axios.create({baseURL: 'https://dev-cim-api.tstt.co.tt/'});