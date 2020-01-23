const express = require('express');
const path = require('path');


const app = express();

const port = 3000;

//creating a routes 

app.get('/', (request, response) =>{
    response.sendFile(path.join(__dirname, './static/index.html'));
})

app.get('/speakers', (request, response) =>{
    response.sendFile(path.join(__dirname, './static/index.html'));
})

app.listen(port, () => {
    console.log(`Express server listening on port ${port}!`);
});