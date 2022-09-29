// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBLUz1FXO5NdK9A6SFyGIcVJO8tdlS3_5Q',
  authDomain: 'studyproject-52a23.firebaseapp.com',
  databaseURL:
    'https://studyproject-52a23-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'studyproject-52a23',
  storageBucket: 'studyproject-52a23.appspot.com',
  messagingSenderId: '498549909069',
  appId: '1:498549909069:web:1a6814f90969e18d14de04',
  measurementId: 'G-BRHSNT3TG2',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export { auth };
