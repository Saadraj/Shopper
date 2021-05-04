import Box from "@material-ui/core/Box";
import Divider from "@material-ui/core/Divider";
import { GetStaticProps } from "next";
import dynamic from "next/dynamic";
import React from "react";
import homeItems from "../component/Api/home.json";
import CustomerFeedback  from "../component/Home/CustomerFeedback"
import DisplayProduct  from "../component/Home/DisplayProduct"
import Feature  from "../component/Home/Feature"
import Latest  from "../component/Home/Latest"
import Partner  from "../component/Home/Partners"

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
