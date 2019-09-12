import React from 'react'
import {Link} from "gatsby"
import Layout from "../components/layout";
import Head from '../components/head';
const Contact  = () =>  {
    return (
           <div>
            <Head title="contact"/>
            <Layout>
                <h1>Contact</h1>
                <p> reach me on<Link to="www.twritter.com">twitter</Link></p>
            </Layout> 
           </div>
    )
}
export default Contact;