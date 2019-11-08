import React from "react"
import { Link } from "gatsby"
import styles from "./navigation.module.css"

export default () => (
  <nav role="navigation">
    <ul className={styles.navigation}>
      <li className={styles.navigationItem}>
        <Link to="/">Home</Link>
      </li>
      <li className={styles.navigationItem}>
        <Link to="/about">About</Link>
       </li>
      <li className={styles.navigationItem}>
        <Link to="/work">Work</Link>
       </li>
      <li className={styles.navigationItem}>
        <a href="https://google.com/" target="_blank" rel="noopener noreferrer">Newsletter</a>
       </li>
      <li className={styles.navigationItem}>
        <Link to="/writing">Writing</Link>
       </li>
    </ul>
  </nav>
)
