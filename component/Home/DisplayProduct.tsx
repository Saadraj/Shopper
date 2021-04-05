import { Box, createStyles, makeStyles, Paper, Typography } from "@material-ui/core";
import React from "react";
import Carousel from "react-material-ui-carousel";
import { itemInterface } from "../utils/Interfaces";

const useStyles = makeStyles(() =>
    createStyles({
        overlay: {
            height: "100%",
            width: "100%",
            backgroundColor: "rgba(0,0,0,0.5)",
            color: "white",
            position: "absolute",
            zIndex: 1,
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)"
        },
        container: {
            position: "relative",
            textAlign: "center",
            height: "90vh",
            width: "100%"
        },
        text: {
            textAlign: "center",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)"
        },
        background: {
            backgroundColor: "rgba(255,255,255,0.3)"
        }
    })
);
export default function DisplayProduct({ items }) {
    const classes = useStyles();

    return (
        <Box className={classes.background}>
            <Carousel animation="slide" indicators={false} timeout={1000} navButtonsAlwaysInvisible>
                {items?.map((item: itemInterface) => (
                    <Paper key={item.product}>
                        <Paper className={classes.overlay}>
                            <div className={classes.text}>
                                <Typography variant="h2" paragraph>
                                    {item.product}
                                </Typography>
                                <Typography variant="h5" paragraph>
                                    Price - {item.price} $
                                </Typography>
                                {item.discount && (
                                    <Typography variant="h3" color="error">
                                        {item.discount}% Discount
                                    </Typography>
                                )}
                            </div>
                        </Paper>
                        <img
                            className={classes.container}
                            src={item.src}
                            alt={item.product}
                            height="100%"
                            width="100%"
                        />
                    </Paper>
                ))}
            </Carousel>
        </Box>
    );
}
