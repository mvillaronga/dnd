import React, { useRef } from 'react'
import { useDispatch } from 'react-redux'

import { addNpc } from '../../redux/npcs'

const AddPanel = () => {
    const inputName = useRef()
    const dispatch = useDispatch()
    
    const onButtonClick = () => {
         dispatch(addNpc(inputName.current.value))
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