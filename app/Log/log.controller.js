const { json } = require("body-parser");
const accountmodel = require("../Account/account.model")
//var session = require('express-session')
const getAccount = (req, res, next) => {
    var username = req.body.username;
    var password = req.body.password;
    accountmodel.findOne({
        username: username,
        password: password
    })
        .then(data => {
            if (data) {
                req.session.username = username;
                req.session.role = data.role;

                res.json({ message: "login successfully" })
            } else {
                res.json({ message: "username or password error" })
            }
        })
        .catch(err => {
            res.status(500).json({ message: "server error" })
        })
    next

}
module.exports = { getAccount }