// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC5He1cyET8rJx431uavze-pTs2JqF5We8",
  authDomain: "of1-fff34.firebaseapp.com",
  databaseURL: "https://of1-fff34-default-rtdb.firebaseio.com",
  projectId: "of1-fff34",
  storageBucket: "of1-fff34.appspot.com",
  messagingSenderId: "96408092554",
  appId: "1:96408092554:web:b40a0885db8675cf2c9273",
  measurementId: "G-XMV28G9W93"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);