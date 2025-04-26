import styles from "./style.module.css";

export default function Navbar() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <h4>TODO APP</h4>

        <div className={styles.menu}>
          <a>Home</a>
          <a>About</a>
          <a>Contact</a>
        </div>
      </div>
    </div>
  );
}
