const mongoose = require('mongoose')

const setUpDb =()=>{
    mongoose.connect('mongodb://localhost:27017/twiter')
    .then(()=>{
        console.log('connected to DB')
    })
    .catch((err)=>{
        console.log(err)
    })
}

module.exports = setUpDb