/* eslint-disable react/jsx-props-no-spreading */
import CssBaseline from "@material-ui/core/CssBaseline";
import Head from "next/head";
import React from "react";
import Footer from "../component/Footer";
import Navbar from "../component/Navbar";
import SubNav from "../component/Navbar/SubNav";
import ScrollTop from "../component/utils/ScrollToTop";

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                <title>Shopper - web store</title>
                <link rel="shortcut icon" href="/img/favicon.ico" type="image/x-icon" />
            </Head>
            <CssBaseline />
            <Navbar />
            <SubNav />
            <div
                style={{
                    background: "url('/img/white_leather.png')"
                }}
            >
                <Component {...pageProps} />
            </div>
            <Footer />
            <ScrollTop />
        </>
    );
}

export default MyApp;
