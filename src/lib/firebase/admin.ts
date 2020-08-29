import * as firebaseAdmin from 'firebase-admin';
import serviceAccount from './serviceAccountKey.json';

if (!firebaseAdmin.apps.length) {
  firebaseAdmin.initializeApp({
    credential: firebaseAdmin.credential.cert({
      privateKey: serviceAccount.private_key,
      clientEmail: serviceAccount.client_email,
      projectId: serviceAccount.project_id,
    }),
    databaseURL: 'https://hakodate-sweets.firebaseio.com',
  });
}

export async function verifyIdToken(idToken: string) {
  try {
    await firebaseAdmin.auth().verifyIdToken(idToken);
    return { verified: true };
  } catch (e) {
    console.log('verifyIdToken error', e);
    return { verified: false };
  }
}

export { firebaseAdmin };
