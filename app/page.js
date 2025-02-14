import Image from "next/image";
import styles from "./page.module.css";
import Featured from "@/components/featured";
import CateGoryList from "@/components/categoryList";
import CardList from "@/components/cardlist";
import Menu from "@/components/menu";

export default function Home() {
  return (
    <div className={styles.container}>
      <Featured/>
      <CateGoryList/>
      <div className={styles.content}>
        <CardList/>
        <Menu/>
      </div>
    </div>
  );
}
