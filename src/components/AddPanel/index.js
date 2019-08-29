import React, { useRef } from 'react'
import { useDispatch } from 'react-redux'

import { addNPC } from '../../redux/npcs/actions'

const AddPanel = () => {
    const inputName = useRef()
    const dispatch = useDispatch()
    
    const onButtonClick = () => {
         dispatch(addNPC(inputName.current.value))
         inputName.current.value = ''
         inputName.current.focus()
     }

    return <div>
        Npc &nbsp;
        <input type="text" ref={inputName} /> &nbsp;
        <button onClick={onButtonClick}>Add</button>
    </div>
}

export default AddPanel;