const express = require('express');
const logMid = require('./loggerMiddleware')

const app = express();

app.use(logMid);

app.get('/', (req, res) => {
    console.log("Received!")
})

app.listen(3000, () => {
    console.log("Server is running on 3000");
});