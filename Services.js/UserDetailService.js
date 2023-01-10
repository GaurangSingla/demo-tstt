import API from './Api';

export const UserDetailService = {
  ProfileDetail: async (header) => {
    const data = await API.get('api/consumer/get-profile',header);
    return data;
  },


};
