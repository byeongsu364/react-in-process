import React, {useRef} from 'react'

const FocusInput = () => {

    const inputRef = useRef(null)

    const FocusInput=()=>{
        inputRef.current.focus()
    }


    return (
        <div>
            <input type="text" ref={inputRef} placeholder='클릭하면 focused'/>
            <button onClick={FocusInput}>focus</button>
        </div>
    )
}

export default FocusInput