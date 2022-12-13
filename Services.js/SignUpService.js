import API from './Api';

export const SignService = {
  signUpDetails: async args => {
    const data = await API.post(
      'api/consumer/registration/basic-details',
      args,
    );
    return data;
  },
}