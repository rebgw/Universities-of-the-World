const functions = require('firebase-functions');
const app = require('firebase-admin');
const cors = require('cors')({origin: true});
app.initializeApp(functions.config().firebase);

const db = app.database();
const unisRef = db.ref('unis');
const testRef = db.ref('test');

exports.unis = functions.https.onRequest((req, res) => {
  cors(req, res, () => {
    let startId = ""
    if (req.query.startId !== undefined){
      startId = req.query.startId
    }
    let size = parseInt(req.query.size)
    return unisRef.orderByKey().startAt(startId).limitToFirst(size).once('value').then(function(snapshot) {
      return res.send(snapshot.val())
    })
  })
})

exports.search = functions.https.onRequest((req, res) => {
  cors(req, res, () => {
    let term = req.query.term
    return unisRef.orderByChild('name').startAt(term).limitToFirst(50).once('value').then(function(snapshot) {
      return res.send(snapshot.val())
    })
  })
})