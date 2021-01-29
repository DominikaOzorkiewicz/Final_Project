import firebase from 'firebase';
import * as firebaseData from "./firebaseData";
import 'firebase/auth';
import 'firebase/database';

const firebaseConfig = {
    apiKey: firebaseData.firebaseKey,
    authDomain: firebaseData.firebaseDomain,
    databaseURL: firebaseData.firebaseDatabase,
    projectId: firebaseData.firebaseProjectID,
    storageBucket: firebaseData.firebaseStorageBucket,
    messagingSenderId: firebaseData.firebaseSenderID,
    appId: firebaseData.firebaseAppID
}

export default firebaseConfig;