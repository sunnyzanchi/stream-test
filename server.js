const express = require('express');
const cors = require('cors');

const wait = ms => new Promise(resolve => setTimeout(resolve, ms));

const app = express();
app.use(cors({
  origin: '*'
}));

app.get('/test', async (req, res) => {
  const send = data => res.write(JSON.stringify(data));

  res.setHeader('Content-Type', 'application/json');
  send({
    id: 1,
    name: 'Carlos'
  });
  await wait(900);

  send({
    id: 2,
    name: 'Maria'
  });
  await wait(300);

  send({
    id: 3,
    name: 'Yung Bidness'
  });
  await wait(2000);

  send({
    id: 4,
    name: 'Sara'
  });
  await wait(400);

  send({
    id: 5,
    name: 'Milipnos'
  });
  await wait(1000);

  send({
    id: 6,
    name: 'Montana'
  });
  res.end();
});

app.listen(8000);
