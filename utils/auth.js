import auth from '@react-native-firebase/auth';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {AccessToken, Settings, LoginManager} from 'react-native-fbsdk-next';
export const GoogleAuth = {
  login: async () => {
    try {
      console.log('Hello');
      var {idToken} = await GoogleSignin.signIn();
      console.log('value of idtoken==',idToken);
      if (idToken) {
        var googleCredential = auth.GoogleAuthProvider.credential(idToken);

        if (googleCredential) {
          await auth().signInWithCredential(googleCredential);
          var currentUser = auth().currentUser;
          // console.log('google creds ', JSON.stringify(currentUser));
          if (currentUser) {
            return {
              ...currentUser,
              idToken: idToken,
            };
            // return currentUser;
          } else {
            return '';
          }
        }
      } else {
        return '';
      }
    } catch (e) {
      console.log(e);
      return '';
    }
  },

  logout: async () => {
    try {
      await GoogleSignin.revokeAccess();
      await GoogleSignin.signOut();
      auth()
        .signOut()
        .then(() => console.log('Your are signed out!'));
    } catch (error) {
      console.error(error);
    }
  },
};
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
