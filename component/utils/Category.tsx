import {
    Box,
    Card,
    CardActionArea,
    CardActions,
    CardContent,
    CardMedia,
    createStyles,
    Divider,
    Grid,
    IconButton,
    makeStyles,
    Theme,
    Tooltip,
    Typography
} from "@material-ui/core";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import VisibilityIcon from "@material-ui/icons/Visibility";
import Link from "next/link";
import React from "react";
import { itemInterface } from "./Interfaces";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            paddingTop: theme.spacing(11),
            width: "100%"
        },
        capital: {
            textTransform: "capitalize"
        },
        card: {
            height: "100%"
        },
        button: {
            fontSize: 6
        },
        green: {
            color: theme.palette.success.main
        },
        red: {
            color: theme.palette.error.main
        },
        yellow: {
            color: theme.palette.warning.main
        }
    })
);

export default function Category({ state, name }) {
    const classes = useStyles();

    return (
        <Box className={classes.root}>
            <Typography variant="h2" align="center" gutterBottom className={classes.capital}>
                {name}
            </Typography>
            <Divider />
            <Grid container spacing={4} className={classes.root}>
                {state?.map((item: itemInterface) => (
                    <Grid item xs={12} sm={6} md={3}>
                        <Link href="/">
                            <Card className={classes.card}>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        alt="Contemplative Reptile"
                                        height="250"
                                        image={item.src}
                                        title={item.product}
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
                                        <Typography
                                            variant="body2"
                                            color="textSecondary"
                                            component="p"
                                        >
                                            Lizards are a widespread group of squamate reptiles,
                                            with over 6,000 species, ranging across all continents
                                            except Antarctica
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                                <CardActions>
                                    <Grid container justify="space-evenly">
                                        <Grid item>
                                            <Tooltip title="Buy Now">
                                                <IconButton className={classes.red}>
                                                    <AddCircleOutlineIcon />
                                                </IconButton>
                                            </Tooltip>
                                        </Grid>
                                        <Grid item>
                                            <Tooltip title="View Details">
                                                <IconButton className={classes.yellow}>
                                                    <VisibilityIcon />
                                                </IconButton>
                                            </Tooltip>
                                        </Grid>
                                        <Grid item>
                                            <Tooltip title="Add to Cart">
                                                <IconButton className={classes.green}>
                                                    <ShoppingCartIcon />
                                                </IconButton>
                                            </Tooltip>
                                        </Grid>
                                    </Grid>
                                </CardActions>
                            </Card>
                        </Link>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}
