
const fruitModel = require('./fruit.model')
const path = require('path')
//-------------

//get all
const getAll = (req, res, next) => {
    console.log('get all')
    fruitModel.find().then(response => {
        res.status(200).json({
            response
        })
    }).catch(error => {
        res.status(404).json({
            message: 'an error occured !'
        })
    })
}

//delete by id
const deleteFruit = async (req, res, next) => {

    try {
        let name = req.params.name
        const rs = await fruitModel.findOneAndUpdate({ name }, {
            remain: 0
        })

        return res.json({ msg: 'Deleted fruit successfully!' })
    }
    catch (err) {
        res.status(500).json({ msg: 'Internal server error...' })
    }

}
//edit price

const editPrice = async (req, res, next) => {
    try {
        let name = req.params.name
        const rs = await fruitModel.findOneAndUpdate({ name }, {
            $set: {
                price: req.body.newPrice
            }
        });
        if (!rs) return res.status(403).json({ msg: 'Cant access to delete...' })

        return res.json({ msg: 'Edit price fruit successfully!' })
    }
    catch (err) {
        res.status(500).json({ msg: 'Internal server error...' })
    }

}
//add quantity
const incrRemain = (req, res, next) => {
    let name = req.params.name
    fruitModel.findOneAndUpdate({ name }, {
        $inc: {
            remain: Number(req.body.quantity),

        }
    }, { new: true }).then(response => {
        res.status(200).json({
            msg: 'Add quantity successfully!'
        })
    }).catch(error => {
        console.log(error)
        res.status(500).json({ msg: 'Internal server error...' })
    })

}



// Thêm mẫu mới 
const storage = (req, res, next) => {
    console.log('storage fruit')

    let fruit = new fruitModel({
        name: req.body.name,
        season: req.body.season,
        country: req.body.country,
        price: Number(req.body.price),
        remain: Number(req.body.remain),
        sold: Number(req.body.sold),
        avatar: req.body.avatar,
        description: req.body.description,

    })
    fruit.save()
        .then(response => {
            res.status(200).json({
                message: 'Add new product successfully !'
            })
        }).catch(error => {
            res.json({
                message: error
            })
        })
}

//edit tất cả thông tin
const edit = async (req, res, next) => {
    let ID = req.params.id
    console.log(req.body.name)
    await fruitModel.updateOne({ _id: ID }, {
        $set: {
            name: req.body.name,
            season: req.body.season,
            country: req.body.country,
            price: Number(req.body.price),
            unit: req.body.unit,
            remain: Number(req.body.remain),
            sold: Number(req.body.sold),
            url: req.body.url,
            description: req.body.description,
            updateAt: new Date
        }
    }).then(response => {
        res.status(200).json({
            response
        })
    }).catch(error => {
        res.status(400).json({
            message: "Update fail !"
        })
    })

}

const getOne = (req, res, next) => {
    let ID = req.params.id
    console.log('get one' + ID)


    fruitModel.findOne({ _id: ID }).then(response => {
        res.status(200).json({
            response,
        })
    }).catch(error => {
        res.status(404).json({
            message: 'an error occured !'
        })
    })
}




module.exports = {
    getAll, storage, edit, incrRemain, getOne, deleteFruit
    , editPrice
}