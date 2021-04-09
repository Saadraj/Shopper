import { Box, Divider, Grid, Paper } from "@material-ui/core";
import { Pagination } from "@material-ui/lab";
import axios from "axios";
import { GetStaticPaths } from "next";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { menu } from "../../component/Navbar/navItem";
import Category from "../../component/utils/Category";
import { productInterface } from "../../component/utils/Interfaces";
import Loading from "../../component/utils/loading";
import SideBar from "../../component/utils/SideNav";

const Product = () => {
    const router = useRouter();
    const { product } = router.query;
    const [state, setState] = useState<productInterface | undefined>();
    const [page, setPage] = useState(1);

    useEffect(() => {
        setPage(1);
    }, [product]);
    
    useEffect(() => {
        // setState(undefined);
        const has = menu.some((p) => p?.list?.length && p.apiName === product);
        const fetchData = async () => {
            const { data } = await axios.get(`/api/${product}?page=${page}`);
            setState(data);
        };
        has ? fetchData() : router.push("/404");
    }, [page, product, router]);

    const onChange = (event: any, p: number) => {
        setPage(p);
    };

    return (
        <Grid container justify="space-around" component={Paper}>
            <Grid item xs={12} md={2} >
                <SideBar />
            </Grid>
            <Divider orientation="vertical" flexItem />
            <Grid item container xs={12} md={9} >
                <Grid item container xs={12} justify="center" >
                    {state?.currentItems?.length ? (
                        <Category name={product} state={state.currentItems} />
                    ) : (
                        <Loading />
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
