import styles from "./ContentSectoin.module.css";

export default function ContentSection() {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>*내용</h2>
      <textarea
        className={styles.textarea}
        rows={13}
        placeholder="내용을 입력해주세요"
      />
    </div>
  );
}
