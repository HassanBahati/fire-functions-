const functions = require("firebase-functions");

//http function
exports.helloworld = functions.https.onRequest((req, res) => {
  res.send("Hello from firebase function");
});

exports.api = functions.https.onRequest((req, res) => {
  switch (req.method) {
    case "GET":
      res.send("it was a get request ");
      break;
    case "POST":
    const body = req.body;
      res.send(body);
      break;
    case "DELETE":
      res.send("it was a delete request ");
      break;
    default:
      res.send("it was a default request ");
  }
});
