  /** this is a configuration file for node js */
  const path = require('path');

  module.exports.onCreateNode = ({node,actions}) => {
        const {createNodeField} = actions;

        //we get only the files with the md
        if(node.internal.type === "MarkdownRemark"){
            const slug = path.basename(node.fileAbsolutePath,'.md');
            //we create the nodes
            console.log('@@@slug ',slug);
            createNodeField({
                node,
                name:'slug',
                value:slug
            })
        }
        
  };

  module.exports.createPages = async ({graphql,actions}) => {
      const {createPage} = actions;
      /** dynamically create pages */
      //get path to template

      const blogTemplate = path.resolve('./src/templates/blog.js');

      //get markdown data --- the graphql returns a promise
       const res = await graphql(`
            query{
                allMarkdownRemark {
                    edges {
                        node {
                            fields {
                                slug
                            }
                        }
                    }
                }
            }
       `)
       res.data.allMarkdownRemark.edges.forEach(edge => {
           createPage({ //has the following params
               component:blogTemplate,
               path:`/blog/${edge.node.fields.slug}`,
               context:{
                   slug:edge.node.fields.slug
               }
           })
       });

      //create new pages
  }