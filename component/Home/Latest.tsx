import {
    Box,
    ButtonBase,
    Container,
    createStyles,
    Grid,
    Grow,
    IconButton,
    makeStyles,
    Paper,
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
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useContext, useState } from "react";
import { StoreContext } from "../../pages/_app";
import { CART_INCREMENT, VIEW_DETAILS } from "../../redux/actionTypes/index";
import { itemInterface } from "../utils/Interfaces";

const useStyles = makeStyles(
    (theme: Theme) =>
        createStyles({
            container: {
                paddingTop: theme.spacing(11),
                paddingBottom: theme.spacing(11),
            },
            paper: {
                paddingTop: theme.spacing(5),
                paddingBottom: theme.spacing(5),
            },
            subHeadingPadding: {
                paddingBottom: theme.spacing(5),
            },
            imageButton: {
                position: "absolute",
                display: "grid",
                placeItems: "center",
                height: "100%",
                width: "100%",
                transition: ".6s",
                "&:hover": {
                    backgroundColor: "rgba(0,0,0,0.7)",
                },
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
        }),
    { index: 8 }
);

export default function Latest({ latest }) {
    const [state, setState] = useState({ target: "", open: false });
    const [openSnackbar, setOpenSnackbar] = useState(false);
    const classes = useStyles(state.open);
    const route = useRouter();
    const { dispatch } = useContext(StoreContext);

    const goToDetailsPage = (item: itemInterface) => {
        dispatch({ type: VIEW_DETAILS, payload: item });
        const url = Math.round(Math.random() * 10000);
        route.push(`/product/details/${url}`);
    };

    const addToCart = (item: itemInterface) => {
        dispatch({ type: CART_INCREMENT, payload: item });
    };

    const onMouseOverEvent = (v: string) => {
        setState({ target: v, open: true });
    };

    const onMouseLeaveEvent = () => {
        setState({ target: "", open: false });
    };

    const { target, open } = state;

    return (
        <Box>
            <Container maxWidth="lg" className={classes.container}>
                <Paper className={classes.paper} elevation={0}>
                    <Typography variant="h3" align="center" gutterBottom>
                        Latest Products
                    </Typography>
                    <Container
                        maxWidth="sm"
                        className={classes.subHeadingPadding}
                    >
                        <Typography paragraph component="p">
                            Lorem, ipsum dolor sit amet consectetur adipisicing
                            elit. Soluta optio repellat quo veritatis
                            perferendis eius aut ducimus porro nihil dolores
                            quia, placeat obcaecati. Reprehenderit pariatur
                            deleniti atque, nisi quae rerum similique itaque
                            qui.
                        </Typography>
                    </Container>
                    <Container maxWidth="md">
                        <Grid container spacing={4} justify="space-around">
                            {latest?.map((item: itemInterface) => (
                                <Grid item key={item.src}>
                                    <Paper
                                        variant="outlined"
                                        onMouseOver={() =>
                                            onMouseOverEvent(item.product)
                                        }
                                        onMouseLeave={() => onMouseLeaveEvent()}
                                    >
                                        <ButtonBase
                                            focusRipple
                                            key={item.product}
                                        >
                                            <Image
                                                src={item.src}
                                                title={item.product}
                                                height={200}
                                                width={200}
                                            />
                                            <span
                                                className={classes.imageButton}
                                            >
                                                <Grow
                                                    in={
                                                        item.product ===
                                                            target && open
                                                    }
                                                >
                                                    <Grid
                                                        container
                                                        justify="space-evenly"
                                                    >
                                                        <Grid item>
                                                            <Tooltip title="Order Now">
                                                                <Box
                                                                    className={
                                                                        classes.red
                                                                    }
                                                                    onClick={() => {
                                                                        setOpenSnackbar(
                                                                            true
                                                                        );
                                                                    }}
                                                                >
                                                                    <ShoppingCartIcon />
                                                                </Box>
                                                            </Tooltip>
                                                        </Grid>
                                                        <Grid item>
                                                            <Tooltip title="View Details">
                                                                <Box
                                                                    className={
                                                                        classes.yellow
                                                                    }
                                                                    onClick={() => {
                                                                        goToDetailsPage(
                                                                            item
                                                                        );
                                                                    }}
                                                                >
                                                                    <VisibilityIcon />
                                                                </Box>
                                                            </Tooltip>
                                                        </Grid>
                                                        <Grid item>
                                                            <Tooltip title="Add to Cart">
                                                                <Box
                                                                    className={
                                                                        classes.green
                                                                    }
                                                                    onClick={() => {
                                                                        addToCart(
                                                                            item
                                                                        );
                                                                    }}
                                                                >
                                                                    <AddCircleOutlineIcon />
                                                                </Box>
                                                            </Tooltip>
                                                        </Grid>
                                                    </Grid>
                                                </Grow>
                                            </span>
                                        </ButtonBase>
                                    </Paper>
                                </Grid>
                            ))}
                        </Grid>
                    </Container>
                </Paper>
            </Container>
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
        </Box>
    );
}
