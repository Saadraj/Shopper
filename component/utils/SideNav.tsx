import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Box,
    Container,
    createStyles,
    Grid,
    makeStyles,
    Theme,
    Typography,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Link from "next/link";
import React, { memo, useState } from "react";
import { menu } from "../Navbar/navItem";

const useStyles = makeStyles(
    (theme: Theme) =>
        createStyles({
            root: {
                color: theme.palette.grey[50],
                paddingTop: theme.spacing(11),
                paddingBottom: theme.spacing(11),
            },
            cb: {
                color: "black",
            },
            commonPadding: {
                paddingTop: theme.spacing(5),
                paddingBottom: theme.spacing(5),
            },
            linkTitle: {
                paddingTop: theme.spacing(3),
                color: theme.palette.primary.main,
                cursor: "pointer",
            },
        }),
    { index: 15 }
);
const SideBar = () => {
    const classes = useStyles();
    const [expanded, setExpanded] = useState<string | false>(false);
    const handleChange =
        (panel: string) =>
        (event: React.ChangeEvent<{}>, isExpanded: boolean) => {
            setExpanded(isExpanded ? panel : false);
        };
    const [subExpanded, setSubExpanded] = useState<string | false>(false);
    const subHandleChange =
        (panel: string) =>
        (event: React.ChangeEvent<{}>, isExpanded: boolean) => {
            setSubExpanded(isExpanded ? panel : false);
        };
    return (
        <Box className={classes.root}>
            <Container maxWidth="xl">
                <Grid container>
                    {/* <Grid item xs={12}>
                        <Typography color="secondary" variant="h6">
                            Filter Your Product
                        </Typography>
                    </Grid>
                    <Grid item container xs={12}>
                        <Grid item xs={11}>
                            <TextField label="Filter Your Products" />
                        </Grid>
                        <Grid item xs={1}>
                            <IconButton type="submit" aria-label="search">
                                <SearchIcon />
                            </IconButton>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} className={classes.commonPadding}>
                        <Slider
                            defaultValue={400}
                            // valueLabelDisplay="auto"
                            step={10}
                            marks
                            min={100}
                            max={1000}
                            disabled
                            valueLabelDisplay="on"
                        />
                    </Grid> */}
                    {/* <>
                        {menu?.map(
                            (item) =>
                                item?.list?.length && (
                                    <Grid item xs={12} key={item.title}>
                                        <FormControlLabel
                                            className={classes.cb}
                                            checked={Boolean(
                                                Math.round(
                                                    (Math.random() * 10) / 10
                                                )
                                            )}
                                            control={
                                                <Checkbox color="primary" />
                                            }
                                            label={item.title}
                                        />
                                    </Grid>
                                )
                        )}
                    </> */}
                    <Grid
                        container
                        item
                        xs={12}
                        className={classes.commonPadding}
                    >
                        {menu.map(
                            (item) =>
                                item?.list?.length && (
                                    <Accordion
                                        key={item.title}
                                        expanded={expanded === item.title}
                                        onChange={handleChange(item.title)}
                                    >
                                        <AccordionSummary
                                            expandIcon={<ExpandMoreIcon />}
                                            aria-controls="panel1a-content"
                                            id="panel1a-header"
                                        >
                                            <Typography>
                                                {item.title}
                                            </Typography>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <Grid container>
                                                {item.list?.map((p) => (
                                                    <Grid item xs={12} key={p}>
                                                        <Accordion
                                                            expanded={
                                                                subExpanded ===
                                                                p
                                                            }
                                                            onChange={subHandleChange(
                                                                p
                                                            )}
                                                        >
                                                            <AccordionSummary
                                                                expandIcon={
                                                                    <ExpandMoreIcon />
                                                                }
                                                                aria-controls="panel1a-content"
                                                            >
                                                                <Typography>
                                                                    {p}
                                                                </Typography>
                                                            </AccordionSummary>
                                                            <AccordionDetails>
                                                                <Box flexDirection="col">
                                                                    <Typography>
                                                                        Lorem
                                                                        ipsum
                                                                        dolor
                                                                        sit
                                                                        amet,
                                                                        consectetur
                                                                        adipiscing
                                                                        elit.
                                                                        Suspendisse
                                                                        malesuada
                                                                        lacus
                                                                        ex, sit
                                                                        amet
                                                                        blandit
                                                                        leo
                                                                        lobortis
                                                                        eget.
                                                                    </Typography>
                                                                    <Link
                                                                        href={`/product/${item?.title}`}
                                                                    >
                                                                        <Typography
                                                                            className={
                                                                                classes.linkTitle
                                                                            }
                                                                        >
                                                                            {
                                                                                item?.title
                                                                            }
                                                                        </Typography>
                                                                    </Link>
                                                                </Box>
                                                            </AccordionDetails>
                                                        </Accordion>
                                                    </Grid>
                                                ))}
                                            </Grid>
                                        </AccordionDetails>
                                    </Accordion>
                                )
                        )}
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default memo(SideBar);
