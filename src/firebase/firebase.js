import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";


const firebaseConfig = {
    apiKey: "AIzaSyBEu_lhqh3MUqTSFRUCWMN21yUPXgVKzLE",
    authDomain: "audiophile-8535f.firebaseapp.com",
    projectId: "audiophile-8535f",
    storageBucket: "audiophile-8535f.appspot.com",
    messagingSenderId: "581323662397",
    appId: "1:581323662397:web:54db8595c4822183a3f654",
    databaseURL: "https://audiophile-8535f-default-rtdb.firebaseio.com/"

};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

