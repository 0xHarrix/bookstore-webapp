import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDyixfiMri1mmH7-SZJ9VVTPe2dsAhbR3c",
  authDomain: "my-app-13de1.firebaseapp.com",
  databaseURL: "https://my-app-13de1-default-rtdb.firebaseio.com",
  projectId: "my-app-13de1",
  storageBucket: "my-app-13de1.appspot.com",
  messagingSenderId: "834633713618",
  appId: "1:834633713618:web:ed49dc26622e077ab36a0b",
  measurementId: "G-24FXDTRQ4P"
};

export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
