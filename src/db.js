const mongoose = require('mongoose');

const NOTES_APP_MONGODB_HOST = process.env.NOTES_APP_MONGODB_HOST;
const NOTES_APP_MONGODB_DATABASE = process.env.NOTES_APP_MONGODB_DATABASE

const MONGODB_URI = `mongodb://${NOTES_APP_MONGODB_HOST}/${NOTES_APP_MONGODB_DATABASE}`;

mongoose.connect(MONGODB_URI, {
     useNewUrlParser: true,
     useUnifiedTopology: true
})

    .then( db => console.log('DB is connected'))
    .catch(err => console.log(err));