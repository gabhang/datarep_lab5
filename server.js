const express = require('express')
const app = express()
const port = 3000
const path = require('path')
const bodyParser = require('body-parser')

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse appplication/json
app.use(bodyParser.json())

// get request from url, in this case '/' = home page/domain
app.get('/', (req, res) => {
    res.send('Welcome to Data Representation & Querying'); // send message to output
})

// get request from /hello/:name and response with name input 
app.get('/hello/:name', (req, res) => {
    console.log(req.params.name); // request name from url
    res.send('Hello ' + req.params.name)
})

// get request from /api/movie and response with mymovies json
app.get('/api/movies', (req, res) => {
    // store json
    const mymovies = [
        {
            "Title": "Avengers: Infinity War",
            "Year": "2018",
            "imdbID": "tt4154756",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg"
        },
        {
            "Title": "Captain America: Civil War",
            "Year": "2016",
            "imdbID": "tt3498820",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BMjQ0MTgyNjAxMV5BMl5BanBnXkFtZTgwNjUzMDkyODE@._V1_SX300.jpg"
        }
    ];

    res.json({ movies: mymovies });
});

// get request from /test and response with webpage index.html
app.get('/test', (req, res) => {
    res.sendFile(__dirname + '/index.html');
})

// get request from /name to accept the name variable as a URL encoded GET variable
app.get('/name', (req, res) => {
    res.send('Hello ' + req.query.fname + ' ' + req.query.lname)
})

// to accept the name variable as a body encoded POST variable
app.post('/name', (req, res) => {
    res.send('Hello ' + req.body.fname + ' ' + req.body.lname)
})

// listen from port (3000)
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
})