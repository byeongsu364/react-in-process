import React, { useState, useContext } from 'react'
import { MyContext } from '../context/MyContext'

const MyComponenet = () => {

    const { value, setValue } = useContext(MyContext)

    return (
        <div>
            <p>
                {value}
            </p>
            <button 
            onClick={()=>setValue("update from Component!")}
            >update</button>
        </div>
    )
}

export default MyComponenet