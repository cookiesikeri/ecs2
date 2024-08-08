const express = require('express');
const app = express();
const port = 3001;

app.get('/app2', (req, res) => {
  res.send('Hello World 22222222222!');
});


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

