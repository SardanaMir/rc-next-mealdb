"use client";
import Link from "next/link";
import styles from "./header.module.css";

export default function Header() {
  return (
    <nav className={styles.root}>
      <ul className={styles.wrapper}>
        <Link href={"/"}>
          <li className={styles.link}>Main</li>
        </Link>
        <Link href={"/about"}>
          <li className={styles.link}>About us</li>
        </Link>
        <Link href={"/mealoftheday"}>
          <li className={styles.link}>Meal of the day</li>
        </Link>
        <Link href={"/categories"}>
          <li className={styles.link}>Categories</li>
        </Link>
        <Link href={"/contacts"}>
          <li className={styles.link}>Contacts</li>
        </Link>
      </ul>
    </nav>
  );
}
