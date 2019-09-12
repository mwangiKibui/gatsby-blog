import React from "react";
import {Link} from "gatsby";
import Layout from "../components/layout";
const IndexPage = () => {
    return (
        <div>
            <Layout>
            <h1>Hello!!!</h1>
            <h2>Am kennedy a full stack developer living in Kagochi</h2>
            <p>Need a developer? <Link to="/contact">contact me</Link></p>
            </Layout>
        </div>
    )
};

export default IndexPage;
