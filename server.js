const express = require('express');
const app = express();
const PORT = process.env.PORT || 8000;
const Colors = require('colors');
const path = require('path');

const mongoose = require('mongoose');
const MONGO_URI =
    process.env.MONGODB_URI || "mongodb://localhost/pooch_match";
const multer = require('multer');
const bodyParser = require('body-parser');
const session = require("cookie-session");
const passport = require("./custom/");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({
    name: "session",
    keys: ["key1", "key2"]
}));
app.use(passport.initialize());
app.use(passport.session());

mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
}).then(() => {
    console.log('Connected to Database'.red);
    console.log('------------------------------'.rainbow);
}).catch(err => console.log(err));

const userRoutes = require('./controller/userRoutes');
app.use('/user', userRoutes);

const imageRoutes = require('./controller/Image');
app.use('/addImage', imageRoutes);

const dogRoutes = require('./controller/dogRoutes');
app.use('/dog', dogRoutes);

const commentsRoutes = require('./controller/commentsRoutes');
app.use('/comments', commentsRoutes);

app.use('/uploads', express.static('./uploads'));

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    });
}

//change this so it will add
app.listen(PORT, () => {
    console.log('\n------------------------------'.rainbow);
    console.log(`listening on http://localhost:${PORT}`.blue);
});