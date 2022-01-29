import { Box, Divider, Grid, Paper } from "@material-ui/core";
import { Pagination } from "@material-ui/lab";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { searchContent } from "../../component/Navbar/navItem";
import Category from "../../component/utils/Category";
import Loading from "../../component/utils/Loading";
import SideBar from "../../component/utils/SideNav";

const SearchedProduct = ({ data }) => {
    const router = useRouter();
    const { id } = router.query as any;
    const [state, setState] = useState([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setPage(1);
    }, []);
    useEffect(() => {
        const aaa = searchContent.map((v) =>
            v?.filter((sub) => sub?.fields?.title.toLowerCase().includes(id))
        );
        const bbb = aaa?.filter((v) => v.length).flatMap((v) => v);
        setState(bbb);
        setLoading(false);
    }, [page, id]);

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
                        <Category name="Searched items" state={state} />
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

export default SearchedProduct;
