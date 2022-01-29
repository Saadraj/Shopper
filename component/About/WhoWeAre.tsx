import { Box, CardContent, Grid, Paper, Typography } from "@material-ui/core";
import Image from "next/image";
import React, { memo } from "react";

function WhoWeAre() {
    return (
        <Paper>
            <Grid container>
                <Grid
                    item
                    xs={12}
                    sm={6}
                    style={{ display: "grid", placeItems: "center" }}
                >
                    <Image
                        src="/img/About/about-img.png"
                        height="500%"
                        width="800%"
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <CardContent>
                        <Typography
                            variant="h3"
                            align="center"
                            gutterBottom
                            paragraph
                        >
                            Who We Are
                        </Typography>
                        <Box p={5}>
                            <Typography
                                variant="subtitle1"
                                color="textSecondary"
                                align="justify"
                            >
                                Lorem ipsum dolor sit, amet consectetur
                                adipisicing elit. Aliquid non similique laborum
                                iure reprehenderit, asperiores voluptas quae
                                cumque animi, autem minus, doloremque quis ipsam
                                aliquam cum dolores accusamus incidunt. Eveniet
                                laudantium incidunt corrupti, illo molestiae
                                doloremque asperiores ducimus. Reprehenderit
                                similique quibusdam dolor itaque enim.
                            </Typography>
                        </Box>
                    </CardContent>
                </Grid>
            </Grid>
        </Paper>
    );
}

export default memo(WhoWeAre);
