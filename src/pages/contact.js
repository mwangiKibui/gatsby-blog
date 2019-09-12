import React from 'react'
import {Link} from "gatsby"
import Layout from "../components/layout";
const Contact  = () =>  {
    return (
            <Layout>
                <h1>Contact</h1>
                <p> reach me on<Link to="www.twritter.com">twitter</Link></p>
            </Layout> 
    )
}
export default Contact;