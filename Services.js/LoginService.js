import API from './Api';

export const ProfileService = {
  loginService: async (args, header) => {
    const data = await API.post('api/consumer/login', args, header);
    return data;
  },
 

};
