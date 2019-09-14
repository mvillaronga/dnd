import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import {selectSpell, deselectSpell, clearSpellSelection} from '../../redux/spells'

import SpellFilter from '../SpellFilter'
import SpellList from '../SpellList'
import SpellSelected from '../SpellSelected'

const SpellSelectionPanel = () => {
    const dispatch = useDispatch()

    const selection = useSelector(state => state.selection.spells)
    const refs = useSelector(state => state.refs)
    console.log('refs', refs)
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
        <SpellSelected selection={props.selection} onSpellDeselected={onSpellDeselected} onClearSelection={onClearSpellSelection} />
        <SpellList spells={props.spells} onSpellClicked={onSpellSelected} />
    </div>
)}

export default SpellSelectionPanel