import React from "react";
import Layout from '../components/layout';
import blogStyles from "./blog.module.scss";
import Head from "../components/head";


import {graphql,useStaticQuery,Link} from 'gatsby';

//we should also fetch the slugs

const BlogPage = () => {
      // start by getting a list of titles
      const data = useStaticQuery(graphql`
      query{
           allContentfulBlogBootcamp(
                sort:{
                     fields:publishedDate,
                     order:DESC
                }
           ){
                edges{
                     node{
                          title
                          slug
                          publishedDate(fromNow:true)
                     }
                }
           }
      }
      `);
      return (
      <div>
           <Head title="blogPage" />
       <Layout>
            <h1>Blog</h1>
            <ol className={blogStyles.posts}>
                 {
                      data.allContentfulBlogBootcamp.edges.map((edge,index) => {
                         return (
                              <li key={index} >
                                   <Link to={`/blog/${edge.node.slug}`} className={blogStyles.post}>
                                        <h4>{edge.node.title}</h4>
                                        <p>{edge.node.publishedDate}</p>
                                   </Link>
                              </li>
                         )
                      })
                 }
            </ol>
        </Layout>
        </div>
      )
};

export default BlogPage;