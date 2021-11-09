const express = require('express')
const app = express()
const cors = require('cors')
const port = 3000

const path = require('path');
const Score  = require('./src/backend/Score');

app.use(express.urlencoded());
app.use(cors());
app.use(express.json());
app.use('/public/scripts', express.static(path.join(__dirname, '/src/public/js')));
app.use('/public/media', express.static(path.join(__dirname, '/src/public/media')))
app.use('/public/img', express.static(path.join(__dirname, '/src/public/img')))
app.use('/public/style', express.static(path.join(__dirname, '/src/public/style')))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + "/src/public/html/index.html"));
})

app.get('/addHit', (req, res) => {
    res.json({ "Status": "We only want POST" });
})

app.post('/addHit', (req, res) => {
    let numberOfPlayers = req.body.numberOfPlayers;
    let score = req.body.currentScore;
    console.log(req.body);
    var updatedScore = Score(numberOfPlayers, score)
    res.json(updatedScore);
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})

