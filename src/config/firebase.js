import firebase from "firebase/app";

import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC3R7yGi_KDpCQeO8sFoWaR8RvFu_hyd5Q",
  authDomain: "chatapp-cbda6.firebaseapp.com",
  projectId: "chatapp-cbda6",
  storageBucket: "chatapp-cbda6.appspot.com",
  messagingSenderId: "693983204774",
  appId: "1:693983204774:web:abb4005bb743496878ab67",
};

firebase.initializeApp(firebaseConfig);

export default firebase;
