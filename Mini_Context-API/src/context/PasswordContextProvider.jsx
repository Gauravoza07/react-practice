import React,{useState} from "react";
import UserContext from "./UserContext";

function PasswordContextProvider(children)
{   
    const [password,setPassword] = useState(null)
    return(
        <UserContext.Provider value={{password,setPassword}}>
        {children}
        </UserContext.Provider>
    )
}

export default PasswordContextProvider