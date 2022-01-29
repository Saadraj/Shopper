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
import { memo } from "react";

const useStyles = makeStyles(
    (theme: Theme) =>
        createStyles({
            container: {
                paddingTop: theme.spacing(11),
                paddingBottom: theme.spacing(11),
            },
            paper: {
                color: "white",
            },
            subHeadingPadding: {
                paddingBottom: theme.spacing(5),
            },
            bg: {
                background: `linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.7)),url('/img/Home/partner-bg.png')`,
                backgroundRepeat: "no-repeat",
                backgroundAttachment: "fixed",
                backgroundSize: "100% 100%",
            },
        }),
    { index: 9 }
);
const Partner = ({ partners }) => {
    const classes = useStyles();
    return (
        <Box className={classes.bg}>
            <Container maxWidth="lg" className={classes.container}>
                <Box className={classes.paper}>
                    <Typography variant="h3" align="center" paragraph>
                        Our Partners
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
                        <Grid container spacing={1} justify="space-around">
                            {partners?.map((src: string) => (
                                <Grid item key={src}>
                                    <Image
                                        src={src}
                                        alt="partners"
                                        height="30%"
                                        width="70%"
                                    />
                                </Grid>
                            ))}
                        </Grid>
                    </Container>
                </Box>
            </Container>
        </Box>
    );
};

export default memo(Partner);
