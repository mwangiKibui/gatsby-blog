import React from "react";
import {Link} from "gatsby";
import Layout from '../components/layout';
import Head from "../components/head";

const NotFound = () => {
    return (
        <div>
        <Head title="not found page"/>
        <Layout>
            <h1>Hey you are lost!!</h1>
            <p><Link to="/">Head home</Link></p>
        </Layout>
        </div>
    )
};
export default NotFound;