import React, { useState, useEffect } from "react";
import { localStorage } from "../localStorage";
import { validateToken } from "../services/tokenService";
import UserContext from "./UserContext";

const UserProvider = (props) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(null);

    useEffect(async ()=>{
        setLoading(true);
        const userToken = await localStorage.getData("userDetails");        
        if(!!userToken){
            validateToken().then((response) => {
                if (response.statusCode === 200) {
                    setUser(userToken);
                }else{
                    localStorage.removeData("userDetails");
                }
        })}
        setLoading(false);
        // localStorage.getData("userDetails").then( data => {
        //     console.log('local storage data ',data);
        //     setUser(data);
        // })
      },[]);    

    return (
        <UserContext.Provider value={{ user: user, setUser: setUser, userContextLoading:loading }}>{props.children}</UserContext.Provider>
    )
}

export default UserProvider;