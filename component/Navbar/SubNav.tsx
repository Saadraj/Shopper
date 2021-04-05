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
    Toolbar
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import Link from "next/link";
import React from "react";
import { subNav } from "./navItem";

const useStyles = makeStyles(() =>
    createStyles({
        root: {
            marginTop: 60,
            zIndex: -1
        },
        grid: {
            border: "1px solid #333",
            borderLeft: 0,
            padding: "0px 10px",
            "&:hover": {
                transition: "0.6s",
                color: "green"
            },
            "&:first-child": {
                borderLeft: "1px solid #333"
            }
        },
        form: {
            padding: "0 12px",
            backgroundColor: "rgba(0,0,0,0)"
        }
    })
);
export default function SubNav() {
    const classes = useStyles();
    const { data } = useSWR("/api/carts", axios);
    const totalCart = data?.data?.totalCarts;
    return (
        <Paper className={classes.root}>
            <AppBar position="static" color="default" component={Paper}>
                <Toolbar>
                    <Container maxWidth="xl">
                        <Grid container justify="space-between" alignItems="center">
                            <Grid item container xs={4}>
                                {subNav.map((item) => (
                                    <Grid item key={item.title} className={classes.grid}>
                                        <Link href={`/${item.apiName}`}>
                                            {item.title === "Carts" ? (
                                                <Badge
                                                    badgeContent={totalCart || null}
                                                    color="primary"
                                                >
                                                    <Button
                                                        color="inherit"
                                                        variant="text"
                                                        disableRipple
                                                    >
                                                        {item.title}
                                                    </Button>
                                                </Badge>
                                            ) : (
                                                <Button
                                                    color="inherit"
                                                    variant="text"
                                                    disableRipple
                                                >
                                                    {item.title}
                                                </Button>
                                            )}
                                        </Link>
                                    </Grid>
                                ))}
                            </Grid>
                            <Grid xs={6} />
                            <Grid xs={2} container justify="flex-end">
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
