
const { json } = require('express/lib/response');
const accountmodel = require("./account.model")

const getAll = async (req, res, next) => {
    await accountmodel.find({})
        .then(data => {
            if (data) {
                res.status(200).json(data)
            } else {
                res.status(404).json({
                    message: "no account"
                })
            }
        })
        .catch(err => {
            res.status(500).json({
                message: 'an error occured !'
            })
        })
}
const add = async (req, res, next) => {
    var username = req.body.username;
    var password = req.body.password;
    var role = req.body.role;

    await accountmodel.findOne({
        username: username
    })
        .then(data => {
            if (data) {
                res.json({ message: "data already available" })
            } else {
                let acc = new accountmodel({
                    username: username,
                    password: password,
                    role: role
                })
                acc.save();
                res.json({ message: "add new account successfully" })
            }
        })
        .catch(err => {
            json.status(500).json({ message: "server error" })
        })
}
const getById = async (req, res, next) => {
    var id = req.params.id;
    await accountmodel.findById(id)
        .then(data => {
            if (data) {
                res.json(data);
            } else {
                res.status(404).json({
                    message: "account not found"
                })
            }
        })
        .catch(err => {
            res.status(500).json({
                message: "server error"
            })
        })
}
const Delete = async (req, res, next) => {
    var id = req.params.id;
    await accountmodel.deleteOne({ _id: id })
        .then(data => {
            res.json({ message: "delete account sucessfully" })
        })
        .catch(err => {
            res.status(500).json({ message: "server error" })
        })
}
module.exports = { getAll, getById, add, update, Delete }