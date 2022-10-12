const express = require("express");
const app = express();
var cookieParser = require('cookie-parser')

const admin = require("firebase-admin")
const serviceAccount = require("./credential/workshop-125db-firebase-adminsdk-c7ja7-2a87f01293.json");
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://workshop-125db-default-rtdb.europe-west1.firebasedatabase.app"
});

const port = process.env.PORT || 3002;

const statistic = require("./statistic/route");

app.use(cookieParser());

app.use("/api/statistic", statistic);

console.log("Server start on port "+port)

app.listen(port);