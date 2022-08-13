import { onMounted, ref } from "vue";

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";

let app, db;

export default function () {
  const config = useRuntimeConfig();

  const firebaseConfig = {
    apiKey: config.FIRESTORE_API_KEY,
    authDomain: "scrabbleleaderboard.firebaseapp.com",
    projectId: "scrabbleleaderboard",
    storageBucket: "scrabbleleaderboard.appspot.com",
    messagingSenderId: "564758479758",
    appId: "1:564758479758:web:bb63317784ab306aa8dadf",
  };

  const firebaseApp = ref(app);

  onMounted(() => {
    if (!app || !firebaseApp.value) {
      app = initializeApp(firebaseConfig);
      db = getFirestore(app);

      firebaseApp.value = app;
    }
  });

  return firebaseApp;
}

export { app, db };
