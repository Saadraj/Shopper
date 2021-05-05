import {
    Box,
    Card,
    CardActionArea,
    CardActions,
    CardContent,
    createStyles,
    Divider,
    Grid,
    IconButton,
    makeStyles,
    Slide,
    Snackbar,
    Theme,
    Tooltip,
    Typography
} from "@material-ui/core";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import VisibilityIcon from "@material-ui/icons/Visibility";
import Alert from "@material-ui/lab/Alert";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useContext, useState } from "react";
import { StoreContext } from "../../pages/_app";
import { CART_INCREMENT, VIEW_DETAILS } from "../../redux/actionTypes";
import { itemInterface } from "./Interfaces";

const useStyles = makeStyles(
    (theme: Theme) =>
        createStyles({
            root: {
                paddingTop: theme.spacing(5),
            minHeight:'100vh'

            },
            capital: {
                textTransform: "capitalize",
            },
            card: {
                height: "100%",
            },
            button: {
                fontSize: 6,
            },
            green: {
                color: theme.palette.success.main,
            },
            red: {
                color: theme.palette.error.main,
            },
            yellow: {
                color: theme.palette.warning.main,
            },
            loader:{
                backgroundRepeat: "no-repeat",
                backgroundAttachment: "cover",
                backgroundSize: "100% 100%",
            }
        }),
    { index: 12 }
);

export default function Category({ state, name }) {
    const classes = useStyles();
    const route = useRouter();
    const [open, setOpen] = useState(false);
    const { dispatch } = useContext(StoreContext);
    const goToDetailsPage = (item: itemInterface) => {
        dispatch({ type: VIEW_DETAILS, payload: item });
        const url = Math.round(Math.random() * 10000);
        route.push(`/product/details/${url}`);
    };
    const addToCart = (item: itemInterface) => {
        dispatch({ type: CART_INCREMENT, payload: item });
    };
    return (
        <Box className={classes.root}>
            <Typography variant="h2" align="center" gutterBottom className={classes.capital}>
                {name}
            </Typography>
            <Divider />
            <Grid container spacing={2} className={classes.root}>
                {state?.map((item: itemInterface) => (
                    <Grid item xs={12} sm={6} md={3} key= {item.product}>
                        <Card className={classes.card} variant="outlined">
                            <CardActionArea
                                onClick={() => {
                                    goToDetailsPage(item);
                                }}
                            >
                                <Image
                                    height="200%"
                                    width="300%"
                                    src={item.src}
                                    title={item.product}
                                    alt={item.product}
                                    className={classes.loader}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h6">
                                        {item.product}
                                    </Typography>
                                    <Grid container justify="space-between">
                                        <Grid item>
                                            <Typography gutterBottom className={classes.green}>
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
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        Lizards are a widespread group of squamate reptiles, with
                                        over 6,000 species, ranging across all continents except
                                        Antarctica
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Grid container justify="space-evenly">
                                    <Grid item>
                                        <Tooltip title="Buy Now">
                                            <IconButton
                                                className={classes.red}
                                                onClick={() => {
                                                    setOpen(true);
                                                }}
                                            >
                                                <ShoppingCartIcon />
                                            </IconButton>
                                        </Tooltip>
                                    </Grid>
                                    <Grid item>
                                        <Tooltip title="View Details">
                                            <IconButton
                                                className={classes.yellow}
                                                onClick={() => {
                                                    goToDetailsPage(item);
                                                }}
                                            >
                                                <VisibilityIcon />
                                            </IconButton>
                                        </Tooltip>
                                    </Grid>
                                    <Grid item>
                                        <Tooltip title="Add to Cart">
                                            <IconButton
                                                className={classes.green}
                                                onClick={() => {
                                                    addToCart(item);
                                                }}
                                            >
                                                <AddCircleOutlineIcon />
                                            </IconButton>
                                        </Tooltip>
                                    </Grid>
                                </Grid>
                            </CardActions>
                        </Card>
                    </Grid>
                ))}
            </Grid>
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
