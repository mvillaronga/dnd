import React, { useRef } from 'react'

import Button from '@material-ui/core/Button';

const SpellFilter = ({filter, onFilterChange, onFilterClear}) => {
    const entry = useRef()

    const onChange = () => {
        onFilterChange(entry.current.value)
    }

    return (
        <div>
            Filter&nbsp;
            <input type="text" ref={entry} onChange={onChange} value={filter} />
            {filter.length > 0 &&<Button onClick={onFilterClear}>Clear</Button>}
        </div>
    )
}

export default SpellFilter