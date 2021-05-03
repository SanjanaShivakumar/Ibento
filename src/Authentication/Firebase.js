import firebase from "firebase/app";
import "firebase/auth";

const app = firebase.initializeApp({
  apiKey: "AIzaSyDj2Mx9JpKqNwy32E8nHMc29wnmR84ZTy4",
    authDomain: "ibento-9f242.firebaseapp.com",
    projectId: "ibento-9f242",
    storageBucket: "ibento-9f242.appspot.com",
    messagingSenderId: "67055198925",
    appId: "1:67055198925:web:dd85bbac8534e88c25bf84"
  // apiKey: "AIzaSyD8LbLq3pzDAWUi8Sqb9PQzho8-qBCp0cs",
  // authDomain: "quickstart-1604431413597.firebaseapp.com",
  // databaseURL: "https://quickstart-1604431413597.firebaseio.com",
  // projectId: "quickstart-1604431413597",
  // storageBucket: "quickstart-1604431413597.appspot.com",
  // messagingSenderId: "1065573451052",
  // appId: "1:1065573451052:web:d1a9a18388aa330fc11889",
  // measurementId: "G-8L6RT3W1MW"
});

export default app;