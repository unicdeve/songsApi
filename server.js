const express  = require("express");
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const expressValidator = require('express-validator');
const morgan = require('morgan');
const dotenv = require('dotenv');
dotenv.config();


// DB config
// const db = process.env.MONGO_URI;
const db = "MONGO_URI=mongodb://localhost:27017/songs"


// fixing deprecations
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
// connect to mongoDB
mongoose.connect(db, {
  useNewUrlParser: true
})
  .then(() => {
    console.log('mongoDB connected');
  })
  .catch(err => console.log(err));


// import routes
const userRoutes = require('./api/routes/user');
const artistRoutes = require('./api/routes/artist');
const songRoutes = require('./api/routes/song');



// middlewares
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(expressValidator());


// use Routes
app.use("/api/user", userRoutes);
app.use("/api/artist", artistRoutes);
app.use("/api/song", songRoutes);




const port = process.env.PORT || 4000;
app.listen(port, () => {
    console.log(`Server running at: ${port}`);
});