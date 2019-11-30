const app = require('express')();
const { connect } = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

// routes

const hintsRouter = require('./routes/hints');
const usersRouter = require('./routes/users');

require('dotenv/config');

connect(
    process.env.DB_CONNECTION,
    { useCreateIndex: true, useNewUrlParser: true, useUnifiedTopology: true },
    err => {
        console.log(err || 'connected to mongodb/hints');
    }
);

app.use(cors());
app.use(bodyParser.json());
app.use('/api/hints', hintsRouter);
app.use('/api/users', usersRouter);

app.listen(3000, () => console.log('node server started on port 3000'));
