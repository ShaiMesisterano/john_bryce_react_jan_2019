const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const trivia = require('./data/questions');

console.log(trivia);

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.get('/all', (req, res) => {
    res.end(JSON.stringify(trivia));
});

app.post('/', (req, res) => {
    trivia.push(req.body);
    res.end("Added successfully");
});

app.put('/:index', (req, res) => {
    trivia[req.params.index] = req.body;
    res.end("Updated successfully");
});

app.delete('/', (req, res) => {
    const index = Number(req.query.index);
    trivia.splice(index, 1);
    res.end("Removed successfully");
});

app.listen(8000, () => console.log('server is running...'));