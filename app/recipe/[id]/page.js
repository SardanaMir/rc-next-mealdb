"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { getMealById } from "@/api";
import Header from "@/app/components/Header";
import styles from "./id.module.css";

export default function Recipe({ params }) {
  const router = useRouter();
  const id = params.id;
  // const {id} = router.query
  // console.log(router.query)
  const [meal, setMeal] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getMealById(id);
        console.log(res);
        setMeal(res.meals[0]);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };
    if (id) {
      fetchData();
    }
  }, [id]);

  return (
    <>
      <Header />
      <main>
        <div className={styles.container}>
          <div className={styles.imgWrapper}>
            <img
              className={styles.img}
              src={meal.strMealThumb}
              alt={meal.strMeal}
            />
          </div>
          <h2 className={styles.title}>{meal.strMeal}</h2>
          <h4>Category: {meal.strCategory}</h4>
          <h4>Country: {meal.strArea}</h4>
          <p>{meal.strInstructions}</p>
        </div>
      </main>
    </>
  );
}
