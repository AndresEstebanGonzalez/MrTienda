import React from 'react'

import styles from "../styles/Navbar.module.scss"

export default function Navbar() {
    return (
        <div className={styles.container}>
            <img className={styles.logo} src="src\assets\images\logo\LogoWhiteLetters.png" alt="MR Logo" />
        </div>
    )
}