import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
const config={
    apiKey: "AIzaSyD_mspnr8NiYRCr_04nM10k4PtSXK60xH4",
    authDomain: "fir-react-4b32b.firebaseapp.com",
    projectId: "fir-react-4b32b",
    storageBucket: "fir-react-4b32b.appspot.com",
    messagingSenderId: "32497592038",
    appId: "1:32497592038:web:a5d707b366fde7701ebd27"
}
firebase.initializeApp(config);
export default firebase