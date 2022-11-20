import { initializeApp } from "firebase/app";
import { env } from "./env";
import { getFirestore } from '@firebase/firestore';


const firebaseConfig = {
    apiKey: env.apiKey,
    authDomain: env.authDomain,
    databaseURL: env.databaseURL,
    projectId: env.projectId,
    storageBucket: env.storageBucket,
    messagingSenderId: env.messagingSenderId,
    appId: env.appId,
    measurementId: env.measurementId
  };

  const app = initializeApp(firebaseConfig);

  const db = getFirestore(app);

export { db }
  