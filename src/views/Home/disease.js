import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Box } from '@material-ui/core'
import windowSize from 'react-window-size';
const useStyles = makeStyles((theme) => ({

    root: {
        flexGrow: 1,



    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        height: 200
    },
}));

function CenteredGrid(props) {
    const classes = useStyles();
    const [covidp, setcovidp] = useState("#f2820a");
    const [covidn, setcovidn] = useState("#f2820a");


    useEffect(() => {

        console.log("********************")

        console.log(props.counter)
        console.log("********************")

        if (props.currentdiesasetype == "Covid") {

            setcovidp("#f0051c")
            setcovidn("#f2820a")



        }








    })




    return (
        <div className={classes.root}  >

            <h1 style={{ color: "white", textAlign: 'center' }}>
                Covid Detection   ?
            </h1>

            <Grid container spacing={2} justify="center" style={{ marginTop: "1%" }}>
                <Grid item xs={2}  >
                    <Box
                        display="flex"
                        height={80}
                        bgcolor={covidp}
                        alignItems="center"
                        justifyContent="center"
                        borderRadius={20}
                    >
                        <h3 style={{ color: "white", textAlign: 'center' }}>
                            {props.currentdiesasetype}
                        </h3>

                    </Box>
                </Grid>


            </Grid>

            {

                props.uri !== "" ? (

                    <Grid container spacing={2} justify="center" style={{ marginTop: "1%" }}>

                        <Grid item xs={3}  >

                            <Box
                                display="flex"
                                alignItems="center"
                                justifyContent="center"
                                borderRadius={20}
                            >
                                <h3 style={{ color: "white", textAlign: 'center' }}>Input Image</h3>


                            </Box>

                            <Box
                                display="flex"
                                alignItems="center"
                                justifyContent="center"
                                borderRadius={20}
                            >
                                <img style={{ width: 300, height: 300 }} src={props.uri} />


                            </Box>
                        </Grid>

                        


                    </Grid>

                ) : (
                    null
                )

            }

        </div>
    );




}
export default windowSize(CenteredGrid);