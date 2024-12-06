const express = require ('express');
const app = express()
const port = 3000;

app.set('view engine', 'ejs');

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('home');
});

app.listen(3000, () => {
    console.log('Server started on PORT 3000.')
});