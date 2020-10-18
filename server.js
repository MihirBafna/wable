const express = require('express');
const bodyParser = require('body-parser')
const path = require('path');
const app = express();
app.use(express.static(path.join(__dirname, 'Wable-Server')));


app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'Wable-Server', '/wable-server-app/public/index.html'));
});

app.listen(80, "0,0,0,0", () => {
    console.log("hello");
});

