import React from 'react'
import { Card, CardHeader, CardContent, CardActionArea, IconButton, Avatar } from '@material-ui/core'
import {ExpandMore, ExpandLess} from '@material-ui/icons'

// White	50% Grey	Black	
// 1	#0000FF	#0000FF	#0000FF	1
// 2	#0055AA	#0055AA	#0055AA	2
// 3	#00AA55	#00AA55	#00AA55	3
// 4	#00FF00	#00FF00	#00FF00	4
// 5	#50F505	#50F505	#50F505	5
// 6	#A1EC0B	#A1EC0B	#A1EC0B	6
// 7	#F2E311	#F2E311	#F2E311	7
// 8	#F6970B	#F6970B	#F6970B	8
// 9	#FA4B05	#FA4B05	#FA4B05	9
// 10	#FF0000	#FF0000	#FF0000	10
const gradient = [
    "#0000FF",
    "#0055AA",
    "#00AA55",
    "#00FF00",
    "#50F505",
    "#A1EC0B",
    "#F2E311",
    "#F6970B",
    "#FA4B05",
    "#FF0000"
]


const SpellCard = ({name, level}) => {
return <Card>
        <CardHeader 
            avatar={
            <Avatar style={ {background: gradient[level]} } >
                    {(level === 0) ? "C" : level}
                </Avatar>
            }
            title={name} 
            action={<IconButton><ExpandMore size="small" /></IconButton>}
            >
        </CardHeader>
    </Card>
}

export default SpellCard