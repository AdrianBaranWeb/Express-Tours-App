const mongoose = require('mongoose');
const dotenv = require('dotenv');
const app = require('./app');

dotenv.config({ path: './config.env' });

const DB = process.env.DATABASE.replace('<PASSWORD>', process.env.PASSWORD);

const dbConnect = async () => {
  await mongoose.connect(DB);
};

dbConnect().then(() => console.log('DB connected!')).catch((err) => console.log(err));

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log('App is running on port 3000');
});
