import {
    Avatar,
    Box,
    Container,
    createStyles,
    Grid,
    makeStyles,
    Paper,
    Theme,
    Typography,
} from "@material-ui/core";
import Rating from "@material-ui/lab/Rating";
import React, { memo } from "react";
import Carousel from "react-material-ui-carousel";

const useStyles = makeStyles(
    (theme: Theme) =>
        createStyles({
            container: {
                paddingTop: theme.spacing(11),
                paddingBottom: theme.spacing(11),
            },
            paper: {
                paddingTop: theme.spacing(5),
                paddingBottom: theme.spacing(5),
            },
            subHeadingPadding: {
                paddingBottom: theme.spacing(5),
            },
            card: {
                padding: theme.spacing(5),
                // textAlign: "left",
            },
            large: {
                width: theme.spacing(22),
                height: theme.spacing(22),
            },
            title: {
                textTransform: "capitalize",
            },
        }),
    { index: 5 }
);
function CustomerFeedback({ feedbacks }) {
    const classes = useStyles();
    return (
        <Box>
            <Container maxWidth="lg" className={classes.container}>
                <Paper className={classes.paper} elevation={0}>
                    <Typography
                        variant="h3"
                        align="center"
                        paragraph
                        gutterBottom
                    >
                        Customer&apos;s Feedback
                    </Typography>
                    <Container
                        maxWidth="sm"
                        className={classes.subHeadingPadding}
                    >
                        <Typography paragraph component="p" align="center">
                            Lorem, ipsum dolor sit amet consectetur adipisicing
                            elit. Soluta optio repellat quo veritatis
                            perferendis eius aut ducimus porro nihil dolores
                            quia, placeat obcaecati. Reprehenderit pariatur
                            deleniti atque, nisi quae rerum similique itaque
                            qui.
                        </Typography>
                    </Container>
                    <Container maxWidth="lg">
                        <Carousel
                            animation="slide"
                            indicators={false}
                            timeout={1000}
                            navButtonsAlwaysInvisible
                        >
                            {feedbacks?.map(
                                (feedback: {
                                    src: string;
                                    name: string;
                                    rating: number;
                                    comment: string;
                                }) => (
                                    <Paper
                                        key={feedback.src}
                                        variant="outlined"
                                        className={classes.card}
                                    >
                                        <Grid container spacing={5}>
                                            <Grid item xs={12} md={3}>
                                                <Avatar
                                                    src={feedback.src}
                                                    alt={feedback.name}
                                                    className={classes.large}
                                                />
                                            </Grid>
                                            <Grid item xs={12} md={9}>
                                                <Typography
                                                    variant="h4"
                                                    paragraph
                                                    className={classes.title}
                                                >
                                                    {feedback.name}
                                                </Typography>
                                                <Rating
                                                    value={feedback.rating}
                                                    readOnly
                                                />
                                                <Typography paragraph>
                                                    {feedback.comment}
                                                </Typography>
                                            </Grid>
                                        </Grid>
                                    </Paper>
                                )
                            )}
                        </Carousel>
                    </Container>
                </Paper>
            </Container>
        </Box>
    );
}
export default memo(CustomerFeedback);
