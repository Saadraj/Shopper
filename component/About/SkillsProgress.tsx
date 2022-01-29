import {
    Box,
    createStyles,
    LinearProgress,
    Theme,
    Typography,
    withStyles,
} from "@material-ui/core";
import React, { memo } from "react";

const BorderLinearProgress = withStyles((theme: Theme) =>
    createStyles({
        root: {
            height: 20,
            borderRadius: 5,
        },
        colorPrimary: {
            backgroundColor:
                theme.palette.grey[theme.palette.type === "light" ? 200 : 700],
        },
    })
)(LinearProgress);

const SkillsProgress = ({ value, color, name }) => (
    <Box width="100%" mr={1}>
        <Typography variant="body2" paragraph>
            {name}
        </Typography>
        <BorderLinearProgress
            variant="determinate"
            value={value}
            color={color}
        />
    </Box>
);

export default memo(SkillsProgress);
