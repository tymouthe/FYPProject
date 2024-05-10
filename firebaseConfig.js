import firebase from 'firebase/compat/app'
import 'firebase/compat/auth';
import 'firebase/compat/storage';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAoZzMBaKTQua4xCOgjSvoKcbE11d26zzY",
  authDomain: "braided-gravity-379012.firebaseapp.com",
  projectId: "braided-gravity-379012",
  storageBucket: "braided-gravity-379012.appspot.com",
  messagingSenderId: "816384788918",
  appId: "1:816384788918:web:88f9af8a149bb839e9d917",
  measurementId: "G-XX3KVZVZE4"
};

if (!firebase.apps.length){
    firebase.initializeApp(firebaseConfig)
}
export {firebase};