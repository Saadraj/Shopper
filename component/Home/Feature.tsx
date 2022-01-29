import {
    Box,
    Card,
    CardContent,
    Container,
    createStyles,
    Grid,
    Icon,
    makeStyles,
    Paper,
    Theme,
    Typography,
} from "@material-ui/core";
import { loadCSS } from "fg-loadcss";
import React, { memo } from "react";

const useStyles = makeStyles(
    (theme: Theme) =>
        createStyles({
            container: {
                paddingTop: theme.spacing(11),
                paddingBottom: theme.spacing(11),
            },
            paper: {
                paddingTop: theme.spacing(5),
                paddingBottom: theme.spacing(11),
                textAlign: "center",
            },
            subHeadingPadding: {
                paddingBottom: theme.spacing(5),
            },
            icon: {
                fontSize: 50,
                color: theme.palette.error.main,
                "&:hover": {
                    color: "red",
                    animation: "$spin 1s 1",
                },
            },
            featureContainer: {
                textAlign: "left",
                padding: theme.spacing(3),
            },
            cardContainer: {
                width: 300,
            },
            card: {
                height: 250,
            },
            "@keyframes spin": {
                from: {
                    transform: "rotate(0deg)",
                },
                to: {
                    transform: "rotate(360deg)",
                },
            },
        }),
    { index: 7 }
);
function Feature({ features }) {
    const classes = useStyles();
    React.useEffect(() => {
        const node = loadCSS(
            "https://use.fontawesome.com/releases/v5.12.0/css/all.css",
            document.querySelector("#font-awesome-css")
        );

        return () => {
            node.parentNode.removeChild(node);
        };
    }, []);
    return (
        <Box>
            <Container maxWidth="lg" className={classes.container}>
                <Paper className={classes.paper} elevation={0}>
                    <Typography variant="h3" paragraph>
                        Features
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
                    <Container maxWidth="lg">
                        <Grid container justify="space-around" spacing={5}>
                            {features?.map(
                                (feature: {
                                    icon: string;
                                    title: string;
                                    description: string;
                                }) => (
                                    <Grid
                                        item
                                        className={classes.cardContainer}
                                        key={feature.title}
                                    >
                                        <Card
                                            variant="outlined"
                                            className={classes.card}
                                        >
                                            <CardContent
                                                className={
                                                    classes.featureContainer
                                                }
                                            >
                                                <Box pb={2}>
                                                    <Icon
                                                        className={`${feature.icon} ${classes.icon}`}
                                                    />
                                                </Box>
                                                <Typography variant="h4">
                                                    {feature.title}
                                                </Typography>
                                                <Typography
                                                    variant="body2"
                                                    component="p"
                                                >
                                                    {feature.description}
                                                </Typography>
                                            </CardContent>
                                        </Card>
                                    </Grid>
                                )
                            )}
                        </Grid>
                    </Container>
                </Paper>
            </Container>
        </Box>
    );
}
export default memo(Feature);
