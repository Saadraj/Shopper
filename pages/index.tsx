import Box from "@material-ui/core/Box";
import Divider from "@material-ui/core/Divider";
import axios from "axios";
import { GetStaticProps } from "next";
import getConfig from "next/config";
import React from "react";
import Home from "../component/Home";
import CustomerFeedback from "../component/Home/CustomerFeedback";
import DisplayProduct from "../component/Home/DisplayProduct";
import Feature from "../component/Home/Feature";
import Latest from "../component/Home/Latest";
import Partner from "../component/Home/Partners";

// const index = ({ data }) => <Home data={data} />;
const index = ({ data }) => (
        <Box>
            <DisplayProduct items={data?.items} />
            <Latest latest={data?.latest} />
            <Divider />
            <Feature features={data?.features} />
            <Divider />
            <CustomerFeedback feedbacks={data?.feedback} />
            <Partner partners={data?.partners} />
        </Box>
);

export const getStaticProps: GetStaticProps = async () => {
    const { serverRuntimeConfig } = getConfig();
    const { data } = await axios.get(`${serverRuntimeConfig.baseUrl}/api/home`);
    return {
        props: {
            data
        }
    };
};

export default index;

