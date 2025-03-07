import * as React from "react"
import * as styles from "./Bio.module.css"
import { StaticImage } from "gatsby-plugin-image"
import classNames from "classnames"
import Link from "../Link/Link"

const Bio = () => {
  return (
    <div className={styles.bio}>
      <div className={styles["bio__ring"]}>
        <StaticImage
          quality={100}
          src="../../images/icon.png"
          alt="Pablo Androetto"
          width={120}
          height={120}
          placeholder="blurred"
        />
      </div>
      <h1 className={styles["bio__name"]}>Pablo Androetto</h1>
      <Link to="mailto:pablo@androetto.dev">pablo@androett.dev</Link>
      <div className={styles["bio__profiles"]}>
        <Link to="https://github.com/androettop">GitHub</Link>
        <Link to="https://linkedin.com/in/androettop">LinkedIn</Link>
      </div>
    </div>
  )
}

export default Bio
