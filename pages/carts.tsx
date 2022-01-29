import {
    Box,
    Button,
    Card,
    CardActions,
    CardContent,
    Container,
    createStyles,
    Grid,
    makeStyles,
    Slide,
    Snackbar,
    Theme,
    Typography,
} from "@material-ui/core";
import RemoveCircleOutlineIcon from "@material-ui/icons/RemoveCircleOutline";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import VisibilityIcon from "@material-ui/icons/Visibility";
import Alert from "@material-ui/lab/Alert";
import { getAuth } from "firebase/auth";
import { getDatabase, onValue, ref, remove } from "firebase/database";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { memo, useContext, useEffect, useState } from "react";
import { itemInterface } from "../component/utils/Interfaces";
import { VIEW_DETAILS } from "../redux/actionTypes";
import { StoreContext } from "./_app";

const useStyles = makeStyles(
    (theme: Theme) =>
        createStyles({
            root: {
                paddingTop: theme.spacing(11),
                paddingBottom: theme.spacing(11),
                width: "100%",
                backgroundColor: "rgba(25, 118, 210,0.4)",
            },
            green: {
                color: theme.palette.success.main,
                width: 200,
            },
            greenButton: {
                width: 200,
            },
            red: {
                color: theme.palette.error.main,
                width: 200,
            },
            yellow: {
                color: theme.palette.warning.main,
                width: 200,
            },
            card: {
                padding: theme.spacing(2),
            },
        }),
    { index: 17 }
);

