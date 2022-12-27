
import API from './Api';

const PaymentService = {
    getCards: async header => {
    const data = await API.get('api/consumer/user/card', header);
    return data;
  },
    saveCards: async (args, header) => {
    const data = await API.post('api/consumer/user/card', args, header);
    return data;
  },
  topUp: async (args, header) => {
    const data = await API.post('api/consumer/user/topup/pay', args, header);
    return data;
  },
}
export default PaymentService;