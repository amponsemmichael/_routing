import Link from "next/link";
import styles from "./projects.module.css";

export default function ProjectList() {
  return (
    <main>
      <h1>ProjectList</h1>

      <ul className={styles.ul}>
        <li>
          <Link href="/projects/mart">Lizmart</Link>
        </li>
        <li>
          <Link href="/projects/profile">Michael Amponsem</Link>
        </li>
        <li>
          <Link href="/projects/blog">Educational Info</Link>
        </li>
      </ul>
    </main>
  );
}
