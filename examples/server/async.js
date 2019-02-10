const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());

app.get('/short', (req, res) => {
    setTimeout(()=>res.end("short completed"), 1000);
});

app.get('/long', (req, res) => {
    setTimeout(()=>res.end("long completed"), 3000);
});

app.listen(8000, () => console.log('server is running...'));