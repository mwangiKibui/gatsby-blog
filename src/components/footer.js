import React from 'react';
import footerStyles from "./footer.module.scss";
import {graphql,useStaticQuery} from 'gatsby';

const Footer = () => {
    const data = useStaticQuery(graphql`
    query {
        site {
            siteMetadata {
                author
            }
        }
    }
    `);
    return (
        <div className={footerStyles.footer}>
            <footer>
                <p>Created by {data.site.siteMetadata.author} {new Date().getFullYear()}</p>
            </footer>
        </div>
    )
}
export default Footer;