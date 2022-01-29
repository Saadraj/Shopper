import {
    Box,
    createStyles,
    Grid,
    makeStyles,
    Typography,
} from "@material-ui/core";
import CircularProgress from "@material-ui/core/CircularProgress";
import React from "react";

const useStyles = makeStyles(
    () =>
        createStyles({
            root: {
                height: "100vh",
            },
        }),
    { index: 13 }
);

function Loading() {
    const classes = useStyles();

    return (
        <Box display="flex" alignItems="center">
            <Box width="100%" mr={1}>
                <Grid
                    container
                    justify="center"
                    alignItems="center"
                    className={classes.root}
                    spacing={4}
                >
                    <Grid item>
                        <CircularProgress color="secondary" />
                    </Grid>
                    <Typography variant="h4">Loading...</Typography>
                </Grid>
            </Box>
        </Box>
    );
}

export default Loading;
