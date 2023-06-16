// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
      apiKey: "AIzaSyBc7B45c7e6bM8dTGuZ1AguamDCTs0qPqA",
      authDomain: "dragon-delights.firebaseapp.com",
      projectId: "dragon-delights",
      storageBucket: "dragon-delights.appspot.com",
      messagingSenderId: "887284656517",
      appId: "1:887284656517:web:b14fc64769c61fb4033cec"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;