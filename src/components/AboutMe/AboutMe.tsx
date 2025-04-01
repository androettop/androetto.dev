import * as React from "react"
import * as styles from "./AboutMe.module.css"
import Link from "../Link/Link"

const AboutMe = () => {
  return (
    <div className={styles.about}>
      <p>
        Hi! I'm Pablo Androetto, and for over 10 years, I've been building,
        experimenting, and bringing ideas to life.
      </p>
      <p>
        Since childhood, I've been passionate about technology, starting by
        creating simple games, graphic and web design, tinkering with
        electronics, embedded systems, and reverse engineering. Over time, I
        realized that what I really love is to create software that solves real
        problems.
      </p>
      <p>
        I firmly believe that no matter how complex a problem is, the best
        solution is always the simplest one. Finding it is not always easy, but
        that's the part I enjoy the most.
      </p>
      <p>
        On this website, I share my experiences, projects, and technical
        explorations. If you're curious about what I do, check out my{" "}
        <Link to="/blog">blog</Link>, where I document my work, insights,
        experiments, and beyond.
      </p>
    </div>
  )
}

export default AboutMe
