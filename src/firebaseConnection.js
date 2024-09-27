var admin = require("firebase-admin");

var serviceAccount = require("clever-td-firebase-adminsdk-rdmhu-ce5bfb1de5.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://clever-td-default-rtdb.europe-west1.firebasedatabase.app"
});
