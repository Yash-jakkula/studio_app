const {userLogin, userLogout, updateUser, getAllusers, getLoggedInUser} = require('../controllers/userController');
const {addNewUser} = require('../controllers/adminControllers');
const express = require('express');
const userRouter = express.Router();

userRouter.route('/newuser').post(addNewUser);

userRouter.route('/userlogin').post(userLogin);

userRouter.route('/userlogout').get(userLogout);

userRouter.route('/updateuser/:id').put(updateUser);

userRouter.route('/allusers').get(getAllusers);

userRouter.route('/currentuser/:id').get(getLoggedInUser);

module.exports = userRouter;
