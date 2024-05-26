const UserModel = require('../Model/Users');
const jwt = require('jsonwebtoken');
const twilio = require('twilio');
const dotenv = require("dotenv");

dotenv.config({path:'../config/.env'})


const client = new twilio(process.env.TWILIO_SID || 'AC4cc74046ee3f758f29c02b889cfc21bf',process.env.TWILIO_AUTH_KEY || 'c0b0a0e71f87879db42c5c83155f69a8');
// const generateOtp = () => Math.floor(100000 + Math.random() * 900000).toString();


const userLogin = async function(req,res,next){
    try{
        const {phone,password} = req.body;
        
        if(!phone || !password){
            return res.status(401).json({
                message:'please provide credetials'
            })
        }

        const userdetails = await UserModel.findOne({phone:phone}).select('+password');
        
        if(!userdetails){
            return res.status(404).json({
                message:'user not found'
            })
        }

        const user = await userdetails.matchPassword(password);
        
        if(!user){
            return res.status(401).json({
                message:'bad auth',
            })
        }
        sendTokenResponse(userdetails,200,res);
    
    }
    catch(err){
        res.status(400).json({
            message:err
        })
    }
}


const userLogout = async(req,res,next) => {
    try{
        res.status(200).cookie('token',"").json({
            message:'logout succesfull'
        })
    }
    catch(err){
        res.status(500).json({
            message:'try again after some time',
            err
        })
    }
}

const updateUser = async(req,res,next) => {
    try{
        console.log(req.body,req.params.id);
        if(req.body && req.params.id){
        const result = await UserModel.findByIdAndUpdate(req.params.id,req.body,{new:true});
        if(result){
            return res.status(200).json({
                message:'user updated'
            })
        }
        }
        else{
            return res.status(404).json({
                message:'user not found'
            })
        }
    }
    catch(err){
        return res.status(500).json({
            message:`server error ${err}`
        })
    }
}


const getLoggedInUser = async(req,res,next)=>{
    try{
        console.log('verifying')
        const token  = req.params.id;
        console.log('secret',process.env.JWT_SECRET);
        const verify = jwt.verify(token,process.env.JWT_SECRET);
        const user = await UserModel.findById(verify.id);
        if(user){
           return res.status(200).json({
                user
            })
        }
        else{
           return res.status(404).json({
                message:'no user found invalid token'
            })
        }
    }
    catch(err){
        res.status(500).json({
            message:'server error'
        })
    }
}

const getAllusers = async(req,res,next) => {
    try{
        const users = await UserModel.find();
        if(users){
            return res.status(200).json({
                users
            })
        }
    }
    catch(err){
        return res.status(500).json({
            message:'server did not respond'
        })
    }
}


const resetPassword = async(req,res,next) => {
    try{
        if(req.body.phone && await UserModel.findOne({phone:req.body.phone})){
            
        }
        else{
            res.status(404).json({
                message:`no user found with given phone number ${req.body.phone} please check correctly to proceed`
            })
        }
    }
    catch(err){
        res.status(500).json({
            message:`${err} : server error`
        })
    }
}

const sendTokenResponse = async(user,statuscode,res) => {
   
    const token = jwt.sign({id:user._id},process.env.JWT_SECRET,{
        expiresIn:process.env.JWT_EXPIRE
    });
    const options = {
        expires: new Date(
          Date.now() + process.env.JWT_COOKIE_EXPIRE * 24 * 60 * 60 * 1000,
        ),
        httpOnly: true,
      };

      if (process.env.NODE_ENV === 'production') {
        options.secure = true;
      }

    res.status(statuscode).cookie('token',token,options).json({
        message:'login success',
        token
    })
}

module.exports = {userLogin,userLogout,updateUser,getAllusers,getLoggedInUser}