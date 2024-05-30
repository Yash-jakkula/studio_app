
import React from "react";
import { createContext } from "react";

const Context = createContext();

const ContextMain = ({children}) => {
const [searchItem,setSearchItem] = React.useState("");
const value = {
    searchItem,
    setSearchItem,
   
}
    return(
        <>
        <Context.Provider value={value}>
         {children}
        </Context.Provider>
        </>
    )
}

export {Context,ContextMain};