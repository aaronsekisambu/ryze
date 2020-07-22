import firebase from 'firebase';
import 'firebase/firestore';


var firebaseConfig = {
	apiKey: process.env.REACT_APP_API_apiKey,
	authDomain: process.env.REACT_APP_API_authDomain,
	databaseURL: process.env.REACT_APP_API_databaseURL,
	projectId: process.env.REACT_APP_API_projectId,
	storageBucket: process.env.REACT_APP_API_storageBucket,
	messagingSenderId: process.env.REACT_APP_API_messagingSenderId,
	appId: process.env.REACT_APP_API_appId,
	measurementId: process.env.REACT_APP_API_measurementId,
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();
