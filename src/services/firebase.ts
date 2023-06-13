import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCAjeV28YF5gRlGXnWerebrCLMEjLbK1uk",
  authDomain: "gerenciador-de-torneios-84ff7.firebaseapp.com",
  projectId: "gerenciador-de-torneios-84ff7",
  storageBucket: "gerenciador-de-torneios-84ff7.appspot.com",
  messagingSenderId: "424502995702",
  appId: "1:424502995702:web:f8a3018a5ca0490d06dad7",
  measurementId: "G-VK3QZF9XMF"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
