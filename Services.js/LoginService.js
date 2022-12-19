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
};
