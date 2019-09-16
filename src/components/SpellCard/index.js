import React from 'react'

import Card from '@material-ui/core/Card'

const SpellCard = ({name, level, onClick}) => {

    return <Card onClick={onClick} >
        {name} - {level}
    </Card>
}

export default SpellCard