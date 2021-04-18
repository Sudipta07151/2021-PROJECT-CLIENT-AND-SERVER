const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys');
const cookieSession = require('cookie-session');
const passport = require('passport');
require('./models/user');
require('./models/posts');
require('./models/manualUser')
require('./services/passport');
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

require('./routes/manualAuthRoutes')(app);
require('./routes/authRoutes')(app);
require('./routes/postsRoutes')(app);


mongoose.connect(keys.mongoURI, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true });



const PORT = process.env.PORT || 5500;
app.listen(PORT);



