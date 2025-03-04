import { Link } from "gatsby"
import * as React from "react"
import * as styles from "./Layout.module.css"
import Navbar from "../Navbar/Navbar"

interface LayoutProps {
  location: Location
  title: string
  children: React.ReactNode
}

const Layout = ({ location, title, children }: LayoutProps) => {
  const rootPath = `/`
  const isRootPath = location.pathname === rootPath

  return (
    <div className={styles.wrapper} data-is-root-path={isRootPath}>
      <Navbar location={location} />
      <main>{children}</main>
    </div>
  )
}

export default Layout
