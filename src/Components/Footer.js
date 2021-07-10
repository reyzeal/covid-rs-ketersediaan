import logo from '../logo.svg';
import React from 'react';
import Paper from '@material-ui/core/Paper';
import {Box, Button, Grid, makeStyles, Typography} from '@material-ui/core';
const useStyles = makeStyles((theme) => ({
    root: {
        fontFamily: "Roboto",
        color: theme.palette.text.secondary,
        textAlign: "center"
    },
}));
function Footer() {
    const classes = useStyles()
    return <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" className={classes.root} width={1} height={0.33}>
        <div>Author <a href="https://instagram.com/reyzeal" title="Reyzeal">Reyzeal</a></div>
        <div>Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
    </Box>

}
export default Footer