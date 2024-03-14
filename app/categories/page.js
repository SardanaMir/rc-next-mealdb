"use client";
import Header from "@/app/components/Header";
import Link from "next/link";
import { useEffect, useState } from "react";
import { getAllCategories } from "@/api";
import styles from "./categories.module.css";

export default function Categories() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getAllCategories();
        setCategories(res.categories);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };
    fetchData();
  }, []);
  return (
    <>
      <Header />
      <main className={styles.main}>
        {categories.map((category) => (
          <div className={styles.block} key={category.idCategory}>
            <h4 className={styles.title}>{category.strCategory}</h4>
            <Link href={`/categories/${category.strCategory}`}>
              <div>
                <img
                  src={category.strCategoryThumb}
                  alt={category.strCategory}
                />
              </div>
            </Link>
          </div>
        ))}
      </main>
    </>
  );
}
