import express from 'express';

const port: number = 3000;
const app = express();

app.get('/', (req, res) => {
    res.send('Hello world');
});

app.listen(port, () => console.log('Server is up and running on http://localhost:3000'));