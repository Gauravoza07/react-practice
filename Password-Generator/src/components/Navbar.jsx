import React from "react"

function Navbar()
{
    return(
        <>
            <nav className="bg-teal-800 flex fixed w-full h-20 justify-center top-0 left-0">
     <div className="flex flex-1 items-center justify-center">
        <div className="flex text-teal-400 font-semibold">
            <h1>Password Generator</h1>
        </div>
        
      </div>
</nav>

        </>
    )
}

export default Navbar