import { useState, useEffect, useContext, createContext, sendEmailVerification } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut as signAuthOut,
  onAuthStateChanged,
  sendPasswordResetEmail,
  deleteUser,
  updateEmail,
} from "firebase/auth";
import { auth } from "../firebase/firebase";

const authContext = createContext();

export function ProvideAuth({ children }) {
  const authData = useProvideAuth();
  return <authContext.Provider value={authData}>{children}</authContext.Provider>;
}

export const useAuth = () => {
  return useContext(authContext);
};

function useProvideAuth() {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  function signIn(email, password) {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log("signIn userCredential >>>", userCredential);
        setUser(userCredential.user);
        setError(false);
      })
      .catch((error) => {
        console.warn("signIn error >>>", error);
        setError({ code: error.code, message: error.message });
        setUser(false);
      })
      .finally(() => setLoading(false));
  }
  function signUp(email, password) {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log("signUp userCredential >>>", userCredential);
        setUser(userCredential.user);
        setError(false);
      })
      .catch((error) => {
        console.warn("signUp error >>>", error);
        setError({ code: error.code, message: error.message });
        setUser(false);
      })
      .finally(() => setLoading(false));
  }
  function signOut() {
    signAuthOut(auth)
      .then(() => {
        console.log("signOut success >>>", true);
        // setUser(false);//?????
        // setError(false);
      })
      .catch((error) => {
        console.warn("signOut error >>>", error);
        setError({ code: error.code, message: error.message });
        // setUser(false);//????
      })
      .finally(() => setLoading(false));
  }

  function verificationByEmail() {
    sendEmailVerification(auth.currentUser)
      .then(() => console.log("varififcation was sent"))
      .catch(() => console.log("varification error"));
  }
  //   const sendPasswordResetEmail = (email) => {
  //     return firebase
  //       .auth()
  //       .sendPasswordResetEmail(email)
  //       .then(() => {
  //         return true;
  //       });
  //   };
  function resetPassword(email) {
    sendPasswordResetEmail(auth, email)
      .then(() => {
        console.log(`password was sent`);
        setError(false);
      })
      .catch((error) => {
        console.warn("resetPassword error >>>", error);
        setError({ code: error.code, message: error.message });
      });
  }

  function deleteUserAccount() {
    deleteUser(auth.currentUser)
      .then(() => {
        console.log(`account was deleted`);
        setError(false);
      })
      .catch((error) => {
        console.warn("delete user account error >>>", error);
        setError({ code: error.code, message: error.message });
      });
  }

  function updateAuthEmail(email) {
    updateEmail(auth.currentUser, email)
      .then(() => {
        console.log(`email was changed`);
        setError(false);
      })
      .catch((error) => {
        console.warn("create new email error >>>", error);
        setError({ code: error.code, message: error.message });
      });
  }
  //   const confirmPasswordReset = (code, password) => {
  //     return firebase
  //       .auth()
  //       .confirmPasswordReset(code, password)
  //       .then(() => {
  //         return true;
  //       });
  //   };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log("AuthStateChanged >>>", true);
        setUser(user);
      } else {
        console.log("AuthStateChanged >>>", false);
        setUser(false);
      }
      if (loading) {
        setLoading(false);
      }
    });
    return () => unsubscribe();
  }, []);

  return {
    user,
    error,
    loading,
    signIn,
    signUp,
    signOut,
    resetPassword,
    deleteUserAccount,
    updateAuthEmail,
    verificationByEmail,
    // sendPasswordResetEmail,
    // confirmPasswordReset,
  };
}
