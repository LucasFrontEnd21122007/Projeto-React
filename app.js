import firebase from 'firebase/app';
import 'firebase/database';

const firebaseConfig = {
  apiKey: 'SUA_API_KEY',
  authDomain: 'SEU_AUTH_DOMAIN',
  databaseURL: 'SUA_URL_DO_DATABASE',
  projectId: 'SEU_PROJECT_ID',
  storageBucket: 'SEU_STORAGE_BUCKET',
  messagingSenderId: 'SEU_SENDER_ID',
  appId: 'SEU_APP_ID',
};

firebase.initializeApp(firebaseConfig);
