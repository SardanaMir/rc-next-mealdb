import Header from "../components/Header";
import styles from "./contacts.module.css";

export default function Contacts() {
  return (
    <main className={styles.main}>
      <Header />
      <div className={styles.container}>
        <h2 className={styles.title}>Contacts</h2>
        <h4>E-mail:</h4><p>mealdb@gmail.com</p>
      </div>
    </main>
  );
}
