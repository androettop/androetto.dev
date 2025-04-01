import * as React from "react"
import * as styles from "./Container.module.css"

interface ContainerProps {
  children: React.ReactNode | React.ReactNode[]
}

const Container = ({ children }: ContainerProps) => {
  return <div className={styles.container}>{children}</div>
}

export default Container
