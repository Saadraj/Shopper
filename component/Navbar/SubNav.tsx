import {
    AppBar,
    Badge,
    Button,
    Container,
    createStyles,
    Grid,
    IconButton,
    makeStyles,
    Paper,
    TextField,
    Theme,
    Typography,
    Toolbar,
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import Link from "next/link";
import React, { useContext } from "react";
import { StoreContext } from "../../pages/_app";
import { subNav } from "./navItem";

const useStyles = makeStyles(
    (theme: Theme) =>
        createStyles({
            root: {
                marginTop: theme.spacing(9),
                zIndex: -1,
            },
            grid: {
                border: "1px solid #333",
                borderLeft: 0,
                cursor:'pointer',
                textTransform:'uppercase',
                [theme.breakpoints.up("sm")]: {
                    fontSize: "1rem",
                    padding: "10px",
                },
                [theme.breakpoints.down("sm")]: {
                    fontSize: ".5rem",
                    padding: "5px",
                },
                "&:hover": {
                    transition: "0.6s",
                    color: "green",
                },
                "&:first-child": {
                    borderLeft: "1px solid #333",
                },
            },
            form: {
                padding: "0 12px",
                backgroundColor: "rgba(0,0,0,0)",
            },
            
        }),
    { index: 11 }
);
export default function SubNav() {
    const classes = useStyles();
    const { store } = useContext(StoreContext);
    const totalCart = store?.cart?.length;
    return (
        <Paper className={classes.root}>
            <AppBar position="static" color="default" component={Paper}>
                <Toolbar>
                    <Container maxWidth="xl">
                        <Grid container justify="space-between" alignItems="center">
                            <Grid item style={{ display: "flex" }}>
                                {subNav.map((item) => (
                                    <div key={item.title} className={classes.grid}>
                                        <Link href={`/${item.apiName}`}>
                                            {item.title === "Carts" ? (
                                                <Badge
                                                    badgeContent={totalCart || null}
                                                    color="primary"
                                                >
                                                    <Typography
                                                    component='span'
                                                    >
                                                        {item.title}
                                                    </Typography>
                                                </Badge>
                                            ) : (
                                                <Typography
                                                component='span'
                                                >
                                                    {item.title}
                                                </Typography>
                                            )}
                                        </Link>
                                    </div>
                                ))}
                            </Grid>
                            <Grid item>
                                <TextField id="standard-basic" label="Search for Products" />
                                <IconButton type="submit" aria-label="search">
                                    <SearchIcon />
                                </IconButton>
                            </Grid>
                        </Grid>
                    </Container>
                </Toolbar>
            </AppBar>
        </Paper>
    );
}
