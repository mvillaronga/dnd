import React from 'react'
import { useDispatch } from 'react-redux'

import {selectSpell} from '../../redux/actions'

import SpellCard from '../SpellCard'

const SpellList = ({spells}) => {
    const dispatch = useDispatch()
    
    const onSpellClicked = (spell) => {
        dispatch(selectSpell(spell))
    }

    return (
        <div>
            {spells.map((spell, index) => (
                <SpellCard key={index} {...spell} onClick={() => onSpellClicked(spell)}/>
                ))}
        </div>
    )
}

export default SpellList