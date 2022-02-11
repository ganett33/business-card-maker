import firebase from "firebase";

class AuthServuce {
  login(providerName) {
    const authProvider = new firebase.auth[`${providerName}authProvider`]();
    return firebase.auth().signInWithPopup(authProvider);
  }
}

export default AuthServuce;
