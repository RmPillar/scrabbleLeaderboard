import { app, db } from "~~/composables/useFirebase";
import {
  collection,
  getDocs,
  doc,
  getDoc,
  setDoc,
  updateDoc,
} from "firebase/firestore/lite";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

import { dayMonthYearFromTimestamp } from ".";

const checkAppExists = () => {
  if (!app) {
    console.error("Firebase app is not initialized");
    return Promise.reject();
  } else return Promise.resolve();
};

export const getMatches = () => {
  return checkAppExists().then(async () => {
    const matchesCol = collection(db, "matches");
    const matchSnapshot = await getDocs(matchesCol);
    const matchList = matchSnapshot.docs.map((doc) => doc.data());
    return matchList;
  });
};

export const getMatch = (name: string) => {
  return checkAppExists().then(async () => {
    const docRef = doc(db, "matches", name);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      return docSnap.data();
    } else {
      console.error("No such document!");
    }
  });
};

export const createMatch = (match, players, timer) => {
  return checkAppExists().then(() => {
    const winnerIndex = match.winner === "player1" ? 0 : 1;
    const loserIndex = match.winner === "player1" ? 1 : 0;

    const wins = players[winnerIndex].wins + 1;
    const losses = players[loserIndex].losses + 1;

    return Promise.all([
      setDoc(doc(db, "matches", `${dayMonthYearFromTimestamp()}--${timer}`), {
        ...match,
        duration: timer,
      }),
      updateDoc(doc(db, "players", match.winner), { wins }),
      updateDoc(doc(db, "players", match.loser), { losses }),
    ]);
  });
};

export const getPlayers = () => {
  return checkAppExists().then(async () => {
    const playersCol = collection(db, "players");
    const playerSnapshot = await getDocs(playersCol);
    const playerList = playerSnapshot.docs.map((doc) => doc.data());
    return playerList;
  });
};

export const getPlayer = (name: string) => {
  return checkAppExists().then(async () => {
    const docRef = doc(db, "players", name);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      return docSnap.data();
    } else {
      console.error("No such document!");
    }
  });
};

export const signIn = (email: string, password: string) => {
  const auth = getAuth();

  return signInWithEmailAndPassword(auth, email, password)
    .then(async (userCredential) => {
      // Signed in
      const user = userCredential.user;
      // const userToken = await user.getIdToken();

      // localStorage.setItem("userToken", JSON.stringify({userToken}));

      return { user };
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;

      return { error: { errorCode, errorMessage } };
    });
};

export const signOut = () => {
  const auth = getAuth();

  return auth.signOut();
};

export const checkLoggedIn = async () => {
  const auth = await getAuth();
  return !!auth?.currentUser?.uid;
};

export const setupAuthListener = (callback) => {
  const auth = getAuth();
  auth.onAuthStateChanged(callback);
};
