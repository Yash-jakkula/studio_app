const bcrypt = require('bcryptjs');
const crypto = require('crypto');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');

const UserModel = new mongoose.Schema({
    uid:{
        type:Number,
        unique:true,
        required:[true,'enter a unique union id for the user']
    },
    phone:{
        type:Number,
        unique:true,
        required:[true,'please provide a unique mobile number']
    },
    nominee:{
        type:String,
        required:[true,'please provide a nominee']
    },
    username:{
        type:String,
        required:[true,'enter the user name']
    },
    village:{
        type:String,
        required:[true,'enter village name']
    },
    district:{
        type:String,
        required:[true,'enter district name']
    },
    state:{
        type:String,
        required:[true,'enter state name']
    },
    pincode:{
        type:Number,
        required:[true,'enter the pincode']
    },
    dob:{
        type:Date,
        required:[true,'enter date of birth']
    },
    amount:{
        type:Number,
        required:[true,'enter the amount']
    },
    extra:{
        type:Number,
        required:[true,'enter extra amount']
    },
    studio_name:{
        type:String,
    },
    profile:{
        type:String,
        default:""
    },
    password:{
        type:String,
        required:[true],
        minlength:6,
        default:'123456',
        select:false
    },
    association_name:{
        type:String,
        default:"MULUGU DISTRICT PHOTOGRAPHERS ASSOCIATION",
    },
    association_code:{
        type:String,
        default:"MP24"
    },
    status:{
        type:Boolean,
        default:true
    },
    createdAt: {
        type: Date,
        default: Date.now,
      },
      role:{
        type:String,
        default:'user'
      },
      resetPasswordToken:String,
      resetPasswordExpire:Date
})


UserModel.pre('save',async function(next){
    
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password,salt); 
})


UserModel.pre('findOneAndUpdate',async function(next){
    if(this._update.password){
        this._update.password = await bcrypt.hash(this._updat.password,10);
    }
    next();
})

UserModel.methods.getSignedJwtToken = function(){
    return jwt.sign({id:this._id},process.env.JWT_SECRET,{
        expiresIn:process.env.JWT_EXPIRE
    });    
};

UserModel.methods.matchPassword = async function(enteredPassword){
    console.log('pass',enteredPassword);
    return await bcrypt.compare(enteredPassword,this.password);
}

UserModel.methods.getResetPasswordToken = async function(){
  const resetToken = crypto.randomBytes(20).toString('hex');

  this.resetPasswordToken = crypto.createHash('sha256').update(resetToken).digest('hex');

  this.resetPasswordExpire = Date.now() + 10 * 60 * 1000

  return this.resetPasswordToken;
}

module.exports = mongoose.model('user',UserModel);
