import React, { useRef } from 'react'

const SpellFilter = ({onFilterChange}) => {
    const entry = useRef()

    const onChange = () => {
        onFilterChange(entry.current.value)
    }

    return (
        <div>
            Filter&nbsp;
            <input type="text" ref={entry} onChange={onChange} />
        </div>
    )
}

export default SpellFilter