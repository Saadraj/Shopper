import {
    Box,
    Button,
    Container,
    createStyles,
    Divider,
    Grid,
    makeStyles,
    Paper,
    TextField,
    Theme,
    Typography
} from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";
import Link from "next/link";
import React, { memo } from "react";

const useStyles = makeStyles(
    (theme: Theme) =>
        createStyles({
            root: {
                paddingTop: theme.spacing(5),
                paddingBottom: theme.spacing(5),
            },
            card: {
                padding: theme.spacing(5),
            },
            link: {
                textDecoration: "none",
                color: theme.palette.secondary.main,
                cursor: "pointer",
                "&:hover": {
                    textDecoration: "underline",
                },
            },
        }),
    { index: 18 }
);

function ContactUs() {
    const classes = useStyles();
    return (
        <Box>
            <Container className={classes.card}>
                <Paper className={classes.card}>
                    <Typography variant="h4" align="center" gutterBottom>
                        Visit Us
                    </Typography>
                    <Divider />
                    <Grid
                        container
                        justify="space-evenly"
                        spacing={2}
                        className={classes.root}
                    >
                        <Grid item xs={12} sm={6} md={3}>
                            <Typography variant="h5" gutterBottom>
                                Contact Details
                            </Typography>
                            <Typography>18 Fresno, CA 93727, USA</Typography>
                            <Link href="/">
                                <Typography
                                    color="primary"
                                    className={classes.link}
                                >
                                    info@shopper.com
                                </Typography>
                            </Link>
                            <Typography>
                                <span className="font-weight-bold">Tel: </span>
                                123-456-6780
                            </Typography>
                            <Typography>
                                <span className="font-weight-bold">Fax: </span>
                                123-456-6789
                            </Typography>
                            <Typography>
                                <span className="font-weight-bold">web: </span>
                                <Link href="/">
                                    <span className={classes.link}>
                                        shopper.com
                                    </span>
                                </Link>
                            </Typography>
                        </Grid>
                        <Grid item xs={12} sm={6} md={3}>
                            <Typography variant="h5" gutterBottom>
                                Opening Hours
                            </Typography>
                            <Typography>Sunday - Thursday</Typography>
                            <Typography>09:00am - 09:00pm</Typography>
                            <Typography>Friday</Typography>
                            <Typography>05:00pm - 9:00pm</Typography>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Typography variant="h5" align="center">
                                Email Us
                            </Typography>
                            <form>
                                <Grid container spacing={2}>
                                    <Grid item xs={12}>
                                        <TextField
                                            fullWidth
                                            label="Your Name"
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            fullWidth
                                            label="Your Email"
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField fullWidth label="Subject" />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            fullWidth
                                            label="Message"
                                            multiline
                                            rows={2}
                                        />
                                    </Grid>
                                    <Grid
                                        item
                                        container
                                        xs={12}
                                        justify="center"
                                    >
                                        <Button
                                            variant="outlined"
                                            color="secondary"
                                            endIcon={
                                                <SendIcon
                                                    style={{
                                                        transform:
                                                            "rotate(-45deg)",
                                                    }}
                                                />
                                            }
                                        >
                                            Send
                                        </Button>
                                    </Grid>
                                </Grid>
                            </form>
                        </Grid>
                    </Grid>
                </Paper>
            </Container>
            <Box>
                <div className="mapouter">
                    <div className="gmap_canvas">
                        <iframe
                            title="address"
                            width="100%"
                            height="500"
                            id="gmap_canvas"
                            src="https://maps.google.com/maps?q=2880%20Broadway,%20New%20York&t=k&z=13&ie=UTF8&iwloc=&output=embed"
                            frameBorder="0"
                            scrolling="no"
                            marginHeight={0}
                            marginWidth={0}
                        />
                    </div>
                </div>
            </Box>
        </Box>
    );
}

export default memo(ContactUs);
