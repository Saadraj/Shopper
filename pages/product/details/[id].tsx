import {
    Container,
    createStyles,
    Divider,
    Grid,
    makeStyles,
    Paper,
    Slide,
    Snackbar,
    Theme,
    Typography
} from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";
import React, { useContext, useState } from "react";
import ReactImageMagnify from "react-image-magnify";
import { itemInterface } from "../../../component/utils/Interfaces";
import { CART_INCREMENT } from "../../../redux/actionTypes/index";
import { StoreContext } from "../../_app";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            paddingTop: theme.spacing(11),
            paddingBottom: theme.spacing(11)
        },
        padding: {
            paddingLeft: theme.spacing(5),
            paddingRight: theme.spacing(5),
            paddingTop: 0,
            paddingBottom: 0
        },
        button: {
            cursor: "pointer"
        }
    })
);

export default () => {
    const classes = useStyles();
    const { store, dispatch } = useContext(StoreContext);
    const [openSnackbar, setOpenSnackbar] = useState(false);

    const addToCart = (item: itemInterface) => {
        dispatch({ type: CART_INCREMENT, payload: item });
    };
    const { src, product, price, discount } = store?.view;
    return (
        <Container maxWidth="lg" className={classes.root}>
            <Paper>
                <Grid container spacing={4}>
                    <Grid item xs={6}>
                        <ReactImageMagnify
                            {...{
                                smallImage: {
                                    alt: `${product}`,
                                    isFluidWidth: true,
                                    src: `${src}`
                                },
                                largeImage: {
                                    src: `${src}`,
                                    width: 1800,
                                    height: 1200
                                }
                            }}
                        />
                    </Grid>
                    <Grid item container xs={6}>
                        <Grid
                            item
                            container
                            xs={12}
                            justify="space-between"
                            className={classes.padding}
                        >
                            <Grid item>
                                <Typography variant="h4">{product}</Typography>
                            </Grid>
                            <Grid item>
                                {discount && (
                                    <Typography variant="h6" color="error">
                                        {discount}% OFF
                                    </Typography>
                                )}
                            </Grid>
                        </Grid>
                        <Grid
                            item
                            container
                            xs={12}
                            justify="space-between"
                            className={classes.padding}
                        >
                            <Grid item xs={7}>
                                <Typography variant="h6" color="primary">
                                    ${price}
                                </Typography>
                            </Grid>
                            <Grid item xs={5} container justify="space-between">
                                <Grid item>
                                    <Typography
                                        color="primary"
                                        className={classes.button}
                                        onClick={() => {
                                            addToCart(store?.view);
                                        }}
                                    >
                                        Add TO Cart
                                    </Typography>
                                </Grid>
                                <Grid item>
                                    <Typography
                                        color="secondary"
                                        className={classes.button}
                                        onClick={() => {
                                            setOpenSnackbar(true);
                                        }}
                                    >
                                        Order Now
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography
                                variant="subtitle1"
                                color="textSecondary"
                                align="justify"
                                className={classes.padding}
                            >
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid
                                non similique laborum iure reprehenderit, asperiores voluptas quae
                                cumque animi, autem minus, doloremque quis ipsam aliquam cum dolores
                                accusamus incidunt. Eveniet laudantium incidunt corrupti, illo
                                molestiae doloremque asperiores ducimus. Reprehenderit similique
                                quibusdam dolor itaque enim. Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Dolores fuga eos voluptate impedit autem ipsum
                                soluta doloremque blanditiis voluptatum molestiae id ex rerum
                                repudiandae exercitationem nobis nesciunt, nisi corrupti asperiores
                                sint nam. Fugiat molestias, quibusdam excepturi nihil aspernatur
                                nobis dignissimos omnis eos iste dolore?
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Divider />
            </Paper>
            <Snackbar
                anchorOrigin={{ vertical: "top", horizontal: "right" }}
                open={openSnackbar}
                onClose={() => setOpenSnackbar(false)}
                autoHideDuration={2500}
                TransitionComponent={Slide}
            >
                <Alert severity="error" variant="filled">
                    Sorry! This Option Currently Unavailable.
                </Alert>
            </Snackbar>
        </Container>
    );
};
