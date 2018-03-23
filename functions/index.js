// const functions = require('firebase-functions');
// const app = require('firebase-admin');
// app.initializeApp(functions.config().firebase);

// export const db = app.database();
// export const namesRef = db.ref('1234');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

// exports.getUnis = functions.https.onRequest((req, res) => {
//   // let unis = [];

//   // for (var i = parseInt(req.query.startId); i < parseInt(req.query.size); i++ ){
//   //   let database = admin.database().ref(toString(i));
//   //   database.then(uni => {
//   //     unis.push(uni);
//   //   })
//   // }

//   // while (unis.length != req.query.size) {
//   //   let a ='b';
//   // }
//   // res.status(200).send(unis);
//   return admin.database().ref('/1234').then((uni) => {
//     return res.send(uni.ref);
//   })
// })

// exports.work = functions.https.onRequest((req, res) => {
//   res.send(functions.config().firebase);
// })

const functions = require('firebase-functions');
const app = require('firebase-admin');
app.initializeApp(functions.config().firebase);

const db = app.database();
const unisRef = db.ref('unis');
const testRef = db.ref('test');

exports.work = functions.https.onRequest((req, res) => {
  return testRef.once('value').then(function(snapshot) {
    res.send(snapshot.val())
  })
})