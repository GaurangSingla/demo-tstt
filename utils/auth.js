import auth from '@react-native-firebase/auth';
import {AccessToken, Settings, LoginManager} from 'react-native-fbsdk-next';

export const FacebookAuth = {
  login: async () => {
    try {
      Settings.initializeSDK();
      const result = await LoginManager.logInWithPermissions([
        'public_profile',
        'email',
      ]);

      // If the user cancels the login process, the result will have a
      // isCancelled boolean set to true. We can use that to break out of this function.
      if (result.isCancelled) {
        throw 'User cancelled the login process';
      }

      // Get the Access Token
      const data = await AccessToken.getCurrentAccessToken();
      console.log('Data is ', JSON.stringify(data));

      // If we don't get the access token, then something has went wrong.
      if (!data) {
        throw 'Something went wrong obtaining access token';
      }

      // Use the Access Token to create a facebook credential.
      const facebookCredential = auth.FacebookAuthProvider.credential(
        data.accessToken,
      );

      console.log('facebook Credential', facebookCredential);
      return facebookCredential;
    } catch (error) {
      alert(error);
    }
  },
  logout: async () => {
    try {
      // await GoogleSignin.revokeAccess();
      LoginManager.logOut();
      auth()
        .signOut()
        .then(() => alert('Your are signed out!'));
    } catch (error) {
      console.error(error);
    }
  },
};
