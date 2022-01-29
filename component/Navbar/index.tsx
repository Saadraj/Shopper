import {
    AppBar,
    Box,
    Button,
    Collapse,
    Container,
    createStyles,
    Grid,
    IconButton,
    makeStyles,
    MenuItem,
    MenuList,
    Paper,
    Popover,
    Theme,
    Toolbar,
    Typography,
} from "@material-ui/core";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import MenuIcon from "@material-ui/icons/Menu";
import Image from "next/image";
import Link from "next/link";
import React, { memo, useState } from "react";
import { menu } from "./navItem";

const useStyles = makeStyles(
    (theme: Theme) =>
        createStyles({
            root: {
                zIndex: 1111,
                width: "100%",
            },
            tab: {
                color: theme.palette.grey[50],
                [theme.breakpoints.down("sm")]: {
                    display: "block",
                    width: "100%",
                    textAlign: "left",
                },
            },
            outline: {
                outline: 0,
            },
            collapse: {
                color: "#f7f7f7",
                [theme.breakpoints.up("sm")]: {
                    display: "none",
                },
                [theme.breakpoints.down("sm")]: {
                    display: "block",
                },
            },
            large: {
                [theme.breakpoints.up("sm")]: {
                    display: "inline",
                },
                [theme.breakpoints.down("sm")]: {
                    display: "none",
                },
            },
            small: {
                [theme.breakpoints.up("sm")]: {
                    display: "none",
                },
                [theme.breakpoints.down("sm")]: {
                    display: "block",
                },
            },
        }),
    { index: 10 }
);
function Navbar() {
    const classes = useStyles();
    const [list, setList] = useState([]);
    const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
    const [checked, setChecked] = useState(false);
    const handleOpen = (event, newList) => {
        event.stopPropagation();
        setAnchorEl(event.currentTarget);
        newList?.list?.length > 0 ? setList(newList) : setList(null);
    };
    const handleClose = () => {
        setAnchorEl(null);
        setChecked(false);
    };

    return (
        <Box className={classes.root}>
            <AppBar position="fixed" color="primary" component={Paper}>
                <Toolbar>
                    <Container maxWidth="xl">
                        <Grid
                            container
                            justify="space-between"
                            alignItems="center"
                            alignContent="center"
                        >
                            <Grid
                                item
                                xs={12}
                                md={1}
                                container
                                justify="space-between"
                                alignItems="center"
                                alignContent="center"
                            >
                                <Link href="/">
                                    <a>
                                        <Image
                                            src="/img/logo.png"
                                            width="100%"
                                            height="20px"
                                        />
                                    </a>
                                </Link>
                                <IconButton
                                    className={classes.collapse}
                                    onClick={() => {
                                        setChecked((p) => !p);
                                    }}
                                >
                                    <MenuIcon />
                                </IconButton>
                            </Grid>
                            {
                                <Grid item className={classes.large}>
                                    {menu.map((item) =>
                                        item?.list?.length ? (
                                            <Button
                                                key={item.apiName}
                                                className={classes.tab}
                                                onClick={(e) =>
                                                    handleOpen(e, item)
                                                }
                                                endIcon={<ArrowDropDownIcon />}
                                            >
                                                <Typography>
                                                    {item.title}
                                                </Typography>
                                            </Button>
                                        ) : (
                                            <Button
                                                key={item.apiName}
                                                className={classes.tab}
                                            >
                                                <Link href={`/${item.apiName}`}>
                                                    <Typography>
                                                        {item.title}
                                                    </Typography>
                                                </Link>
                                            </Button>
                                        )
                                    )}
                                    {list && (
                                        <MenuLists
                                            open={Boolean(anchorEl)}
                                            menuList={list}
                                            handleClose={handleClose}
                                            anchorEl={anchorEl}
                                        />
                                    )}
                                </Grid>
                            }
                            {
                                <Grid item xs={10} className={classes.small}>
                                    <Collapse in={checked}>
                                        {menu.map((item) =>
                                            item?.list?.length ? (
                                                <Button
                                                    key={item.apiName}
                                                    className={classes.tab}
                                                    onClick={(e) =>
                                                        handleOpen(e, item)
                                                    }
                                                    endIcon={
                                                        <ArrowDropDownIcon />
                                                    }
                                                >
                                                    <Typography>
                                                        {item.title}
                                                    </Typography>
                                                </Button>
                                            ) : (
                                                <Button
                                                    key={item.apiName}
                                                    className={classes.tab}
                                                    onClick={handleClose}
                                                >
                                                    <Link
                                                        href={`/product/${item.apiName}`}
                                                    >
                                                        <Typography>
                                                            {item.title}
                                                        </Typography>
                                                    </Link>
                                                </Button>
                                            )
                                        )}
                                        {list && (
                                            <MenuLists
                                                open={Boolean(anchorEl)}
                                                menuList={list}
                                                handleClose={handleClose}
                                                anchorEl={anchorEl}
                                            />
                                        )}
                                    </Collapse>
                                </Grid>
                            }
                        </Grid>
                    </Container>
                </Toolbar>
            </AppBar>
        </Box>
    );
}

export const MenuLists = ({ open, menuList, handleClose, anchorEl }) => {
    const classes = useStyles();
    return (
        <Popover
            id="menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            style={{ marginTop: "10px", boxShadow: "none" }}
            anchorOrigin={{
                vertical: "bottom",
                horizontal: "center",
            }}
            transformOrigin={{
                vertical: "top",
                horizontal: "center",
            }}
        >
            {menuList.list?.map((li: string) => (
                <MenuItem key={li} onClick={handleClose}>
                    <Link href={`/product/${menuList.apiName}/${li}`}>
                        <MenuList className={classes.outline}>{li}</MenuList>
                    </Link>
                </MenuItem>
            ))}
        </Popover>
    );
};
export default memo(Navbar);
