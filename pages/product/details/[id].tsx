import {
    Box,
    Button,
    Container,
    createStyles,
    Divider,
    Grid,
    makeStyles,
    Paper,
    Slide,
    Snackbar,
    Theme,
    Typography,
} from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";
import React, { useContext, useState } from "react";
import ReactImageMagnify from "react-image-magnify";
import { itemInterface } from "../../../component/utils/Interfaces";
import { CART_INCREMENT } from "../../../redux/actionTypes/index";
import { StoreContext } from "../../_app";

const useStyles = makeStyles(
    (theme: Theme) =>
        createStyles({
            root: {
                paddingTop: theme.spacing(11),
                paddingBottom: theme.spacing(11),
            },
            padding: {
                paddingLeft: theme.spacing(5),
                paddingRight: theme.spacing(5),
                paddingTop: 0,
                paddingBottom: 0,
            },
            top: {
                zIndex: 111,
            },
        }),
    { index: 16 }
);

const Details = () => {
    const classes = useStyles();
    const { store, dispatch } = useContext(StoreContext);
    const [openSnackbar, setOpenSnackbar] = useState(false);

    const addToCart = (item: itemInterface) => {
        dispatch({ type: CART_INCREMENT, payload: item });
    };
    const { src, product, price, discount } = store?.view;
    return (
        <Container maxWidth="lg" className={classes.root}>
            <Box component={Paper} p={5} style={{ height: "100%" }}>
                <Grid container spacing={4}>
                    <Grid item xs={12} md={6}>
                        <ReactImageMagnify
                            className={classes.top}
                            {...{
                                smallImage: {
                                    alt: `${product}`,
                                    isFluidWidth: true,
                                    src: `${src}`,
                                },
                                largeImage: {
                                    src: `${src}`,
                                    width: 1800,
                                    height: 1200,
                                },
                            }}
                        />
                    </Grid>
                    <Grid item container xs={12} md={6}>
                        <Grid item container xs={12} justify="space-between">
                            <Grid item>
                                <Typography variant="h4">{product}</Typography>
                            </Grid>
                            {discount && (
                                <Grid item>
                                    <Typography variant="h6" color="error" style={{transform:'rotateZ(-10deg)',backgroundColor:'purple'}}>
                                        {discount}% OFF
                                    </Typography>
                                </Grid>
                            )}
                        </Grid>
                        <Grid item container xs={12} justify="space-between">
                            <Grid item xs={5} >
                                <Typography variant="h6" color="primary">
                                    ${price}
                                </Typography>
                            </Grid>
                            <Grid
                                item
                                xs={12}
                                md={7}
                                container
                                justify="space-around"
                                spacing={2}
                            >
                                <Grid item>
                                    <Button
                                        color="primary"
                                        variant="contained"
                                        size="small"
                                        onClick={() => {
                                            addToCart(store?.view);
                                        }}
                                    >
                                        Add TO Cart
                                    </Button>
                                </Grid>
                                <Grid item>
                                    <Button
                                        color="secondary"
                                        variant="contained"
                                        size="small"
                                        onClick={() => {
                                            setOpenSnackbar(true);
                                        }}
                                    >
                                        Order Now
                                    </Button>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item>
                            <Typography variant="subtitle1" color="textSecondary" align="justify">
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
            </Box>
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

export default React.memo(Details);
