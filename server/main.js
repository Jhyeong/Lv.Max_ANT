const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const port = process.env.PORT || 3001;

app.use(bodyParser.json());

app.get("/", (req, res) => {
    res.send("test");
});

app.listen(port, () => {
    console.log("test2");
});