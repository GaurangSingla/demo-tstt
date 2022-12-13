import API from './Services.js/Api';

export const ProfileService = {
  signUpDetails: async args => {
    const data = await API.post(
      'api/consumer/registration/basic-details',
      args,
    );
    return data;
  },
  registerMobile: async (args, header) => {
    const data = await API.post(
      'api/consumer/registration/verify-otp',
      args,
      header,
    );
    return data;
  },
  TermsConditionService: async (args, header) => {
    const data = await API.post(
      'api/consumer/registration/accept-tnc',
      args,
      header,
    );
    return data;
  },
  googleLogin: async args => {
    const data = await API.post('api/consumer/google-login', args);
    return data;
  },
  facebookLogin: async args => {
    const data = await API.post('api/consumer/facebook-login', args);
    return data;
  },
  loginService: async (args, header) => {
    const data = await API.post('api/consumer/login', args, header);
    return data;
  },
  forgotPasswordSendOTP: async args => {
    const data = await API.post(
      'api/consumer/registration/forgot-password/send-otp',
      args,
    );
    return data;
  },
  resendOTP: async header => {
    console.log('header', header);
    const data = await API.post(
      'api/consumer/registration/resend-otp',
      {}, //tempory empty object
      header,
    );
    return data;
  },
  forgotPasswordVerifyOTP: async (args, header) => {
    const data = await API.post(
      'api/consumer/registration/forgot-password/verify-otp',
      args,
      header,
    );
    return data;
  },
  changePassword: async (args, header) => {
    const data = await API.post(
      'api/consumer/registration/forgot-password/change-password',
      args,
      header,
    );
    return data;
  },
  userChangePassword: async (args, header) => {
    const data = await API.post(
      'api/consumer/user/change-password',
      args,
      header,
    );
    return data;
  },
  logOut: async header => {
    const data = await API.post('api/consumer/logout', {}, header);
    return data;
  },
  sendEmailOtp: async (header,args) => {
    const data = await API.post('api/consumer/user/send-email-otp', args, header);
    return data;
  },
  verifyEmail: async (header, args) => {
    const data = await API.post(
      'api/consumer/user/verify-email-otp',
      args,
      header,
    );
    return data;
  },
  sendPhoneOtp: async (header,args) => {
    const data = await API.post('api/consumer/user/send-phone-otp', args, header);
    return data;
  },
  verifyPhoneOtp: async (header, args) => {
    const data = await API.post(
      'api/consumer/user/verify-phone-otp',
      args,
      header,
    );
    return data;
  },
  deleteAccount: async (path, header) => {
    const data = await API.delete(`api/consumer/user/account/${path}`, header);
    return data;
  },
  deleteCard: async (path, header) => {
    const data = await API.delete(`api/consumer/user/card/${path}`, header);
    console.log('data' + data);
    return data;
  },
  saveStoreLocatorUrl: async () => {
    const data = await API.get('api/consumer/tstt-store');
    return data;
  },
  supportEmail: async (header,args)=>{
    const data = await API.post('api/consumer/support-email',args,header);
    return data;
  }
};
