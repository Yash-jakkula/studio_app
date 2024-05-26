const mongoose = require('mongoose');

const AccountModal = new mongoose.Schema({
    association_name:{
        type:String,
        default:'MULUGU DISTRICT ASSOCIATION'
    },
    association_code:{
        type:String,
        default:"MP25"
    },
    total:{
        type:Number,
        default:0
    },
    extra:{
        type:Number,
        default:0
    },
    association_phone:{
        type:Number,
        default:7674833399
    }
})

module.exports = mongoose.model('account_detail',AccountModal);