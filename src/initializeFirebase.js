// Import the functions you need from the SDKs you need
import {
    initializeApp
} from "firebase/app";
import {
    getAnalytics
} from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDFaLwfy7M000L_CZs8bt1teRl2pF-ch5U",
    authDomain: "victortattoowebsite.firebaseapp.com",
    projectId: "victortattoowebsite",
    storageBucket: "victortattoowebsite.appspot.com",
    messagingSenderId: "229461931182",
    appId: "1:229461931182:web:1b6cd8636fa69c14f3693f",
    measurementId: "G-3LNR27Z63Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export {
    app
}