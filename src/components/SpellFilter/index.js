import React, { useRef } from 'react'
import { Paper, IconButton, OutlinedInput } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
    root: {
      padding: '2px 4px',
      alignItems: 'center'
    }
  }));

const SpellFilter = () => {
    const entry = useRef()

    // const props = {
    //     onChange: () => {
            
    //     }
    // }
    const classes = useStyles()

    return (
        <Paper margin="normal" className={classes.root}>
            <OutlinedInput 
                placeholder="Filter" 
                margin="dense" 
                inputRef={entry}
                fullWidth="true"
                endAdornment={
                    <IconButton>
                        <SearchIcon />
                    </IconButton>
                }
            />
        </Paper>
    )
}

export default SpellFilter