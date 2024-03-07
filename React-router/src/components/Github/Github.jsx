import React, { useEffect, useState } from "react"
import { useLoaderData } from "react-router-dom"

function Github(){
    const data = useLoaderData()
    // const [data, setData] = useState([])

    // useEffect(() => {
    //     fetch('https://api.github.com/users/Gauravoza07')
    //         .then(response => response.json())
    //         .then(data => {
    //             console.log(data);
    //             setData(data);
    //         })
    // }, []);

    return(
        <>
            <div className="text-center m-4 p-4 bg-gray-600 text-white text-3xl">Github Follwers : {data.followers}
            <img className="" src={data.avatar_url} alt="Github Profile" width={300}/>
            </div>
        </>
    )
}

export default Github

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/Gauravoza07')
    return response.json()
}