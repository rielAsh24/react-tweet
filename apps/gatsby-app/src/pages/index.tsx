import React from "react"
import { Tweet } from "react-tweet"
import clsx from "clsx"
import styles from "../styles/app.module.css"
import "../styles/base.css"

export default function IndexPage() {
  return (
    <div className="dark">
      <div className={clsx(styles.root, "react-tweet-theme")}>
        <main className={styles.main}>
          <Tweet id="1628832338187636740" />
        </main>
      </div>
    </div>
  )
}
