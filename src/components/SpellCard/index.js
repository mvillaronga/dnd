import React from 'react'

const SpellCard = ({name, level, onClick}) => {

    return <div onClick={onClick} >
        {name} - {level}
    </div>
}

export default SpellCard