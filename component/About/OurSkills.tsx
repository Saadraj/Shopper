import {
    Container,
    createStyles,
    Grid,
    makeStyles,
    Theme,
    Typography,
} from "@material-ui/core";
import React, { memo } from "react";
import SkillsProgress from "./SkillsProgress";

const skillsBar = [
    {
        name: "Shipping",
        value: 90,
        color: "primary",
    },
    {
        name: "Refund & Return",
        value: 80,
        color: "secondary",
    },
    {
        name: "Customer Care",
        value: 95,
        color: "secondary",
    },
    {
        name: "Customer Satisfiction",
        value: 90,
        color: "primary",
    },
];
const useStyles = makeStyles(
    (theme: Theme) =>
        createStyles({
            skillsRoot: {
                paddingTop: theme.spacing(5),
            },
        }),
    { index: 2 }
);

const OurSkills = () => {
    const classes = useStyles();

    return (
        <Grid container>
            <Grid item xs={12}>
                <Typography variant="h2" align="center" gutterBottom paragraph>
                    Our Skills
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
                xs={12}
                spacing={4}
                className={classes.skillsRoot}
            >
                {skillsBar.map((v) => (
                    <Grid item xs={12} sm={6} key={v.name}>
                        <SkillsProgress
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

export default memo(OurSkills);
