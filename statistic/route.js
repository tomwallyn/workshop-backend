var express = require("express");
var app = express.Router();
const service = require("./service");
var cors = require("cors");

app.use(cors({credentials: true}))

app.get("/present", async function (req, res) {
    service.getPresentUser().then((result) => {
        res.send(result);
    })
});

module.exports=app;