const {default: axios} = require('axios');


axios.defaults.headers.common['client-type'] = Platform.OS;
axios.defaults.headers.common['client-version'] = DeviceInfo.getVersion();


export default axios.create({baseURL: 'https://dev-cim-api.tstt.co.tt/'});
export default axios.create({baseURL: 'https://dev-cim-api.tstt.co.tt/'});