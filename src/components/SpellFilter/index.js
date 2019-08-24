import React, { useRef } from 'react'

const SpellFilter = () => {
    const entry = useRef()

    const props = {
        onChange: () => {
            
        }
    }

    return (
        <div>
            Filter&nbsp;
            <input type="text" ref={entry} {...props} />
        </div>
    )
}

export default SpellFilter