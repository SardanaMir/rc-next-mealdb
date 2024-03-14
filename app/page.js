"use client";
import { useState, useEffect } from "react";
import { getSomeMeals } from "../api";
import Link from 'next/link'
import Header from "./components/Header";
import Image from "next/image";
import styles from "./page.module.css";
import MealBlock from "./components/MealBlock";

export default function Home() {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getSomeMeals();
        console.log(res.meals);
        setMeals(res.meals);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className={styles.promo}>
      <Header/>
      <p className={styles.title}>Choose your favorite meals</p>
      <div className={styles.container}>
        {meals.length > 0 ? (
          meals.map((meal) => (
            <MealBlock meal={meal}/>
          ))
        ) : (
          <h3>Loading...</h3>
        )}
      </div>
    </div>
  );
}
