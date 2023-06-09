
'use strict'
const express = require('express');
const port = 8080;
const HOST='0.0.0.0';

const app = express();

app.get('/', (req,res) => {
res.send('hola');
})

app.listen(port,HOST, () => {
console.log(`runing on port ${HOST}:${port}`)
})
