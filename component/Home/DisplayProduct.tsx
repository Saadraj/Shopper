import {
    Box,
    createStyles,
    makeStyles,
    Paper,
    Typography,
} from "@material-ui/core";
import Image from "next/image";
import React, { memo } from "react";
import Carousel from "react-material-ui-carousel";
import { itemInterface } from "../utils/Interfaces";

const useStyles = makeStyles(
    () =>
        createStyles({
            overlay: {
                backgroundColor: "rgba(0,0,0,0.7)",
                color: "#fefefe",
                position: "absolute",
                zIndex: 1,
                display: "grid",
                placeItems: "center",
                height: "100%",
                width: "100%",
            },
            container: {
                display: "grid",
                placeItems: "center",
                objectFit: "cover",
                objectPosition: "center",
            },
            text: {
                display: "grid",
                placeItems: "center",
                height: "20%",
                width: "100%",
            },
            background: {
                backgroundColor: "rgba(255,255,255,0.3)",
            },
            relative: {
                height: "80vh",
                width: "100vw",
                position: "relative",
            },
        }),
    { index: 6 }
);
function DisplayProduct({ items }) {
    const classes = useStyles();

    return (
        <Box className={classes.background}>
            <Carousel
                animation="slide"
                indicators={false}
                timeout={1000}
                navButtonsAlwaysInvisible
            >
                {items?.map(({ fields }: { fields: itemInterface }) => (
                    <Paper key={fields.product}>
                        <Paper className={classes.overlay}>
                            <div className={classes.text}>
                                <Typography variant="h2" paragraph>
                                    {fields.title}
                                </Typography>
                                <Typography variant="h5" paragraph>
                                    Price - {fields.price} $
                                </Typography>
                                {fields.discount && (
                                    <Typography variant="h3" color="error">
                                        {fields.discount}% Discount
                                    </Typography>
                                )}
                            </div>
                        </Paper>
                        <div className={classes.relative}>
                            <Image
                                className={classes.container}
                                src={`https://lh3.googleusercontent.com/d/${fields?.src
                                    .replace(
                                        "https://drive.google.com/file/d/",
                                        ""
                                    )
                                    .replace(
                                        "/view?usp=sharing",
                                        ""
                                    )}?authuser=0`}
                                alt={fields?.product}
                                layout="fill"
                            />
                        </div>
                    </Paper>
                ))}
            </Carousel>
        </Box>
    );
}
export default memo(DisplayProduct);
