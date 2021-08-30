import firebase from 'firebase'
require("@firebase/firestore")

const firebaseConfig = {
 //Add configuration here

  apiKey: "AIzaSyBxUgV-Ec65YnwGAiAAINVVjte1qN5MKno",
  authDomain: "project-71-fc6c2.firebaseapp.com",
  projectId: "project-71-fc6c2",
  storageBucket: "project-71-fc6c2.appspot.com",
  messagingSenderId: "4884655494",
  appId: "1:4884655494:web:d20bf379d1ba5c9ebdd007"

};
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore()

