const mongoose = require('mongoose');

const TransferModal = new mongoose.Schema({
    association_name:{
        type:String,
        required:[true,'enter the association name']
    },
    amount:{
        type:Number,
        required:[true,'enter the amount']
    },
    phone:{
        type:Number,
        required:[true,'enter the recieptant phone number']
    },
    transfer_date:{
        type:Date,
        default:Date.now()    
    }
})

module.exports = mongoose.model('transfer_detail',TransferModal);