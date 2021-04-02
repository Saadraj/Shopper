import Box from "@material-ui/core/Box";
import Divider from "@material-ui/core/Divider";
import React from "react";
import CustomerFeedback from "./CustomerFeedback";
import DisplayProduct from "./DisplayProduct";
import Feature from "./Feature";
import Latest from "./Latest";
import Partner from "./Partners";

function Home({ data }) {
    return (
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
}

export default Home;
