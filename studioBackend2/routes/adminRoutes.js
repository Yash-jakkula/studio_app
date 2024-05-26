const express = require('express');
const { transferMoney, getActiveMembers, updateUserAmount } = require('../controllers/adminControllers');

const adminRouter = express.Router();

adminRouter.route('/transfer/:association_code')
.post(transferMoney)
.get(getActiveMembers)

adminRouter.route('/updateuseramount').put(updateUserAmount);


module.exports = adminRouter;