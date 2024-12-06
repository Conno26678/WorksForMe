const express = require('express');

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.get('/', (req, res) => {
    res.render('home');
});

// Start server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});