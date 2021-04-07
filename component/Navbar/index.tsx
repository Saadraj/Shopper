import {
    AppBar,
    Box,
    Button,
    Container,
    createStyles,
    Grid,
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
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { menu } from "./navItem";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            zIndex: 1111,
        },
        tab: {
            color: theme.palette.grey[50],
        },
        outline:{
            outline:0
        }
    })
);
export default function Navbar() {
    const classes = useStyles();
    const [list, setList] = React.useState([]);
    const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);
    const handleOpen = (event, newList) => {
        event.stopPropagation();
        setAnchorEl(event.currentTarget);
        newList?.list?.length > 0 ? setList(newList) : setList(null);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <Box className={classes.root}>
            <AppBar position="fixed" color="primary" component={Paper}>
                <Toolbar>
                    <Container maxWidth="xl">
                        <Grid container justify="space-between" alignItems="center">
                            <Grid item xs={2}>
                                <Link href="/">
                                    <a>
                                        <Image src="/img/logo.png" width="100%" height="20px" />
                                    </a>
                                </Link>
                            </Grid>
                            <Grid item container justify="flex-end" xs={8}>
                                {menu.map((item) => (
                                    <Button
                                        key={item.apiName}
                                        className={classes.tab}
                                        onClick={(e) => handleOpen(e, item)}
                                        endIcon={
                                            item?.list?.length > 0 ? <ArrowDropDownIcon /> : null
                                        }
                                    >
                                        {item?.list?.length > 0 ? (
                                            <Typography>{item.title}</Typography>
                                        ) : (
                                            <Link href={`/${item.apiName}`}>
                                                <Typography>{item.title}</Typography>
                                            </Link>
                                        )}
                                    </Button>
                                ))}
                                {list && (
                                    <MenuLists
                                        open={Boolean(anchorEl)}
                                        menuList={list}
                                        handleClose={handleClose}
                                        anchorEl={anchorEl}
                                    />
                                )}
                            </Grid>
                        </Grid>
                    </Container>
                </Toolbar>
            </AppBar>
        </Box>
    );
}

export const MenuLists = ({ open, menuList, handleClose, anchorEl }) => {
    const classes =useStyles()
    return(
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
                <Link href={`/product/${menuList.apiName}`}>
                    <MenuList className={classes.outline}>{li}</MenuList>
                </Link>
            </MenuItem>
        ))}
    </Popover>
)};
