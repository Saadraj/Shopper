import {
    Box,
    Container,
    createStyles,
    Grid,
    makeStyles,
    Theme,
    Typography,
} from "@material-ui/core";
import Image from "next/image";
import Link from "next/link";
import React, { memo } from "react";
import footer from "./items";

const useStyles = makeStyles(
    (theme: Theme) =>
        createStyles({
            root: {
                backgroundColor: theme.palette.grey[900],
                color: theme.palette.grey[50],
            },
            container: {
                paddingTop: theme.spacing(11),
                paddingBottom: theme.spacing(11),
            },
            subHeadingPadding: {
                paddingBottom: theme.spacing(5),
            },
            title: {
                color: theme.palette.warning.main,
            },
            randomLink: {
                color: theme.palette.grey[50],
                textDecoration: 0,
            },
        }),
    { index: 4 }
);
const Footer = () => {
    const classes = useStyles();
    return (
        <Box className={classes.root}>
            <Container maxWidth="md" className={classes.container}>
                <Grid container justify="space-around" spacing={4}>
                    <Grid
                        item
                        container
                        justify="space-around"
                        xs={12}
                        sm={3}
                        md={3}
                    >
                        <Grid item xs={12}>
                            <Link href="/">
                                <a>
                                    <Image
                                        src="/img/logo.png"
                                        height={35}
                                        width="100%"
                                    />
                                </a>
                            </Link>
                        </Grid>
                        {["disc", "maestro", "mc", "pp", "visa"].map((v) => (
                            <Grid item key={v}>
                                <Link href={v}>
                                    <button>
                                        <Image
                                            src={`/img/Payment/${v}.png`}
                                            height={20}
                                            width={30}
                                        />
                                    </button>
                                </Link>
                            </Grid>
                        ))}
                    </Grid>
                    <Grid
                        item
                        container
                        justify="space-around"
                        xs={9}
                        spacing={5}
                    >
                        {footer?.map((v) => (
                            <Grid
                                container
                                item
                                justify="space-around"
                                xs={12}
                                sm={6}
                                md={3}
                                key={v.title}
                            >
                                <Grid item xs={12} className={classes.title}>
                                    <Typography variant="h5" paragraph>
                                        {v.title}
                                    </Typography>
                                </Grid>
                                {v?.subtitle?.map((p) => (
                                    <Grid item xs={12} key={p}>
                                        <Link href={`/${p}`}>
                                            <a className={classes.randomLink}>
                                                <Typography>{p}</Typography>
                                            </a>
                                        </Link>
                                    </Grid>
                                ))}
                            </Grid>
                        ))}
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default memo(Footer);
