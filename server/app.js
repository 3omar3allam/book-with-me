const express = require('express');
const path = require('path');
const cors = require('cors');
const mongoose = require('mongoose');
const FakeDb = require('./fake-db');
const rentalsRoutes = require('./routes/rentals');

mongoose.connect(
  process.env.DEV_MONGO_CONN_STR,
  {useNewUrlParser: true}
)
  .then(()=> {
    console.log('Connected to database!');
    const fakeDb = new FakeDb();
    fakeDb.seedDb();
  })
  .catch((error)=> {
    console.log('Connection failed!');
    console.log(error);
  });

const app = express();
app.use(cors());

app.use('', express.static(path.join(__dirname,'templates')));
app.use('/api/rentals', rentalsRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, function(){
  console.log(`Server running on port ${PORT}`);
});
