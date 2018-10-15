(() => {
    const express = require('express')
        , bodyParser = require('body-parser')
        , methodOverride = require('method-override')
        , session = require("express-session")
        , cookieParser = require("cookie-parser")
        , path = require("path")

    let app = express()
        , rootPath = __dirname

    app.use(cookieParser())
        .use(session({
            secret: '73454d401d8f5c46ad341b78412404408e859b8c228b337b1b600931c4eb3b94',
            resave: false,
            maxAge: 1200000,
            saveUninitialized: false
        }))
        .use(express.static('./public'))
        .use(bodyParser.urlencoded({ extended: true }))
        .use(bodyParser.json())
        .use(methodOverride())


    // require('./routes.js')(app);


    module.exports = app
})();