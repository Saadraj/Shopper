import {
    Box,
    ButtonBase,
    Card,
    Container,
    createStyles,
    Grid,
    Grow,
    IconButton,
    makeStyles,
    Paper,
    Theme,
    Tooltip,
    Typography
} from "@material-ui/core";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import VisibilityIcon from "@material-ui/icons/Visibility";
import Image from "next/image";
import React, { useState } from "react";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        container: {
            paddingTop: theme.spacing(22),
            paddingBottom: theme.spacing(11)
        },
        paper: {
            paddingTop: theme.spacing(5),
            paddingBottom: theme.spacing(11),
            textAlign: "center"
        },
        subHeadingPadding: {
            paddingBottom: theme.spacing(5)
        },
        imageButton: {
            position: "absolute",
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: theme.palette.common.white,
            transition: ".6s",
            "&:hover": {
                backgroundColor: "rgba(0,0,0,0.7)"
            }
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

export default function Latest({ latest }) {
    const [state, setState] = useState({ target: "", open: false });
    const classes = useStyles(state.open);
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
                    <Typography variant="h3" paragraph>
                        Latest Products
                    </Typography>
                    <Container maxWidth="sm" className={classes.subHeadingPadding}>
                        <Typography paragraph component="p">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta optio
                            repellat quo veritatis perferendis eius aut ducimus porro nihil dolores
                            quia, placeat obcaecati. Reprehenderit pariatur deleniti atque, nisi
                            quae rerum similique itaque qui.
                        </Typography>
                    </Container>
                    <Container maxWidth="md">
                        <Grid container spacing={4} justify="space-around">
                            {latest?.map((item: { src: string; product: string }) => (
                                <Grid item key={item.src}>
                                    <Card
                                        variant="outlined"
                                        onMouseOver={() => onMouseOverEvent(item.product)}
                                        onMouseLeave={() => onMouseLeaveEvent()}
                                    >
                                        <ButtonBase focusRipple key={item.product}>
                                            <Image
                                                src={item.src}
                                                title={item.product}
                                                height={200}
                                                width={200}
                                            />
                                            <span className={classes.imageButton}>
                                                <Grow in={item.product === target && open}>
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
                                                                <IconButton
                                                                    className={classes.yellow}
                                                                >
                                                                    <VisibilityIcon />
                                                                </IconButton>
                                                            </Tooltip>
                                                        </Grid>
                                                        <Grid item>
                                                            <Tooltip title="Add to Cart">
                                                                <IconButton
                                                                    className={classes.green}
                                                                >
                                                                    <ShoppingCartIcon />
                                                                </IconButton>
                                                            </Tooltip>
                                                        </Grid>
                                                    </Grid>
                                                </Grow>
                                            </span>
                                        </ButtonBase>
                                    </Card>
                                </Grid>
                            ))}
                        </Grid>
                    </Container>
                </Paper>
            </Container>
        </Box>
    );
}
