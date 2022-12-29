
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
  billPay: async (args, header) => {
    const data = await API.post('api/consumer/user/bill-pay/pay', args, header);
    return data;
  },
  deleteCard: async (path, header) => {
    const data = await API.delete(`api/consumer/user/card/${path}`, header);
    console.log('data' + data);
    return data;
  },
}
export default PaymentService;