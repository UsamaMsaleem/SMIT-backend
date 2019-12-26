const express = require('express');
const db = require('./config/db');
const app = express();

// test db connection
db.connection.once('open', () => console.log("connected to db")).on("error", (err) => console.log("error connecting db -->", err))



app.use(express.json());

app.use(express.urlencoded({extended: true}));

app.use('/', require('./routes/index.js'));



app.listen(process.env.PORT || 8000, function() {
    console.log('listening on 3000')
})