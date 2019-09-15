import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { selectSpell, deselectSpell, clearSpellSelection } from '../../redux/spells'
import { filterChange } from '../../redux/filter'

import SpellFilter from '../SpellFilter'
import SpellList from '../SpellList'
import SpellSelected from '../SpellSelected'

const SpellSelectionPanel = () => {
    const dispatch = useDispatch()

    const selection = useSelector(state => state.selection.spells)
    const filter = useSelector(state => state.filter.name)
    const spells = useSelector(state => state.refs.spells.items)
                        .filter(ele => !selection.includes(ele))
                        .filter(ele => filter === '' || ele.name.toLowerCase().includes(filter))

    const onSpellSelected = (spell) => {
        dispatch(selectSpell(spell))
    }

    const onSpellDeselected = (spell) => {
        dispatch(deselectSpell(spell))
    }

    const onClearSpellSelection = () => {
        dispatch(clearSpellSelection())
    }

    const onFilterChange = (val) => {
        dispatch(filterChange(val))
    }

    const props = {
        spells: spells,
        selection: selection
    }

    return (
    <div>
        <h1>Spells</h1>
        <hr />
        <SpellFilter onFilterChange={onFilterChange} />
        <hr />
        <SpellSelected selection={props.selection} onSpellDeselected={onSpellDeselected} onClearSelection={onClearSpellSelection} />
        <SpellList spells={props.spells} onSpellClicked={onSpellSelected} />
    </div>
)}

export default SpellSelectionPanel