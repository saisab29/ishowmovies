import React from 'react'
import { Search } from "react-feather"
import { Link } from 'react-router-dom'
import Logo from './Logo.jsx';

import styles from './Navbar.module.css'

function Navbar() {
    return (
        <div className={styles.container}>
            <Link to="/" className={styles.logo}><Logo /></Link>

            <div className={styles.right}>
                <div className={styles.search}>
                    <input type="text" placeholder="Search movie" />
                    <Search />
                </div>

                <p className={styles.link}>
                    <Link to="/explore">Explore</Link>


                </p>
            </div>
        </div>
    )
}

export default Navbar