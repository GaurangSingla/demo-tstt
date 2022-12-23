import API from './Api';

export const ProfileService = {
  loginService: async (args, header) => {
    const data = await API.post('api/consumer/login', args, header);
    return data;
  },
  PromoApi: async (header) => {
    const data = await API.get('/api/consumer/promotions',header);
    return data;
  },
  accountDetails: async (header) => {
    const data = await API.get(`/api/consumer/user/account/`,header);
    return data;
  },
  accountBillDetails: async (args,header) => {
    const data = await API.get(`/api/consumer/user/account/`+args,header);
    return data;
  },
  sendOtpToAddAccount: async (args, header) => {
    const data = await API.post('api/consumer/user/account', args, header);
    return data;
  },
  verifyOtpAddAccount: async (args, header) => {
    const data = await API.post(
      'api/consumer/user/account/verify-otp',
      args,
      header,
    );
    return data;
  },
  logout: async (header) => {
    const data = await API.post('api/consumer/logout',{},header);
    return data;
  },
};
