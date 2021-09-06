import React, { forwardRef } from 'react';
import { makeStyles, TextField, Typography } from '@material-ui/core';

const useStyles = makeStyles( theme => ({
    root: {
        width: '100%',
        background: '#fff',
        borderRadius: 8,
        boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.15)',
        '& .MuiInputBase-input': {
            color: theme.palette.text.primary,
            '&::placeholder': {
                ...theme.typography.subtitle1,
                color: theme.palette.text.primary,
                opacity: 0.5
            }
        }
    }
}));

const CustomInput = forwardRef(({ label, ...rest }, ref) => {
    const classes = useStyles();
    return (
        <div>
            {label && <Typography variant="subtitle1" color="textPrimary" style={{ marginBottom: '10px' }}>{label}</Typography>}
            <TextField
                {...rest}
                autoComplete="off"
                variant="outlined"
                className={classes.root}
                inputRef={ref}
            />
        </div>
    )
})

export default CustomInput;