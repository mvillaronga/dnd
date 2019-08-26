import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import {selectSpell, deselectSpell, clearSpellSelection} from '../../redux/actions'

import SpellFilter from '../SpellFilter'
import SpellList from '../SpellList'
import SpellSelected from '../SpellSelected'

const SpellSelectionPanel = () => {
    const dispatch = useDispatch()

    const selection = useSelector(state => state.selection.spells)
    const spells = useSelector(state => state.refs.spells.items).filter(ele => !selection.includes(ele))

    const onSpellSelected = (spell) => {
        dispatch(selectSpell(spell))
    }

    const onSpellDeselected = (spell) => {
        dispatch(deselectSpell(spell))
    }

    const onClearSpellSelection = () => {
        dispatch(clearSpellSelection())
    }

    const props = {
        spells: spells,
        selection: selection
    }

    return (
    <div>
        <h1>Spells</h1>
        <hr />
        <SpellFilter />
        <hr />
        <SpellSelected {...props} onSpellDeselected={onSpellDeselected} onClearSelection={onClearSpellSelection} />
        <SpellList {...props} onSpellClicked={onSpellSelected} />
    </div>
)}

export default SpellSelectionPanel