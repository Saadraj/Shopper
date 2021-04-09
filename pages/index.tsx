import Box from "@material-ui/core/Box";
import Divider from "@material-ui/core/Divider";
import { GetStaticProps } from "next";
import dynamic from "next/dynamic";
import React from "react";
import homeItems from "../component/Api/home.json";
const CustomerFeedback = dynamic(() => import("../component/Home/CustomerFeedback"));
const DisplayProduct = dynamic(() => import("../component/Home/DisplayProduct"));
const Feature = dynamic(() => import("../component/Home/Feature"));
const Latest = dynamic(() => import("../component/Home/Latest"));
const Partner = dynamic(() => import("../component/Home/Partners"));

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
    const data = homeItems;
    return {
        props: {
            data,
        },
    };
};

export default index;
