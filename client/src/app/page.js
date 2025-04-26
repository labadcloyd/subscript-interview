import Image from "next/image";
import styles from "./style.module.css";
import { Navbar } from "app/layouts";

export default function Home() {
  return (
    <div className={styles.wrapper}>
      <Navbar />
    </div>
  );
}
