const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const cors = require('cors');
const port = process.env.PORT || 3001;
const path = require('path');

app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../build')));

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, '../build/index.html'));
});

app.listen(port, () => {
    console.log("node server listening...");
});