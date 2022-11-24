import API from './Api';

const lookupRequest = {
  dropdown: [
    'transactionType',
    'transactionStatus',
  ],
  Firebase_Token: '',
};

export const LookupService = {
  getLookup: async args => {
    const data = await API.post('api/consumer/lookups', args);
    console.log('lookup api', '' + data);
    return data;
  },

};
