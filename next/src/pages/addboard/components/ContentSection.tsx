import styles from "./ContentSectoin.module.css";

type ContentSectionProps = {
  content: string;
  setContent: (value: string) => void;
};

export default function ContentSection({
  content,
  setContent,
}: ContentSectionProps) {
  const onChangeContent = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>*내용</h2>
      <textarea
        value={content}
        className={styles.textarea}
        rows={13}
        placeholder="내용을 입력해주세요"
        onChange={onChangeContent}
      />
    </div>
  );
}
