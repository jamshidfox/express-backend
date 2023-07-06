import express from 'express';
import serverless from 'serverless-http';

const app = express();

app.get('/', (req, res) => {
  res.send('Welcome');
});

app.get('/about', (req, res) => {
  res.json({
    title: 'About me',
    name: 'MukhamadRizo',
    hobby: {
      1: 'Football',
      2: 'Basketball',
    },
  });
});

export const handler = serverless(app);
