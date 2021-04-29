import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// import { seedDatabase } from '../seed';

const firebaseConfig = {
    apiKey: "AIzaSyAw8tdo7IoVyJ30yHW95cPg7x7sl9t3vcU",
    authDomain: "netflixclone-e9c26.firebaseapp.com",
    projectId: "netflixclone-e9c26",
    storageBucket: "netflixclone-e9c26.appspot.com",
    messagingSenderId: "883917748477",
    appId: "1:883917748477:web:19f011028c48c639472694"
  };
  // Initialize Firebase
const firebase = Firebase.initializeApp(firebaseConfig);

seedDatabase(firebase);

// export { firebase };