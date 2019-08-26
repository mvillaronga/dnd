import React from 'react'
import { useSelector } from 'react-redux'

import { Paper } from '@material-ui/core'

import SpellFilter from '../SpellFilter'
import SpellList from '../SpellList'

const SpellSelectionPanel = () => {
    
    const props = {
        spells: useSelector(state => state.refs.spells.items)
    }

    return (
    <Paper>
        <h1>Spells</h1>
        <SpellFilter />
        <SpellList {...props} />
    </Paper>
)}

export default SpellSelectionPanel