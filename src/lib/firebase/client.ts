import * as firebaseClient from 'firebase/app';
import 'firebase/auth';

if (!firebaseClient.apps.length) {
  firebaseClient.initializeApp({
    apiKey: 'AIzaSyDQsIfFYwPyjDidZkhV5mks1CqqZaLJ9RE',
    authDomain: 'hakodate-sweets.firebaseapp.com',
    databaseURL: 'https://hakodate-sweets.firebaseio.com',
    projectId: 'hakodate-sweets',
    storageBucket: 'hakodate-sweets.appspot.com',
    messagingSenderId: '690879037191',
    appId: '1:690879037191:web:273f3e7782437d45b54fa2',
  });

  // firebaseClient.auth().setPersistence(firebaseClient.auth.Auth.Persistence.LOCAL);
  globalThis.firebase = firebaseClient;
}

export async function loginWithEmailAndPassword(email: string, password: string) {
  try {
    const credentials = await firebaseClient.auth().signInWithEmailAndPassword(email, password);
    const token = await credentials.user.getIdToken();
    return token;
  } catch (e) {
    throw new Error(e);
  }
}

export async function logout() {
  try {
    await firebaseClient.auth().signOut();
    return true;
  } catch (e) {
    console.log('logout error', e);
    return false;
  }
}

export { firebaseClient };
