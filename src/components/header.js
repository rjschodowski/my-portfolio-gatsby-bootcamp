import React from 'react'
import { Link } from 'gatsby'
// import headerStyles from './header.module.scss'
import { link, header, title, navList, navItem, activeNavItem } from './header.module.scss'

const Header = () => {
    return (
        <header className={header}>
            <h3>
                <Link className={title} to="/">R.J. Schodowski</Link>
            </h3>
            <nav>
                <ul className={navList}>
                    <li>
                        <Link className={navItem} activeClassName={activeNavItem} to="/">Home</Link>
                    </li>
                    <li>
                        <Link className={navItem} activeClassName={activeNavItem} to="/blog">Blog</Link>
                    </li>
                    <li>
                        <Link className={navItem} activeClassName={activeNavItem} to="/about">About</Link>
                    </li>
                    <li>
                        <Link className={navItem} activeClassName={activeNavItem} to="/contact">Contact</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header