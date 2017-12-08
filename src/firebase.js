// import 'dotenv/config';
import * as firebase from 'firebase';

// TODO: setup CRUD firebase APIs here 
const config = {
  /* 
  TODO: fix dotenv import
  firebase initialization seems to work if the values are not from .env
  */

  apiKey: "AIzaSyDibenrxRzmhgZcRWSwkMQsOVgC3tlrUWA",
  authDomain: "mudika-app.firebaseapp.com",
  databaseURL: "https://mudika-app.firebaseio.com",
  projectId: "mudika-app",
  storageBucket: "mudika-app.appspot.com",
  messagingSenderId: "122770693861"

  // apiKey: process.env.REACT_APP_apiKey, 
  // authDomain: process.env.REACT_APP_authDomain,
  // databaseURL: process.env.REACT_APP_databaseURL,
  // projectId: process.env.REACT_APP_projectId,
  // storageBucket: process.env.REACT_APP_storageBucket,
  // messagingSenderId: process.env.REACT_APP_messagingSenderId
}
firebase.initializeApp(config);

export default firebase
