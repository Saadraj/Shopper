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
    Toolbar,Theme
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import Link from "next/link";
import React, { useContext } from "react";
import { StoreContext } from "../../pages/_app";
import { subNav } from "./navItem";

const useStyles = makeStyles((theme:Theme) =>
    createStyles({
        root: {
            marginTop: theme.spacing(9),
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
    const { store } = useContext(StoreContext);
    const totalCart = store?.cart?.length;
    return (
        <Paper className={classes.root}>
            <AppBar position="static" color="default" component={Paper}>
                <Toolbar>
                    <Container maxWidth="xl">
                        <Grid container justify="space-between" alignItems="center">
                            <Grid item style={{display:'flex'}}>
                                {subNav.map((item) => (
                                    <div key={item.title} className={classes.grid}>
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
