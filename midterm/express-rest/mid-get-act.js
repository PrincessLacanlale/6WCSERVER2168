const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello World!');
});

const movies = [{
    id: 1,
    title: 'Superman'
},
{
    id:2,
    title: 'Thor'
},
{
    id:3,
    title: 'Iron Man'
}
]

//get all movies
app.get('/api/movies', (req, res) => {
    res.send(movies);
});

//get movie by id
app.get('/api/movies/:id', (req, res) => {
    const movie = movies.find(h => h.id === parseInt(req.params.id));
    if (!movie) return res.status(404).send('The movie with the given ID was not found.');
    res.send(movie);
});

app.use(express.json());

//add a movie
app.post('/api/movies', (req, res) => {
    const movie = {
        id: movies.length + 1,
        title: req.body.title
    }
    movies.push(movie);
    res.send(movies);
});

app.listen(3000, () => console.log('Listening on port 4000'));


