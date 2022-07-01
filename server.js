const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const cors = require('cors')
const LogRouter = require('./app/Log/log.router');
const fruitRouter = require('./app/Fruits/fruit.router')
const accountRouter = require("./app/Account/account.router")
const billRouter = require("./app/Bill/bill.router")
var session = require('express-session')
var cookieParser = require('cookie-parser')
const db = require('./app/config/db.config');
const { cookie } = require('express/lib/response');
db.connect();


//access control allow another domain
const app = express()
app.use(morgan('dev'))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())


session = require('express-session');
app.use(session({
    secret: '2C44-4D44-WppQ38S',
    resave: true,
    saveUninitialized: true,
    cookie: {
        maxAge: 60000 * 30
    }
}));
const corsOption = {
    "origin": "*",
    "methods": "GET,PUT,POST,DELETE",
    "preflightContinue": false,
    "optionsSuccessStatus": 204
}
app.use(cors(corsOption))
app.use('/images', express.static('static/images'))
const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
    console.log('server is running on port :' + PORT)
})
const auth = function (req, res, next) {
    if (req.session.role == "admin") {
        next()
    } else {
        res.status(500).json({ message: "server error" })
    }
}
app.use('/login', LogRouter);
// Logout endpoint
app.get('/logout', function (req, res) {
    req.session.destroy();
    res.send("logout success!");
});


app.use('/api/fruit', fruitRouter)

app.use("/api/account", accountRouter)

app.use("/api/bill", billRouter)