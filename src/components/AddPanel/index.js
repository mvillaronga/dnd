import React, { useRef } from 'react'
import { useDispatch } from 'react-redux'

import { addNPC } from '../../redux/actions'

const AddPanel = () => {
    const inputName = useRef()
    const dispatch = useDispatch()
    const onButtonClick = () => {
         console.log('Input', )
         dispatch(addNPC(inputName.current.value))
         inputName.current.value = ''
         inputName.current.focus()
     }

    return <div>
        New Npc Name 
        <input type="text" ref={inputName} />
        <button onClick={onButtonClick}>Add</button>
    </div>
}

export default AddPanel;