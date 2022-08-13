import { onMounted, ref } from "vue";

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";

let app, db;

export default function () {
  const firebaseConfig = {
    apiKey: "AIzaSyCw2EZI0ZV6gftL4Py4NQJGV1SjCd2vwPE",
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
