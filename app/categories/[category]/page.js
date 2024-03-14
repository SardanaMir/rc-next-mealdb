"use client";
import Header from "@/app/components/Header";
import MealBlock from "@/app/components/MealBlock";
import { useEffect, useState } from "react";
import { getMealsByCategory } from "@/api";
import styles from "./category.module.css";

export default function MealsByCategory({ params }) {
  const [meals, setMeal] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getMealsByCategory(params.category);
        console.log(res.meals);
        setMeal(res.meals);
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
        <h2 className={styles.title}>{params.category}</h2>
        <div className={styles.container}>
          {meals.map((meal) => (
            <MealBlock meal={meal} />
          ))}
        </div>
      </main>
    </>
  );
}
