import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBQytcPetrvKp8iw7wFFO3Mb96ZbNL1Tco",
  authDomain: "backendloots.firebaseapp.com",
  projectId: "backendloots",
  storageBucket: "backendloots.appspot.com",
  messagingSenderId: "174369843320",
  appId: "1:174369843320:web:056cbb2383ccf29e7b658d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)