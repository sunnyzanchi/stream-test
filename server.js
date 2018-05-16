const express = require('express');
const cors = require('cors');

const wait = ms => new Promise(resolve => setTimeout(resolve, ms));

const app = express();
app.use(cors({
  origin: '*'
}));

const data = [
  {
    id: 1,
    name: 'Carlos'
  },
  {
    id: 2,
    name: 'Maria'
  },
  {
    id: 3,
    name: 'Yung Bidness'
  },
  {
    id: 4,
    name: 'Sara'
  },
  {
    id: 5,
    name: 'Milipnos'
  },
  {
    id: 6,
    name: 'Montana'
  }
];

app.get('/test', async (req, res) => {
  const send = data => res.write(JSON.stringify(data));
  res.setHeader('Content-Type', 'application/json');

  for (const item of data) {
    send(item);
    await wait(500);
  }

  res.end();
});

app.listen(8000);
