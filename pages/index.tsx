import Box from "@material-ui/core/Box";
import Divider from "@material-ui/core/Divider";
import { createClient } from "contentful";
import { GetStaticProps } from "next";
import React, { memo } from "react";
import homeItems from "../component/Api/home.json";
import CustomerFeedback from "../component/Home/CustomerFeedback";
import DisplayProduct from "../component/Home/DisplayProduct";
import Feature from "../component/Home/Feature";
import Latest from "../component/Home/Latest";
import Partner from "../component/Home/Partners";

const index = ({ data, display, product }) => {
    return (
        <Box>
            <DisplayProduct items={display?.items} />
            <Latest latest={product?.items} />
            <Divider />
            <Feature features={data?.features} />
            <Divider />
            <CustomerFeedback feedbacks={data?.feedback} />
            <Partner partners={data?.partners} />
        </Box>
    );
};

export const getStaticProps: GetStaticProps = async () => {
    const client = createClient({
        space: "doo6cri3y11h",
        accessToken: "qC6PHdhvjl72S-kZojUJM2zgCOEiiN9lutZLBG9Dc30",
    });
    const product = await client.getEntries({ content_type: "product" });
    const display = await client.getEntries({ content_type: "display" });
    const men = await client.getEntries({ content_type: "men" });
    const women = await client.getEntries({ content_type: "women" });
    const kids = await client.getEntries({ content_type: "kids" });
    const digital = await client.getEntries({ content_type: "digital" });
    const furniture = await client.getEntries({ content_type: "furniture" });
    const otherServices = await client.getEntries({
        content_type: "otherServices",
    });
    const data = homeItems;
    return {
        props: {
            data,
            display,
            men,
            women,
            kids,
            digital,
            furniture,
            otherServices,
            product,
        },
    };
};

export default memo(index);
