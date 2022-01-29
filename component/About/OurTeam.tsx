import {
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Container,
    createStyles,
    Grid,
    IconButton,
    makeStyles,
    Theme,
    Typography,
} from "@material-ui/core";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import TwitterIcon from "@material-ui/icons/Twitter";
import React, { memo } from "react";

const teams = [
    {
        name: "Jeffery Poole",
        title: "CEO",
        src: "/img/About/team1.png",
    },
    {
        name: "Isabelle Dean",
        title: "Co-CEO",
        src: "/img/About/team2.png",
    },
    {
        name: "Mike Kennedy",
        title: "Marketing Manager",
        src: "/img/About/team3.png",
    },
    {
        name: "Edwin Gross",
        title: "Developer",
        src: "/img/About/team4.png",
    },
    {
        name: "Mable Schwartz",
        title: "Developer",
        src: "/img/About/team5.png",
    },
    {
        name: "Adele Washington",
        title: "UI/UX Designer",
        src: "/img/About/team6.png",
    },
];
const useStyles = makeStyles(
    (theme: Theme) =>
        createStyles({
            skillsRoot: {
                paddingTop: theme.spacing(5),
            },
        }),
    { index: 3 }
);

const OurTeam = () => {
    const classes = useStyles();
    return (
        <Grid container>
            <Grid item xs={12}>
                <Typography variant="h2" align="center" gutterBottom paragraph>
                    Our Team
                </Typography>
                <Container maxWidth="sm">
                    <Typography variant="subtitle1" align="center">
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Aliquid non similique laborum iure reprehenderit,
                        asperiores voluptas quae cumque animi, autem minus,
                        doloremque quis ipsam Reprehenderit similique quibusdam
                        dolor itaque enim.
                    </Typography>
                </Container>
            </Grid>
            <Grid
                item
                container
                justify="space-around"
                spacing={2}
                xs={12}
                className={classes.skillsRoot}
            >
                {teams.map((v) => (
                    <Grid item xs={12} sm={6} md={4} key={v.name}>
                        <Card variant="outlined">
                            <CardMedia
                                component="img"
                                alt={v.name}
                                height="250"
                                image={v.src}
                                title={v.name}
                            />
                            <CardContent>
                                <Typography
                                    gutterBottom
                                    variant="h5"
                                    component="h2"
                                    align="center"
                                >
                                    {v.name}
                                </Typography>
                                <Typography align="center">
                                    {v.title}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Grid container justify="space-evenly">
                                    <Grid item>
                                        <IconButton>
                                            <FacebookIcon />
                                        </IconButton>
                                    </Grid>
                                    <Grid item>
                                        <IconButton>
                                            <TwitterIcon />
                                        </IconButton>
                                    </Grid>
                                    <Grid item>
                                        <IconButton>
                                            <LinkedInIcon />
                                        </IconButton>
                                    </Grid>
                                    <Grid item>
                                        <IconButton>
                                            <InstagramIcon />
                                        </IconButton>
                                    </Grid>
                                </Grid>
                            </CardActions>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Grid>
    );
};

export default memo(OurTeam);
