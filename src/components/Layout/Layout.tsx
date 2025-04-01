import { Link } from "gatsby"
import * as React from "react"
import * as styles from "./Layout.module.css"
import Navbar from "../Navbar/Navbar"
import Container from "../Container/Container"

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
      <Container>
        <Navbar location={location} />
        <main>{children}</main>
      </Container>
    </div>
  )
}

export default Layout
