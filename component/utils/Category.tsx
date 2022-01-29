import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
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
    Typography,
} from "@material-ui/core";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import VisibilityIcon from "@material-ui/icons/Visibility";
import Alert from "@material-ui/lab/Alert";
import { getAuth } from "firebase/auth";
import { getDatabase, push, ref } from "firebase/database";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useContext, useState } from "react";
import { StoreContext } from "../../pages/_app";
import { VIEW_DETAILS } from "../../redux/actionTypes";
import { itemInterface } from "./Interfaces";

const useStyles = makeStyles(
    (theme: Theme) =>
        createStyles({
            root: {
                paddingTop: theme.spacing(5),
                minHeight: "100vh",
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
            loader: {
                backgroundRepeat: "no-repeat",
                backgroundAttachment: "cover",
                backgroundSize: "100% 100%",
            },
            desc: {
                height: "4.4rem",
                overflow: "hidden",
            },
            center: {
                height: "100vh",
                width: "100vw",
                display: "grid",
                placeItems: "center",
            },
            image: {
                objectFit: "cover",
            },
        }),
    { index: 12 }
);

function Category({ state, name }) {
    const classes = useStyles();
    const route = useRouter();
    const [open, setOpen] = useState(false);
    const [message, setMessage] = useState("");
    const { dispatch } = useContext(StoreContext);
    const auth = getAuth();

    const goToDetailsPage = (item: itemInterface) => {
        dispatch({ type: VIEW_DETAILS, payload: item });
        const url = Math.round(Math.random() * 10000);
        route.push(`/product/details/${url}`);
    };

    const addToCart = async (item: itemInterface) => {
        try {
            await push(
                ref(getDatabase(), `${auth.currentUser.uid}/carts`),
                item
            );
            setOpen(true);
            setMessage("product is added to the cart");
        } catch (error) {
            setOpen(true);
            setMessage("please login to add products in carts");
        }
    };
    return (
        <Box className={classes.root}>
            <Typography
                variant="h2"
                align="center"
                gutterBottom
                className={classes.capital}
            >
                {name}
            </Typography>
            <Divider />
            <Grid container spacing={2} className={classes.root}>
                {state.length ? (
                    state?.map(({ fields }: { fields: itemInterface }) => (
                        <Grid item xs={12} sm={6} md={3} key={fields?.product}>
                            <Card className={classes.card} variant="outlined">
                                <CardActionArea
                                    onClick={() => {
                                        goToDetailsPage(fields);
                                    }}
                                >
                                    <Image
                                        className={classes.image}
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
                                        height={300}
                                        width={300}
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h6">
                                            {fields?.title}
                                        </Typography>
                                        <Grid container justify="space-between">
                                            <Grid item>
                                                <Typography
                                                    gutterBottom
                                                    className={classes.green}
                                                >
                                                    price ${fields?.price}
                                                </Typography>
                                            </Grid>
                                            {fields?.discount && (
                                                <Grid item>
                                                    <Typography
                                                        gutterBottom
                                                        color="error"
                                                    >
                                                        {fields?.discount}% off
                                                    </Typography>
                                                </Grid>
                                            )}
                                        </Grid>
                                        <Typography
                                            variant="body2"
                                            color="textSecondary"
                                            className={classes.desc}
                                        >
                                            {documentToReactComponents(
                                                fields.description
                                            )}
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
                                                        setMessage(
                                                            "Sorry! This Option Currently Unavailable"
                                                        );
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
                                                        goToDetailsPage(fields);
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
                                                        addToCart(fields);
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
                    ))
                ) : (
                    <Box className={classes.center}>No Data Found</Box>
                )}
            </Grid>
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
export default Category;