function Carts() {
    const classes = useStyles();
    const { store, dispatch } = useContext(StoreContext);
    const route = useRouter();
    const [open, setOpen] = useState(false);
    const [message, setMessage] = useState("");
    const auth = getAuth();
    const [state, setState] = useState(0);

    useEffect(() => {
        auth?.currentUser?.uid &&
            onValue(
                ref(getDatabase(), `${auth.currentUser.uid}/carts`),
                (snapshot) => {
                    const data = snapshot.val();
                    setState(data);
                }
            );
    }, []);
    const goToDetailsPage = (item: itemInterface) => {
        dispatch({ type: VIEW_DETAILS, payload: item });
        const url = Math.round(Math.random() * 10000);
        route.push(`/product/details/${url}`);
    };

    const removeFromCart = async (itemId) => {
        try {
            await remove(
                ref(getDatabase(), `${auth.currentUser.uid}/carts/${itemId}`)
            );
            setOpen(true);
            setMessage("product is removed from the cart");
        } catch (error) {
            console.error(error);
        }
    };
    return (
        <Box className={classes.root}>
            <Container maxWidth="lg">
                <Typography variant="h2" align="center" gutterBottom>
                    Carts
                </Typography>
                {state && Object?.keys(state)?.length ? (
                    <Grid
                        container
                        spacing={2}
                        className={classes.root}
                        style={{ background: "transparent" }}
                    >
                        {Object?.keys(state)?.map((v) => (
                            <Grid item xs={12} key={state[v]?.src}>
                                <Card className={classes.card}>
                                    <Grid container>
                                        <Grid item container xs={12} md={9}>
                                            <Grid item xs={12} md={3}>
                                                <Image
                                                    src={`https://lh3.googleusercontent.com/d/${state[
                                                        v
                                                    ]?.src
                                                        ?.replace(
                                                            "https://drive.google.com/file/d/",
                                                            ""
                                                        )
                                                        .replace(
                                                            "/view?usp=sharing",
                                                            ""
                                                        )}?authuser=0`}
                                                    alt={state[v]?.product}
                                                    height="200%"
                                                    width="200%"
                                                />
                                            </Grid>
                                            <Grid item xs={12} md={9}>
                                                <CardContent>
                                                    <Typography
                                                        gutterBottom
                                                        variant="h6"
                                                    >
                                                        {state[v]?.product}
                                                    </Typography>
                                                    <Grid
                                                        container
                                                        justify="space-between"
                                                    >
                                                        <Grid item>
                                                            <Typography
                                                                gutterBottom
                                                                className={
                                                                    classes.green
                                                                }
                                                            >
                                                                price $
                                                                {
                                                                    state[v]
                                                                        ?.price
                                                                }
                                                            </Typography>
                                                        </Grid>
                                                        {state[v]?.discount && (
                                                            <Grid item>
                                                                <Typography
                                                                    gutterBottom
                                                                    color="error"
                                                                >
                                                                    {
                                                                        state[v]
                                                                            ?.discount
                                                                    }
                                                                    % off
                                                                </Typography>
                                                            </Grid>
                                                        )}
                                                    </Grid>
                                                    <Typography
                                                        variant="body2"
                                                        color="textSecondary"
                                                        component="p"
                                                        align="justify"
                                                    >
                                                        Lorem ipsum dolor sit,
                                                        amet consectetur
                                                        adipisicing elit.
                                                        Aliquid non similique
                                                        laborum iure
                                                        reprehenderit,
                                                        asperiores voluptas quae
                                                        cumque animi, autem
                                                        minus, doloremque quis
                                                        ipsam aliquam cum
                                                        dolores accusamus
                                                        incidunt. Eveniet
                                                        laudantium incidunt
                                                        corrupti, illo molestiae
                                                        doloremquer nobis
                                                        dignissimos omnis eos
                                                        iste dolore?
                                                    </Typography>
                                                </CardContent>
                                            </Grid>
                                        </Grid>
                                        <Grid
                                            item
                                            container
                                            direction="column"
                                            justify="center"
                                            alignContent="center"
                                            alignItems="center"
                                            spacing={1}
                                            xs={12}
                                            md={3}
                                        >
                                            <CardActions>
                                                <Grid
                                                    container
                                                    direction="column"
                                                    spacing={1}
                                                >
                                                    <Grid item>
                                                        <Button
                                                            variant="contained"
                                                            color="secondary"
                                                            className={
                                                                classes.greenButton
                                                            }
                                                            onClick={() => {
                                                                setOpen(true);
                                                                setMessage(
                                                                    "Sorry! This Option Currently Unavailable."
                                                                );
                                                            }}
                                                            startIcon={
                                                                <ShoppingCartIcon />
                                                            }
                                                        >
                                                            Order Now
                                                        </Button>
                                                    </Grid>
                                                    <Grid item>
                                                        <Button
                                                            variant="contained"
                                                            color="primary"
                                                            className={
                                                                classes.yellow
                                                            }
                                                            onClick={() => {
                                                                goToDetailsPage(
                                                                    state[v]
                                                                );
                                                            }}
                                                            startIcon={
                                                                <VisibilityIcon />
                                                            }
                                                        >
                                                            View Details
                                                        </Button>
                                                    </Grid>
                                                    <Grid item>
                                                        <Button
                                                            variant="contained"
                                                            className={
                                                                classes.greenButton
                                                            }
                                                            color="secondary"
                                                            onClick={() => {
                                                                removeFromCart(
                                                                    v
                                                                );
                                                            }}
                                                            startIcon={
                                                                <RemoveCircleOutlineIcon />
                                                            }
                                                        >
                                                            Remove
                                                        </Button>
                                                    </Grid>
                                                </Grid>
                                            </CardActions>
                                        </Grid>
                                    </Grid>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                ) : (
                    <Typography
                        variant="h5"
                        align="center"
                        gutterBottom
                        className={classes.root}
                    >
                        Carts is Empty...
                    </Typography>
                )}
            </Container>
            <Snackbar
                anchorOrigin={{ vertical: "top", horizontal: "right" }}
                open={open}
                onClose={() => setOpen(false)}
                autoHideDuration={2500}
                TransitionComponent={Slide}
            >
                <Alert severity="error" variant="filled">
                    {message}
                </Alert>
            </Snackbar>
        </Box>
    );
}
export default memo(Carts);
