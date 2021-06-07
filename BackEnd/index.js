const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys');
const cookieSession = require('cookie-session');
const passport = require('passport');
require('./models/user');
require('./models/Post');
require('./models/manualUser');
require('./models/profile');
require('./services/passport');
require('./models/bookSelect');
const app = express();

app.use(
    cookieSession({
        maxAge: 30 * 24 * 3600 * 1000,
        keys: [keys.cookieKey]
    })
);
app.use(passport.initialize());
app.use(passport.session());
app.use(express.json());
app.use(express.urlencoded());

require('./routes/manualAuthRoutes')(app);
require('./routes/authRoutes')(app);
require('./routes/postsRoutes')(app);
require('./routes/getManualUserRoute')(app);
require('./routes/profile')(app);
require('./routes/selectBookRoute')(app);
require('./routes/getAllFavBooks')(app);
require('./routes/getAllBooks')(app);

mongoose.connect(keys.mongoURI, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false });



const PORT = process.env.PORT || 5500;
app.listen(PORT);



