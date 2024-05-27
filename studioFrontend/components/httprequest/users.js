import React from "react";
import { Alert } from "react-native";
import env from "../../config";
import store from "../../state";
import { userActions } from "../../state/user-slice/user-slice";

export const getAllusers = async()=>{
    try{
        const users = await fetch(`${env.base_url}/users/allusers`);
        const all_users = await users.json();
        if(all_users){
            store.dispatch(userActions.setUsers(all_users.users));
        }
        else{
            console.error(`cannot get users ${all_users}`);
        }
    }
    catch(err){
        Alert.alert(`${err}`,'cannot process the request at this time please try again later');
    }
}