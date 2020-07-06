import React from "react";
import { wrapper } from "../store";
import "../styles/global.css";

const MyApp = ({ Component, pageProps }) => <Component {...pageProps} />;

export default wrapper.withRedux(MyApp);
