/**
 * Configure your Gatsby site with this file.
 * this is a node js file
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
   siteMetadata:{
      title:'full stack bootcamp!',
      author:'kennedy kangi!'
   },
   plugins:[ //sourcing our app to contentful
      'gatsby-plugin-react-helmet',
      {
         resolve:'gatsby-source-contentful',
         options:{
            spaceId:process.env.CONTENTFUL_SPACE_ID,
            accessToken:process.env.CONTENTFUL_ACCESS_TOKEN
         }
      },
      'gatsby-plugin-sass',
      {
         resolve:'gatsby-source-filesystem',
         options:{
            name:'src',
            path:`${__dirname}/src/`
         }
      },
      'gatsby-plugin-sharp',
      {
         resolve: 'gatsby-transformer-remark',
         options:{
            plugins:[ //plugins specific
               'gatsby-remark-relative-images',
               {
                  resolve:'gatsby-remark-images',
                  options:{
                     maxWidth:750,
                     linkImagesToOriginal:false
                  }
               }
            ]
         }
      }    
      
   ]
}
