import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBEu_lhqh3MUqTSFRUCWMN21yUPXgVKzLE",
  authDomain: "audiophile-8535f.firebaseapp.com",
  projectId: "audiophile-8535f",
  storageBucket: "audiophile-8535f.appspot.com",
  messagingSenderId: "581323662397",
  appId: "1:581323662397:web:54db8595c4822183a3f654",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export const readAllCategories = async () => {
  const data = await getDocs(collection(db, `categories`));
  return data.docs.map((doc) => ({ ...doc.data() }));
};
