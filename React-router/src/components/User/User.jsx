import React from "react";
import { useParams } from "react-router-dom";

export default function User()
{
    const {userId} = useParams()
    return(
        <>
        <div className="text-center bg-orange-600 text-white p-8 font-semibold text-xl">User : {userId}</div>
        </>
    )
}