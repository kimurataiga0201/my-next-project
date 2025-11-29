import Link from "next/link";
import styles from "./index.module.css";

export default function Menu() {
    return (
        <nav className={styles.nav}>
            <ul className={styles.imtes}>
                <li>
                    <Link href="/news">ニュース</Link>
                </li>