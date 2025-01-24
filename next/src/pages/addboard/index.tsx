import TitleSection from "./components/TitleSection";
import styles from "./index.module.css";

export default function page() {
  return (
    <div className={styles.container}>
      <div className={styles.head}>
        <h1 className={styles.title}>게시글 쓰기</h1>
        <button className={styles.button}>등록</button>
      </div>
      <form action="" className={styles.form}>
        <TitleSection />
      </form>
    </div>
  );
}
