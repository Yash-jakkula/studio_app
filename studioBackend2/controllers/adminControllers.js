const AccountModal = require('../Model/Account');
const Transfer = require('../Model/Transfer');
const UserModel = require('../Model/Users');
const addNewUser = async function(req,res,next) {
    try{ 
     if(req.body && req.body.amount > req.body.extra){
           const acc_update = await AccountModal.find({association_code:req.body.association_code});
           acc_update[0].total+=req.body.amount-req.body.extra;
           const extra = acc_update[0].extra;
           req.body.amount -= req.body.extra;
           const user = await UserModel.create(req.body);
           if(user){
            console.log(req.body,'reqbody');
            const acc_change = await AccountModal.findOneAndUpdate({association_code:req.body.association_code},{total:acc_update[0].total,$inc:{extra:+req.body.extra}})
            return res.status(200).json({
                message:'user created succesfully'
            })
            }
            if(!acc_update){
                return res.status(500).json({
                    message:'account details not updated please repeat your action again'
                })
            }
        }
        else{
            res.status(400).json({
                message:'please enter the extra amount greater than the amount'
            })
        }
            
    }
    catch(err){
        console.log(err);
        res.status(400).json({
            message:err,
        });
    }
}

const transferMoney = async(req,res,next) => {
    try{
        if(req.body){
        const acc_details = await AccountModal.findOne({association_code:req.params.association_code});
        const zero_accounts = await UserModel.updateMany({status:true,amount:{$lte:0}},{$set:{status:false}});
        if(zero_accounts){
        const len_users = await UserModel.find({status:true});
        const amount = len_users.length*10;
        console.log('amount',amount);
        if(acc_details && acc_details.total >= req.body.amount){
            const finalAmountInAccount = acc_details.total - amount;
            const update_acc = await AccountModal.findOneAndUpdate({association_code:req.params.association_code},{total:finalAmountInAccount});
            console.log('updated_acc',update_acc);
            if(update_acc){
                const response = await Transfer.create(req.body);
                const user_accounts = await UserModel.updateMany({},{$inc:{amount:-10}});
                if(response){
                res.status(200).json({
                message:'transfer made succesfull',
            })
           }
        }
    }
    else{
        return res.status(403).json({
            message:'server failure cannot process the request'
        })
    }
    }
}
    }
    catch(err){
        res.status(500).json({
            message:'Server didnot respond try again',
            err
        })
    }
}

const getActiveMembers = async(req,res,next) => {
    try{
        const members = await UserModel.find({status:true,amount:{$gte:10}});
        res.status(200).json({
            message:members.length
        })
    }
    catch(err){
        res.status(500).json({
            message:'bad request'
        })
    }
}


const holdUser = async(req,res,next) => {
    try{
        const {phone} = req.body;
        const update_user = await UserModel.findOneAndUpdate({phone:phone},{status:false});
        if(update_user){
            res.status(200).json({
                message:'updated user status'
            })   
        }
        else{
            res.status(500).json({
                message:'server failed'
            })
        }
    }
    catch(err){
        res.status(500).json({
            message:`${err} server response`
        })
    }
}


const updateUserAmount = async(req,res,next)=>{
    try{
        const {phone,amount,extra,association_code} = req.body;
        console.log(association_code,'code');
        if(phone && amount && extra && association_code){
        const update_user_amount = await UserModel.findOneAndUpdate({phone:phone},{$inc:{amount:+(amount-extra),extra:+extra}});
        const account_amount_update = await AccountModal.findOneAndUpdate({association_code:association_code},{$inc:{total:+(amount-extra),extra:+extra}});
        console.log('account_update_info',account_amount_update);
        if(!account_amount_update){
            await UserModel.findOneAndUpdate({phone:phone},{$inc:{amount:-(amount - extra),extra:-extra}});
        }
        if(update_user_amount && account_amount_update && update_user_amount.amount >= 10){
            const update_user_status = await UserModel.findOneAndUpdate({phone:req.body.phone},{status:true});
            if(update_user_status){
                return res.status(200).json({
                    message:'user udpated succesfully',
                })
            }
        }
        else{
            return res.status(500).json({message:'server error please try again'})
        }
    }
    else{
        return res.status(404).json({
            message:'please fill all the details'
        })
    }
    }
    catch(err){
        return res.status(500).json({
            message:'Server didnot respond'
        })
    }
}

const transferAccountDetails = async(req,res,next) =>{
    try{
    const transferDetails = await Transfer.find();
    if(transferDetails){
        return res.status(200).json({
            transferDetails
        })
    }
    else{
        return res.status(404).json({
            message:'details not found'
        })
    }
}
catch(err){
    return res.status(500).json({
        message:'server didnot respond'
    })
}
}

module.exports = {addNewUser,transferMoney,getActiveMembers,holdUser,updateUserAmount,transferAccountDetails}