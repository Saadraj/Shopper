import CssBaseline from "@material-ui/core/CssBaseline";
import Head from "next/head";
import React, { createContext, useReducer } from "react";
import Footer from "../component/Footer";
import Navbar from "../component/Navbar";
import SubNav from "../component/Navbar/SubNav";
import ScrollTop from "../component/utils/ScrollToTop";
import "../Firebase";
import rootReducer from "../redux/reducers";
const initialState = {
    uid: null,
    view: {},
    cart: [],
};

export const StoreContext = createContext(null);

function MyApp({ Component, pageProps }) {
    const [store, dispatch] = useReducer(rootReducer, initialState);
    const state = React.useMemo(() => ({ store, dispatch }), [store]);
    return (
        <>
            <Head>
                <title>Shopper - web store</title>
                <link
                    rel="shortcut icon"
                    href="/img/favicon.ico"
                    type="image/x-icon"
                />
            </Head>
            <StoreContext.Provider value={state}>
                <CssBaseline />
                <Navbar />
                <SubNav />
                <div
                    style={{
                        background: "url('/img/white_leather.png')",
                    }}
                >
                    <Component {...pageProps} />
                </div>
                <Footer />
                <ScrollTop />
            </StoreContext.Provider>
        </>
    );
}

export default MyApp;
