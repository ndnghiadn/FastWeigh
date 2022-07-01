const { data } = require("jquery")
const billmodel = require("../Bill/bill.model")


const findById = async (req, res, next) => {

    try {
        var id = req.params.id
        var rs = await billmodel.find({ _id: id }).populate({
            'path': 'LisFruits',
            'populate': {
                'path': 'idfruit'
            }
        })
        if (rs) {
            res.json(rs);
        } else {
            res.status(404).json({
                message: "bill not found"
            })
        }
    }
    catch (err) {
        res.status(500).json({
            message: "server error"
        })
    }
}
const findByCode = async (req, res, next) => {

    try {
        var code = req.params.code
        var rs = await billmodel.findOne({ code }).populate('LisFruits.idfruit').then(rs => {
            if (rs) {
                res.json(rs);
            } else {
                res.status(404).json({
                    message: "bill not found"
                })
            }
        })


    }
    catch (err) {
        res.status(500).json({
            message: "server error"
        })
    }
}
const getTotalById = async (req, res, next) => {
    var id = req.params.id
    await billmodel.findById(id).then(data => {
        if (data) {
            res.json({ totalprice: data.totalPrice })
        } else {
            res.status(404).json({
                message: "bill not found"
            })
        }
    })
        .catch(err => {
            res.status(500).json({
                message: "server error"
            })
        })
}
const add = async (req, res, next) => {
    let bill = new billmodel(
        {
            Fruits: [{
                idFruits: req.body.idFruits,
                weight: req.body.weight,
            }]
        }, {
        user: req.body.iduser
    })
    bill.save();
    res.status(200).json({
        message: "add bill thanh cong"
    })
}
const update = async (req, res, next) => {
    await billmodel.findByIdAndUpdate(req.params.id, {
        $inc: {

        }
    })

}
const findall = async (req, res, next) => {
    try {
        var rs = await billmodel.find({})
        if (rs) {
            res.json(rs)
        } else {
            res.status(404).json({
                message: "data base empty"
            })
        }
    }
    catch (err) {
        res.status(500).json({
            message: "server error"
        })
    }
}


module.exports = { findById, getTotalById, add, findall, findByCode }
