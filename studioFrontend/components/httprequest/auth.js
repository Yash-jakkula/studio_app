
import env from "../../config";
import authActions from "../../state/auth-slice/auth-slice";
import store from "../../state";
import auth from "../../state/auth-slice/auth-slice";
import { Alert } from "react-native";
import { userActions } from "../../state/user-slice/user-slice";
import { getAllusers } from "./users";
//login function to fetch the user valid token for authentication
// @ post fetch request
export const userLogin = async({phone,password}) => {
    try{
        if(phone && password) {
            store.dispatch(authActions.actions.setLoading(true));
            const token_res = await fetch(`${env.base_url}/users/userlogin`,{
                method:"POST",
                headers:{
                "Content-Type":"application/json"
                },
                body:JSON.stringify({phone:`${phone}`,password:`${password}`})
            })
            const login_result = await token_res.json();
            
            if(login_result.token){    
                await currentUser(login_result.token);
                await getAllusers();
                store.dispatch(authActions.actions.setLoading(false));
                store.dispatch(authActions.actions.login(true));
            }
            else{
              Alert.alert('Invalid Credentails',"please enter a valid mobile number and password to proceed");  
            }
        }
        else{
            Alert.alert("invalid details","please enter mobile number and password to continue")
        }
    }
    catch(err){
        console.error(`error from login route frontend ${err}`)
    }
}

// user logout function to logout the user session and clearing the token from state
// @ get request

export const userLogout = async()=>{
    try{
        const response = await fetch(`${env.base_url}/users/userlogout`);
        const logout_result = await response.json();
        if(logout_result){
            store.dispatch(authActions.actions.login(false));
        }
    }
    catch(err){
        console.error(`${err}`);
    }
}

// get logged in user using the token 
// @get request
export const currentUser = async(token) => {
    try{
        if(token){
               const response = await fetch(`${env.base_url}/users/currentuser/${token}`);
               const user = await response.json();
               if(user){
                store.dispatch(userActions.setCurrentUser(user));        
                }
               else{
                console.error('error fetching user');
               }
            }
        else{
            console.error('no valid token');
        }
    }
    catch(err){
        console.error(`${err} error from current user`);
    }
}