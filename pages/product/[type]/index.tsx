import { Box, Divider, Grid, Paper } from "@material-ui/core";
import { Pagination } from "@material-ui/lab";
import { createClient } from "contentful";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Category from "../../../component/utils/Category";
import Loading from "../../../component/utils/Loading";
import SideBar from "../../../component/utils/SideNav";

const FirstLetterCapitalize = (s: string) =>
    (s = s.charAt(0).toUpperCase() + s.slice(1).toLowerCase());

const client = createClient({
    space: "doo6cri3y11h",
    accessToken: "qC6PHdhvjl72S-kZojUJM2zgCOEiiN9lutZLBG9Dc30",
});

const Product = () => {
    const router = useRouter();
    const { type } = router.query as any;
    const [state, setState] = useState([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setPage(1);
    }, []);

    useEffect(() => {
        setState([]);
        const fetchData = async () => {
            const product = await client.getEntries({
                content_type:
                    type.split(" ").length > 1
                        ? type
                              .split(" ")[0]
                              .concat(FirstLetterCapitalize(type.split(" ")[1]))
                        : type,
            });
            setState(product?.items);
            setLoading(false);
        };
        type && fetchData();
    }, [page, type]);

    const onChange = (event: any, p: number) => {
        setPage(p);
    };

    return (
        <Grid container justify="space-around" component={Paper}>
            <Grid item xs={12} md={2}>
                <SideBar />
            </Grid>
            <Divider orientation="vertical" flexItem />
            <Grid item container xs={12} md={9}>
                <Grid item container xs={12} justify="center">
                    {loading ? (
                        <Loading />
                    ) : (
                        <Category
                            name={type === "menGrocery" ? "Grocery" : type}
                            state={state}
                        />
                    )}
                </Grid>
                <Grid item container xs={12} justify="center">
                    <Box p={5}>
                        {state?.length && (
                            <Pagination
                                count={state?.length}
                                onChange={onChange}
                                showFirstButton
                                showLastButton
                                page={page}
                            />
                        )}
                    </Box>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default Product;
