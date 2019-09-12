/** create and export react component */
import React from 'react';
import Layout from '../components/layout';
import {graphql} from 'gatsby';
import Head from "../components/head";

import {documentToReactComponents} from "@contentful/rich-text-react-renderer"; 

export const query =  graphql`
query($slug:String!){
  contentfulBlogBootcamp(slug:{eq:$slug}){
    title
    publishedDate(formatString:"MMMM Do,YYYY")
    body {
      json
    }
  }
}
`;

const Blog = (props) => {
    const options = {
      renderNode:{
        "embedded-asset-block":(node) => { // have to check this in graphql server
          const alt = node.data.target.fields.title['en-US'];
          const url = node.data.target.fields.file['en-US'].url;
          return <img alt={alt} src={url}/>
        }
      }
    }
    return (
         <div>
        <Head title={props.data.contentfulBlogBootcamp.title}/>
        <Layout>
        <h1>{props.data.contentfulBlogBootcamp.title}</h1>
        <p>{props.data.contentfulBlogBootcamp.publishedAt}</p>
        {
          documentToReactComponents(props.data.contentfulBlogBootcamp.body.json,options)
        }
        </Layout>
        </div>
    )
};
export default Blog;