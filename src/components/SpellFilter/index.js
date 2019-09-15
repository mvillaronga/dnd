import React, { useRef } from 'react'

const SpellFilter = ({filter, onFilterChange, onFilterClear}) => {
    const entry = useRef()

    const onChange = () => {
        onFilterChange(entry.current.value)
    }

    return (
        <div>
            Filter&nbsp;
            <input type="text" ref={entry} onChange={onChange} value={filter} />
            {filter.length > 0 &&<button onClick={onFilterClear}>Clear</button>}
        </div>
    )
}

export default SpellFilter