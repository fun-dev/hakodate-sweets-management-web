import * as firebaseAdmin from 'firebase-admin';

if (!firebaseAdmin.apps.length) {
  firebaseAdmin.initializeApp({
    credential: firebaseAdmin.credential.cert({
      privateKey: process.env.SERVICE_ACCOUNT_PRIVATE_KEY.replace(/\\n/g, '\n'),
      clientEmail: process.env.SERVICE_ACCOUNT_CLIENT_EMAIL,
      projectId: process.env.SERVICE_ACCOUNT_PROJECT_ID,
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
