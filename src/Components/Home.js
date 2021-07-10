import logo from '../logo.svg';
import React, {useState} from 'react';
import Paper from '@material-ui/core/Paper';
import {Box, Button, Fade, Grid, Grow, makeStyles, TextField, Typography} from '@material-ui/core';
import LinearProgress from '@material-ui/core/LinearProgress';
import SvgIcon from '@material-ui/core/SvgIcon';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
const useStyles = makeStyles((theme) => ({
    root: {
        fontFamily: "Roboto",
    },
    paper: {
        textAlign: 'center',
    },
    homeLanding: {
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    button : {
        backgroundColor: "#2ecc71",
        margin: "5vh 0"
    },
    card : {
        display: "flex"
    },
    cardContent: {
        flex: '1 0 auto',
    },
    cardProgress : {
        textAlign: "left"
    },
    cardContainer : {
        // padding: "",
    },
    cover: {
        width: 151,
    },
    pencarianBox : {
        // textAlign: "left",
        // color: "wheat"
    },
    content : {
        margin: "0 5%"
    }
}));

function LinearProgressWithLabel(props) {
    return (
        <Box display="flex" alignItems="center">
            <Box width="100%" mr={1}>
                <LinearProgress variant="determinate" {...props} />
            </Box>
            <Box minWidth={35}>
                <Typography variant="body2" color="textSecondary">{`${Math.round(
                    props.value,
                )}%`}</Typography>
            </Box>
        </Box>
    );
}

function Home() {
    const [triggerAnim,setTriggerAnim] = useState(true)
    const classes = useStyles()
    return <Grid container direction="column" justifyContent="center" alignItems="center" className={classes.root}>
        <Grid item className={classes.homeLanding}>
            <Box>
                <img src={logo} width={100}/>
                <Typography variant="h4">Informasi Ketersediaan Pelayanan RS</Typography>
                <Typography variant="p">Bantu pasien untuk mencari fasilitas kesehatan yang tersedia.</Typography>
                <Box display="flex" justifyContent="center">
                    <Button className={classes.button}>Daftarkan RS</Button>
                </Box>
            </Box>
        </Grid>

        <Grid item className={classes.content}>
            <TextField id="standard-basic" label="Pencarian Rumah Sakit" variant="outlined" />
                <Grid container direction="row" justifyContent="center" alignItems="center" spacing={4} className={classes.cardContainer}>
                    {Array(5).fill("").map((v,i,a) => (
                        <Grow in={triggerAnim} timeout={1000*i} key={i}>
                            <Grid item xs={12} md={6} lg={4}>
                                <Card className={classes.card}>
                                    <CardContent className={classes.cardContent}>
                                        <Typography component="h5" variant="h5">
                                            Lorem Ipsum
                                        </Typography>
                                        <Typography variant="subtitle1" color="textSecondary">
                                            Yogyakarta
                                        </Typography>
                                        <div className={classes.cardProgress}>
                                            <Typography variant="subtitle2" color="textDanger">
                                                IGD
                                            </Typography>
                                            <LinearProgressWithLabel value={Math.random()*100} />
                                            <Typography variant="subtitle2" color="textDanger">
                                                VIP
                                            </Typography>
                                            <LinearProgressWithLabel value={Math.random()*100} />
                                            <Typography variant="subtitle2" color="textDanger">
                                                Kelas 1
                                            </Typography>
                                            <LinearProgressWithLabel value={Math.random()*100} />
                                            <Typography variant="subtitle2" color="textDanger">
                                                Kelas 2
                                            </Typography>
                                            <LinearProgressWithLabel value={Math.random()*100} />
                                            <Typography variant="subtitle2" color="textDanger">
                                                Kelas 3
                                            </Typography>
                                            <LinearProgressWithLabel value={Math.random()*100} />
                                        </div>

                                    </CardContent>
                                    <CardMedia
                                        image={"https://source.unsplash.com/random?x="+i}
                                        className={classes.cover}
                                    />

                                </Card>
                            </Grid>
                        </Grow>

                        )
                    )}
                </Grid>

        </Grid>


    </Grid>

}
export default Home