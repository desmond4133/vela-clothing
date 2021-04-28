    import firebase from 'firebase/app';
    import 'firebase/firestore';
    import 'firebase/auth';
    
    
    const firebaseConfig = {
        apiKey: "AIzaSyAUaQj8BglgtkEYNaMR4QtS8WilBHXX6fY",
        authDomain: "vela-db.firebaseapp.com",
        projectId: "vela-db",
        storageBucket: "vela-db.appspot.com",
        messagingSenderId: "276107978586",
        appId: "1:276107978586:web:40b19bbbb79de113fcf563",
      };


      firebase.initializeApp(firebaseConfig);

      export const auth = firebase.auth();
      export const firestore = firebase.firestore();

      const provider = new firebase.auth.GoogleAuthProvider();
      provider.setCustomParameters({ promt:'select_account'});
      export const signInWithGoogle = () => auth.signInWithPopup(provider);

      export default firebase;