import firebase from 'firebase'

const CONFIG = {
    apiKey: "XXXXXXXXXXXXXXXXXXX",
    authDomain: "XXXXXXXXXXXXXXXXXXX",
    projectId: "XXXXXXXXXXXXXXXXXXX",
    storageBucket: "XXXXXXXXXXXXXXXXXXX",
    messagingSenderId: "XXXXXXXXXXXXXXXXXXX",
    appId: "XXXXXXXXXXXXXXXXXXX"
}

    firebase.initializeApp(CONFIG)

export default firebase;
