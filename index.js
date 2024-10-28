global.foodData = require('./db')(function call(err, data, CatData) {
  // console.log(data)
  if (err) console.log(err);
  global.foodData = data;
  global.foodCategory = CatData;
});

const express = require('express');
const cors = require('cors'); // Import cors
const app = express();
const port = process.env.PORT || 5000;

// Use cors middleware to allow requests from all origins
app.use(cors()); // Allows all origins by default

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use('/api/auth', require('./Routes/Auth'));

app.listen(port, () => {
  console.log(`Example app listening on http://localhost:${port}`);
});
