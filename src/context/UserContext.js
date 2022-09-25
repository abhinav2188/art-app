import React from "react";

const UserContext = React.createContext({
    user: null,
    setUser: () => { },
    userContextLoading: false
});

export default UserContext;