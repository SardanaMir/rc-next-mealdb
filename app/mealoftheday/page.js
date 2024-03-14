"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { getMealOfTheDay } from "@/api";
import Header from "@/app/components/Header";
import styles from "./mealoftheday.module.css";

export default function MealOfTheDay() {
  const [meal, setMeal] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getMealOfTheDay();
        console.log(res);
        setMeal(res.meals[0]);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <Header />
      <main>
        <div className={styles.container}>
          <h2 className={styles.title}>The Meal of the Day</h2>
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
