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
        sidebar: {
            backgroundColor: "#fefefe",
            width: theme.spacing(22),
            height: "30rem",
            paddingLeft: theme.spacing(1),
            fontSize: "1.5rem",
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

const Profile = () => {
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
            <div className={classes.sidebar}>sidebar</div>
            <div className={classes.userInfo}>
                <div>
                    <div>userInfo:</div>
                    <div>name: {auth.currentUser.displayName}</div>
                    <div>email: {auth.currentUser.email}</div>
                </div>
                {/* <pre>{JSON.stringify(auth, null, 4)}</pre> */}
            </div>
        </div>
    );
};

export default Profile;
