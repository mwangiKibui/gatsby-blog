  /** this is a configuration file for node js */
  const path = require('path');

 

  module.exports.createPages = async ({graphql,actions}) => {
      const {createPage} = actions;
      /** dynamically create pages */
      //get path to template

      const blogTemplate = path.resolve('./src/templates/blog.js');

      //get markdown data --- the graphql returns a promise
       const res = await graphql(`
            query{
                allContentfulBlogBootcamp {
                    edges {
                        node {
                            slug
                        }
                    }
                }
            }
       `)
       res.data.allContentfulBlogBootcamp.edges.forEach(edge => {
           createPage({ //has the following params
               component:blogTemplate,
               path:`/blog/${edge.node.slug}`,
               context:{
                   slug:edge.node.slug
               } //we shall send the following slug to page
           })
       });

      //create new pages
  }