const express = require('express');
const app = express();

app.use(express.static('public'));

app.use('', (req, res, next) => {
    res.sendFile(__dirname + '/public/index.html');
})
app.use('/help', (req, res, next) => {
    res.sendFile(__dirname + '/public/help/index.html');
})

app.listen(process.env.PORT || 8080);
console.log("http://localhost:8080");
