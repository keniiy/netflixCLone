import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// 1) when seeding the database you'll have to uncomment this!
// import { seedDatabase } from '../seed';


const firebase = Firebase.initializeApp({
  apiKey: "AIzaSyAw8tdo7IoVyJ30yHW95cPg7x7sl9t3vcU",
  authDomain: "netflixclone-e9c26.firebaseapp.com",
  projectId: "netflixclone-e9c26",
  storageBucket: "netflixclone-e9c26.appspot.com",
  messagingSenderId: "883917748477",
  appId: "1:883917748477:web:19f011028c48c639472694"
});
// 2) when seeding the database you'll have to uncomment this!
// seedDatabase(firebase);
// 3) once you have populated the database (only run once!), re-comment this so you don't get duplicate data

export { firebase };
