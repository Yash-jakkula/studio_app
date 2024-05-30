const express = require('express');
const { transferMoney, getActiveMembers, updateUserAmount, transferAccountDetails, holdUser } = require('../controllers/adminControllers');

const adminRouter = express.Router();

adminRouter.route('/transfer/:association_code')
.post(transferMoney)

adminRouter.route('/getactiveusers/:association_code').get(getActiveMembers);

adminRouter.route('/updateuseramount').put(updateUserAmount);

adminRouter.route('/transferdetails').get(transferAccountDetails);

adminRouter.route('/holduser').put(holdUser)

module.exports = adminRouter;