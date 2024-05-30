import React from "react";
import env from "../../config";
import { userActions } from "../../state/user-slice/user-slice";
import { getAllusers } from "./users";
import { Alert } from "react-native";
import store from "../../state";
import { transferActions } from "../../state/transfer-details/transfer-details";
import { accountActions } from "../../state/account-slice/account-slice";
export const addMember = async(userDetails) => {
    try{
        if(userDetails){
            const response = await fetch(`${env.base_url}/users/newuser`,{
                method:'POST',
                headers:{
                    'Content-Type':'application/json'
                },
                body:JSON.stringify(userDetails)
            })
            if(response.ok){
                await getAllusers();
                await account_details();
                return response.ok;
            }
            else{
                console.log('couldnot process your request');
            }
        }
    }
    catch(err){
        return false;
    }
}

export const updateUserAmount = async(amountDetails) => {
    try{
        const amount_update_result = await fetch(`${env.base_url}/admin/updateuseramount`,{
            method:'PUT',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(amountDetails)
        })
        if(amount_update_result.ok){
            await getAllusers();
            await account_details();
            const response = await amount_update_result.json();
            Alert.alert(`Request success`,`${response.message}`);
        }
        else{
            Alert.alert('cannot process request','please try again by checking all the entered details are correct');
        }
    }
    catch(err){
        Alert.alert(`server didnot respond`,`${err}`);
    }
}

export const transferMoney = async(amountDetails) => {
    try{
        const transfer_result = await fetch(`${env.base_url}/admin/transfer/MP25`,{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(amountDetails)
        })
        if(transfer_result.ok){
            await getAllusers();
            await getTransferAccountDetails();
            await account_details();
            Alert.alert(`proccess succesfull`)
        }
        else{
            Alert.alert(`process request failed`,`please try again later`);
        }
    }
    catch(err){
        Alert.alert(`Server did not respond`,`${err}`);
    }
}

export const activeUsers = async() => {
    try{
        const active_users = await fetch(`${env.base_url}/admin/getactiveusers/MP25`);
        if(active_users.ok){

           const count = await active_users.json();
           return count.message;
        }
        else{
            Alert.alert(`cannot fetch active users`,`please try again later`)
        }
    }
    catch(err){
        Alert.alert(`server did not respond`,`${err}`);
    }
}

export const getTransferAccountDetails = async()=>{
    try{
        const account_details = await fetch(`${env.base_url}/admin/transferdetails`)
        if(account_details.ok){           
            const transfer_details = await account_details.json();
            store.dispatch(transferActions.setTransferDetails(transfer_details))
        }
        else{
            Alert.alert('cannot proccess request',"please try again later");
        }
    }
    catch(err){
        Alert.alert('server error',`${err}`)
    }
}

export const userHoldStatus = async(userHoldDetails) => {
    try{
        const response_status = await fetch(`${env.base_url}/admin/holduser`,{
            method:"PUT",
            headers:{
                "Content-Type":'application/json'
            },
            body:JSON.stringify(userHoldDetails)
        })
        if(response_status.ok){
            Alert.alert(`proccess success`,`user with ${userHoldDetails.phone} on hold`);
        }
        else{
            Alert.alert(`cannot proccess request`,`try again later`);
        }
    }
    catch(err){
        Alert.alert(`server did not respond`,`${err}`)
    }

}

export const account_details = async()=>{
    try{
        const response_status = await fetch(`${env.base_url}/users/accountdetails`,{
            method:'PUT',
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({"association_code":"MP25"})
        });
            
        if(response_status.ok){
            const details = await response_status.json();
            
            store.dispatch(accountActions.setAccountDetails(details));
            
        }
        else{
            Alert.alert(`cannot proccess request`,`try again later`);
        }
    }
    catch(err){
        Alert.alert(`server did not respond`,`${err}`)
    }
    
}