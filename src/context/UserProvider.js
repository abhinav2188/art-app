import React, { useState, useEffect } from "react";
import { localStorage } from "../localStorage";
import UserContext from "./UserContext";

const UserProvider = (props) => {

    const [user, setUser] = useState(null);

    useEffect(()=>{
        localStorage.getData("userDetails").then( data => {
            console.log('local storage data ',data);
            setUser(data);
        })
      },[]);    

    return (
        <UserContext.Provider value={{ user: user, setUser: setUser }}>{props.children}</UserContext.Provider>
    )
}

export default UserProvider;