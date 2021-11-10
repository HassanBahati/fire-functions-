const functions = require("firebase-functions");
const axios = require("axios");

//http function
exports.helloworld = functions.https.onRequest((req, res) => {
  res.send("Hello from firebase function");
});

exports.api = functions.https.onRequest(async (req, res) => {
  switch (req.method) {
    case "GET":
      const response = await axios.get("https://jsonplaceholder.com/users/1");
      res.send(response.data);
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


//events function
exports.userAdded = functions.auth.user().onCreate(user => {
    console.log(`${user.email} is created...`)
    return Promise.resolve()
})

//on delete eventevents 
exports.userDeleted = functions.auth().onDeleted()(user => {
    console.log(`${user.email} is deleted...`)
    return Promise.resolve()
})

