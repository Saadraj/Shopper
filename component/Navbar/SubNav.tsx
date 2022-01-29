import {
    AppBar,
    Badge,
    Container,
    createStyles,
    Grid,
    IconButton,
    makeStyles,
    Paper,
    TextField,
    Theme,
    Toolbar,
    Typography,
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import { getAuth, signOut } from "firebase/auth";
import { getDatabase, onValue, ref } from "firebase/database";
import Link from "next/link";
import Router from "next/router";
import React, { useEffect, useState } from "react";
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
                // borderLeft: 0,
                cursor: "pointer",
                textTransform: "uppercase",
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
                "&:last-child": {
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
function SubNav() {
    const classes = useStyles();
    const auth = getAuth();
    const [state, setState] = useState(0);
    const [search, setSearch] = useState("");
    useEffect(() => {
        auth?.currentUser?.uid &&
            onValue(
                ref(getDatabase(), `${auth.currentUser.uid}/carts`),
                (snapshot) => {
                    const data = snapshot.val();
                    data && setState(data);
                }
            );
    }, [auth?.currentUser?.uid]);
    return (
        <Paper className={classes.root}>
            <AppBar position="static" color="default" component={Paper}>
                <Toolbar>
                    <Container maxWidth="xl">
                        <Grid
                            container
                            justify="space-between"
                            alignItems="center"
                        >
                            <Grid item style={{ display: "flex" }}>
                                {subNav.map((item) => (
                                    <div
                                        key={item.title}
                                        className={classes.grid}
                                    >
                                        <Link href={`/${item.apiName}`}>
                                            {item.title === "Carts" ? (
                                                <Badge
                                                    badgeContent={
                                                        Object?.keys(state)
                                                            ?.length || null
                                                    }
                                                    color="primary"
                                                >
                                                    <Typography component="span">
                                                        {item.title}
                                                    </Typography>
                                                </Badge>
                                            ) : (
                                                <Typography component="span">
                                                    {item.title}
                                                </Typography>
                                            )}
                                        </Link>
                                    </div>
                                ))}
                                <div className={classes.grid}>
                                    {auth?.currentUser?.email ? (
                                        <Link href={`/`}>
                                            <Typography
                                                component="span"
                                                onClick={() => signOut(auth)}
                                            >
                                                logout
                                            </Typography>
                                        </Link>
                                    ) : (
                                        <Link href={`/login`}>
                                            <Typography component="span">
                                                login
                                            </Typography>
                                        </Link>
                                    )}
                                </div>
                            </Grid>
                            <Grid item>
                                <TextField
                                    id="standard-basic"
                                    label="Search for Products"
                                    onChange={(e) => setSearch(e.target.value)}
                                />
                                <IconButton
                                    type="submit"
                                    aria-label="search"
                                    onClick={() => {
                                        Router.push(`/search/${search}`);
                                    }}
                                >
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
export default SubNav;
