import {
    Box,
    Container,
    createStyles,
    Grid,
    makeStyles,
    Paper,
    Theme,
    Typography,
} from "@material-ui/core";
import React, { memo } from "react";
import OurSkills from "./OurSkills";
import OurTeam from "./OurTeam";
import WhoWeAre from "./WhoWeAre";

const commonStyle = {
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
    backgroundSize: "100% 100%",
    color: "white",
};
const useStyles = makeStyles(
    (theme: Theme) =>
        createStyles({
            bg: {
                background: `linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.3)),url('/img/About/background.jpg')`,
                height: "100vh",
                ...commonStyle,
            },
            who: {
                paddingTop: theme.spacing(11),
                paddingBottom: theme.spacing(11),
            },
            skills: {
                background: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.6)),url('/img/About/blog2.png')`,
                paddingTop: theme.spacing(11),
                paddingBottom: theme.spacing(11),
                ...commonStyle,
            },
            padding: {
                padding: theme.spacing(5),
            },
        }),
    { index: 1 }
);

const AboutUs = () => {
    const classes = useStyles();
    return (
        <Box>
            <Grid container alignItems="center" className={classes.bg}>
                <Grid item xs={12}>
                    <Typography variant="h2" align="center">
                        About Us
                    </Typography>
                </Grid>
            </Grid>
            <Box className={classes.who}>
                <Container maxWidth="lg">
                    <WhoWeAre />
                </Container>
            </Box>
            <Box className={classes.skills}>
                <Container maxWidth="md">
                    <OurSkills />
                </Container>
            </Box>
            <Box className={classes.who}>
                <Container
                    maxWidth="lg"
                    component={Paper}
                    className={classes.padding}
                >
                    <OurTeam />
                </Container>
            </Box>
        </Box>
    );
};

export default memo(AboutUs);
