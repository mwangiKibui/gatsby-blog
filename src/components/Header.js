import React from 'react';
import {Link,graphql,useStaticQuery} from "gatsby";

import headerStyles from './header.module.scss';


export default function Header() {

    const data = useStaticQuery(graphql`
    query{
        site{
            siteMetadata{
                title
            }
        }
    }
    `);

    return (
        <div className={headerStyles.header}>
            <h1>
                    <Link to="/" className={headerStyles.title} 
                        activeClassName={headerStyles.activeNavItem}>
                        {data.site.siteMetadata.title}
                    </Link>
            </h1>
            <nav>
            <ul className={headerStyles.nav}>
                <li>
                    <Link className={headerStyles.nav_item} 
                        to="/" activeClassName={headerStyles.activeNavItem}>
                        Home
                    </Link>
                </li>
                <li>
                    <Link to="/about" className={headerStyles.nav_item}
                        activeClassName={headerStyles.activeNavItem}>
                        about me
                    </Link>                    
                </li>
                <li>
                    <Link to="/blog" className={headerStyles.nav_item}
                        activeClassName={headerStyles.activeNavItem} >
                        blog
                    </Link>
                </li>
                <li>
                    <Link to="/contact" className={headerStyles.nav_item}
                        activeClassName={headerStyles.activeNavItem} >
                        contact
                    </Link>
                </li>
            </ul>
            </nav>
        </div>
    )
}
