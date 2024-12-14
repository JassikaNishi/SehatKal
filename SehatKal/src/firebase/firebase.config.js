
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyAGkdNd_BT4O8_8HHGmWeiB_tje0w6Sij4",
    authDomain: "sehatkal.firebaseapp.com",
    projectId: "sehatkal",
    storageBucket: "sehatkal.appspot.com",
    messagingSenderId: "579433192877",
    appId: "1:579433192877:web:54445e20b901ed767a9524"
  };




// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export default app;