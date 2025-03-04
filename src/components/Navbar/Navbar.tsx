import * as React from "react"
import * as styles from "./Navbar.module.css"
import { Link } from "gatsby"
import classNames from "classnames";

interface NavbarProps {
  location: Location
}

const items = [{
  name: "Home",
  link: "/",
  exact: true
}, {
  name: "Experience",
  link: "#experience"
}, {
  name: "Blog",
  link: "/blog"
}, {
  name: "Projects",
  link: "#projects"
}];

const Navbar = ({ location }: NavbarProps) => {
  return (
    <nav className={styles.navbar}>
      <ul>
        {items.map(item => (
          <li key={item.name}>
            <Link to={item.link} className={classNames({
              [styles.active]: item.link.startsWith("/") && (item.exact ? location.pathname === item.link : location.pathname.startsWith(item.link))
            })}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navbar
