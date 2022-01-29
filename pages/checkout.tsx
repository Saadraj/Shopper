import { createStyles, makeStyles, Theme } from "@material-ui/core";
import { getAuth } from "firebase/auth";
import Router from "next/router";
import { useEffect } from "react";
import Loading from "../component/utils/Loading";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: "flex",
            width: "100%",
        },
        userInfo: {
            backgroundColor: "#f7f7f7",
            width: "100%",
            height: "30rem",
            display: "grid",
            placeItems: "center",
            paddingLeft: theme.spacing(1),
            fontSize: "1.5rem",
        },
    })
);

const CheckOut = () => {
    const classes = useStyles();
    const auth = getAuth();

    useEffect(() => {
        !auth?.currentUser && Router.push("/login");
    }, [Router]);
    if (!auth?.currentUser) {
        return <Loading />;
    }
    return (
        <div className={classes.root}>
            <div className={classes.userInfo}>
                <div>This features will be unlocked very soon</div>
                {/* <pre>{JSON.stringify(auth, null, 4)}</pre> */}
            </div>
        </div>
    );
};

export default CheckOut;
