const express = require ('express');
const app = express()
const port = 3000;
const sql = require('sqlite3').verbose();

const db = new sql.Database('data/userData.db', (err) => {
    if (err) {
        console.error(err.message);
    }
    console.log('Connected to the database.');
});

app.set('view engine', 'ejs');

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('home');
});

app.listen(3000, () => {
    console.log('Server started on PORT 3000.')
});