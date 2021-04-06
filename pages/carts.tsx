import {
    Box,
    Button,
    Card,
    CardActions,
    CardContent,
    Container,
    createStyles,
    Divider,
    Grid,
    makeStyles,
    Slide,
    Snackbar,
    Theme,
    Typography
} from "@material-ui/core";
import RemoveCircleOutlineIcon from '@material-ui/icons/RemoveCircleOutline';
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import VisibilityIcon from "@material-ui/icons/Visibility";
import Alert from "@material-ui/lab/Alert";
import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useContext, useState } from "react";
import useSWR from "swr";
import { itemInterface } from "../component/utils/Interfaces";
import { CART_DECREMENT, VIEW_DETAILS } from "../redux/actionTypes";
import { StoreContext } from "./_app";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            paddingTop: theme.spacing(11),
            paddingBottom: theme.spacing(11),
            width: "100%",
            backgroundColor: 'rgba(25, 118, 210,0.4)',
        },
        green: {
            color: theme.palette.success.main,
            width: 200
        },
        greenButton: {
            width: 200
        },
        red: {
            color: theme.palette.error.main,
            width: 200
        },
        yellow: {
            color: theme.palette.warning.main,
            width: 200
        }
    })
);

export default function Carts() {
    const classes = useStyles();
    const route = useRouter();
    const [open, setOpen] = useState(false);
    const { store,dispatch } = useContext(StoreContext);

    const goToDetailsPage = (item: itemInterface) => {
        dispatch({ type: VIEW_DETAILS, payload: item });
        const url = Math.round(Math.random() * 10000);
        route.push(`/product/details/${url}`);
    };
    
    const addToCart = (item: itemInterface) => {
        dispatch({ type: CART_DECREMENT, payload: item });
    };
    
    const state = store.cart;
    return (
        <Box className={classes.root}>
            <Container maxWidth="lg" >
                <Typography variant="h2" align="center" gutterBottom >
                    Carts
                </Typography>
                <Divider />
                <Grid container spacing={2}>
                    {state?.map((item: itemInterface) => (
                        <Grid item xs={12} key={item.src}>
                            <Card>
                                <Grid container>
                                    <Grid
                                        item
                                        container
                                        xs={9}
                                    >
                                        <Grid item xs={3}>
                                            <Image
                                                src={item.src}
                                                alt={item.product}
                                                height="200%"
                                                width="200%"
                                            />
                                        </Grid>
                                        <Grid item xs={9}>
                                            <CardContent>
                                                <Typography gutterBottom variant="h6">
                                                    {item.product}
                                                </Typography>
                                                <Grid container justify="space-between">
                                                    <Grid item>
                                                        <Typography
                                                            gutterBottom
                                                            className={classes.green}
                                                        >
                                                            price ${item.price}
                                                        </Typography>
                                                    </Grid>
                                                    {item.discount && (
                                                        <Grid item>
                                                            <Typography gutterBottom color="error">
                                                                {item.discount}% off
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
                                                    Lorem ipsum dolor sit, amet consectetur
                                                    adipisicing elit. Aliquid non similique laborum
                                                    iure reprehenderit, asperiores voluptas quae
                                                    cumque animi, autem minus, doloremque quis ipsam
                                                    aliquam cum dolores accusamus incidunt. Eveniet
                                                    laudantium incidunt corrupti, illo molestiae
                                                    doloremquer nobis dignissimos omnis eos iste
                                                    dolore?
                                                </Typography>
                                            </CardContent>
                                        </Grid>
                                    </Grid>
                                    <Grid item
                                        container
                                        direction="column"
                                        justify="center"
                                        alignContent='center'
                                        alignItems='center'
                                        spacing={1} xs={3}>
                                        <CardActions>
                                            <Grid
                                                container
                                                direction="column"
                                                spacing={1}
                                            >
                                                <Grid item >
                                                    <Button
                                                        variant='contained'
                                                        color="secondary"
                                                        className={classes.greenButton}
                                                        onClick={() => {
                                                            setOpen(true);
                                                        }}
                                                        startIcon={<ShoppingCartIcon />}
                                                    >
                                                        Order Now
                                                    </Button>
                                                </Grid>
                                                <Grid item>
                                                    <Button
                                                        variant='contained'
                                                        color='primary'
                                                        className={classes.yellow}
                                                        onClick={() => {
                                                            goToDetailsPage(item);
                                                        }}
                                                        startIcon={<VisibilityIcon />}
                                                    >
                                                        View Details
                                                    </Button>
                                                </Grid>
                                                <Grid item>
                                                    <Button
                                                        variant='contained'
                                                        className={classes.greenButton}
                                                        color='secondary'
                                                        onClick={() => {
                                                            addToCart(item);
                                                        }}
                                                        startIcon={<RemoveCircleOutlineIcon />}
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
            </Container>
            <Snackbar
                anchorOrigin={{ vertical: "top", horizontal: "right" }}
                open={open}
                onClose={() => setOpen(false)}
                autoHideDuration={2500}
                TransitionComponent={Slide}
            >
                <Alert severity="error" variant="filled">
                    Sorry! This Option Currently Unavailable.
                </Alert>
            </Snackbar>
        </Box>
    );
}
