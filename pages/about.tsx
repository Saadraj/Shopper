import {
    Box,
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Container,
    createStyles,
    Grid,
    IconButton,
    LinearProgress,
    makeStyles,
    Theme,
    Typography,
    withStyles
} from "@material-ui/core";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import TwitterIcon from "@material-ui/icons/Twitter";
import Image from "next/image";
import React from "react";

const teams = [
    {
        name: "Jeffery Poole",
        title: "CEO",
        src: "/img/About/team1.png"
    },
    {
        name: "Isabelle Dean",
        title: "Co-CEO",
        src: "/img/About/team2.png"
    },
    {
        name: "Mike Kennedy",
        title: "Marketing Manager",
        src: "/img/About/team3.png"
    },
    {
        name: "Edwin Gross",
        title: "Developer",
        src: "/img/About/team4.png"
    },
    {
        name: "Mable Schwartz",
        title: "Developer",
        src: "/img/About/team5.png"
    },
    {
        name: "Adele Washington",
        title: "UI/UX Designer",
        src: "/img/About/team6.png"
    }
];
const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        bg: {
            background: `linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.3)),url('/img/About/background.jpg')`,
            backgroundRepeat: "no-repeat",
            backgroundAttachment: "fixed",
            backgroundSize: "100% 100%",
            height: "100vh",
            color: "white"
        },
        who: {
            paddingTop: theme.spacing(11),
            paddingBottom: theme.spacing(11)
        },
        padding: {
            padding: theme.spacing(5)
        },
        skillsRoot: {
            paddingTop: theme.spacing(5)
        },
        skills: {
            background: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.6)),url('/img/About/blog2.png')`,
            backgroundRepeat: "no-repeat",
            backgroundAttachment: "fixed",
            backgroundSize: "100% 100%",
            // height: "300px",
            color: "white",
            paddingTop: theme.spacing(11),
            paddingBottom: theme.spacing(11)
        }
    })
);

const AboutUs = () => {
    const classes = useStyles();
    return (
        <>
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
                <Container maxWidth="md">
                    <OurTeam />
                </Container>
            </Box>
        </>
    );
};

export const WhoWeAre = () => {
    const classes = useStyles();

    return (
        <Card>
            <Grid container>
                <Grid item xs={6}>
                    <Image src="/img/About/about-img.png" height={500} width={800} />
                </Grid>
                <Grid item xs={6}>
                    <CardContent>
                        <Typography variant="h3" align="center" gutterBottom paragraph>
                            Who We Are
                        </Typography>
                        <Typography
                            variant="subtitle1"
                            color="textSecondary"
                            align="justify"
                            className={classes.padding}
                        >
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid non
                            similique laborum iure reprehenderit, asperiores voluptas quae cumque
                            animi, autem minus, doloremque quis ipsam aliquam cum dolores accusamus
                            incidunt. Eveniet laudantium incidunt corrupti, illo molestiae
                            doloremque asperiores ducimus. Reprehenderit similique quibusdam dolor
                            itaque enim.
                        </Typography>
                    </CardContent>
                </Grid>
            </Grid>
        </Card>
    );
};

const BorderLinearProgress = withStyles((theme: Theme) =>
    createStyles({
        root: {
            height: 20,
            borderRadius: 5
        },
        colorPrimary: {
            backgroundColor: theme.palette.grey[theme.palette.type === "light" ? 200 : 700]
        }
    })
)(LinearProgress);
export const OurSkills = () => {
    const classes = useStyles();
    const skillsBar = [
        {
            name: "Shipping",
            value: 90,
            color: "primary"
        },
        {
            name: "Refund & Return",
            value: 80,
            color: "secondary"
        },
        {
            name: "Customer Care",
            value: 95,
            color: "secondary"
        },
        {
            name: "Customer Satisfiction",
            value: 90,
            color: "primary"
        }
    ];
    return (
        <Grid container>
            <Grid item xs={12}>
                <Typography variant="h2" align="center" gutterBottom paragraph>
                    Our Skills
                </Typography>
                <Container maxWidth="sm">
                    <Typography variant="subtitle1" align="center">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid non
                        similique laborum iure reprehenderit, asperiores voluptas quae cumque animi,
                        autem minus, doloremque quis ipsam Reprehenderit similique quibusdam dolor
                        itaque enim.
                    </Typography>
                </Container>
            </Grid>
            <Grid item container xs={12} spacing={4} className={classes.skillsRoot}>
                {skillsBar.map((v) => (
                    <Grid item xs={6}>
                        <SkillsProgress
                            key={v.name}
                            value={v.value}
                            color={v.color}
                            name={v.name}
                        />
                    </Grid>
                ))}
            </Grid>
        </Grid>
    );
};
export const SkillsProgress = ({ value, color, name }) => (
    <Box width="100%" mr={1}>
        <Typography variant="body2" paragraph>
            {name}
        </Typography>
        <BorderLinearProgress variant="determinate" value={value} color={color} />
    </Box>
);

export const OurTeam = () => {
    const classes = useStyles();
    return (
        <Grid container>
            <Grid item xs={12}>
                <Typography variant="h2" align="center" gutterBottom paragraph>
                    Our Team
                </Typography>
                <Container maxWidth="sm">
                    <Typography variant="subtitle1" align="center">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid non
                        similique laborum iure reprehenderit, asperiores voluptas quae cumque animi,
                        autem minus, doloremque quis ipsam Reprehenderit similique quibusdam dolor
                        itaque enim.
                    </Typography>
                </Container>
            </Grid>
            <Grid
                item
                container
                justify="space-around"
                spacing={4}
                xs={12}
                className={classes.skillsRoot}
            >
                {teams.map((v) => (
                    <Grid item xs={4}>
                        <Card>
                            <CardMedia
                                component="img"
                                alt={v.name}
                                height="250"
                                image={v.src}
                                title={v.name}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2" align="center">
                                    {v.name}
                                </Typography>
                                <Typography align="center">{v.title}</Typography>
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
export default AboutUs;
