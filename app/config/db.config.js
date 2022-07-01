const mongoose = require('mongoose')

async function connect() {
    try {
        await mongoose.connect('mongodb+srv://user01:pass01@cluster0.mcvsh.mongodb.net/PBL?retryWrites=true&w=majority', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log('Connect successfully !')
    }
    catch (error) {
        console.log('Connect failure !')
    }
}

module.exports = { connect }