import axios from "axios";
import { GetStaticProps } from "next";
import getConfig from "next/config";
import Home from "../component/Home";

const index = ({ data }) => <Home data={data} />;

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
