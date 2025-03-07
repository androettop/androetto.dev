import * as React from "react"
import * as styles from "./Link.module.css"
import { Link as GastbyLink } from "gatsby"

interface LinkProps {
  to: string
  children: React.ReactNode
}

const Link = ({ to, children }: LinkProps) => {
  return <GastbyLink className={styles.link} to={to}>{children}</GastbyLink>
}

export default Link
