const express = require('express')
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

app.use(cors());

const categories = require('./data/Category.json')
const news = require('./data/News.json')

app.get('/', (req, res) => {
    res.send('News API Running')
});

app.get('/news-categories', (req, res) => {
    res.send(categories)
})


app.get('/category/:id', (req, res) => {
    const id = req.params.id;
    const category_news = news.filter(n => n.category_id === id)
    res.send(category_news);
});

app.listen(port, () => {
    console.log('learning platform Server running on port', port)
})