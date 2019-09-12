import React from "react";
import Layout from '../components/layout';
import blogStyles from "./blog.module.scss";

import {graphql,useStaticQuery,Link} from 'gatsby';

//we should also fetch the slugs

const BlogPage = () => {
      // start by getting a list of titles
      const data = useStaticQuery(graphql`
      query{
           allMarkdownRemark{
                edges{
                     node{
                          frontmatter{
                               title
                          }
                          fields{
                               slug
                          }
                     }
                }
           }
      }
      `);
      return (
       <Layout>
            <h1>Blog</h1>
            <ol className={blogStyles.posts}>
                 {
                      data.allMarkdownRemark.edges.map((edge,index) => {
                         return (
                              <li key={index} >
                                   <Link to={`/blog/${edge.node.fields.slug}`} className={blogStyles.post}>
                                        {edge.node.frontmatter.title}
                                   </Link>
                              </li>
                         )
                      })
                 }
            </ol>
        </Layout>
      )
};

export default BlogPage;