import API from "./Api";

const PaymentService = {
  billPayGet: async (header) => {
    const data = await API.get(
      'api/consumer/user/bill-pay',  
      header
    );
    return data;
  },
};
export default PaymentService;