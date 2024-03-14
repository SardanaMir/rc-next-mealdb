"use client";
import Link from "next/link";
import styles from "./mealblock.module.css";

export default function MealBlock({meal}) {
  return (
    <div className={styles.block} key={meal.idMeal}>
    <h3 className={styles.mealTitle}>{meal.strMeal}</h3>
    <div className={styles.imgWrapper}>
      <Link href={`/recipe/${meal.idMeal}`}>
      <img
        className={styles.img}
        src={meal.strMealThumb}
        alt={meal.strMeal}
      />
      </Link>
    </div>
  </div>
  );
}