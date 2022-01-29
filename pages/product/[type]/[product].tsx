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
    const { type, product } = router.query as any;
    const [state, setState] = useState<any>();
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setPage(1);
    }, [product]);

    useEffect(() => {
        setState([]);
        const getData = async () => {
            const prod = await client.getEntries({
                content_type: `${type?.toLowerCase()}${FirstLetterCapitalize(
                    product
                )}`,
            });
            setState(prod?.items);
            setLoading(false);
        };
        type && product && getData();
    }, [type, product]);

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
                        <Category name={`${type} - ${product}`} state={state} />
                    )}
                </Grid>
                <Grid item container xs={12} justify="center">
                    <Box p={5}>
                        {state?.currentItems?.length && (
                            <Pagination
                                count={state?.totalPage}
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
