import styles from "./TitleSection.module.css";
import Input from "@/components/Input";

type TitleSectionProps = {
  title: string;
  setTitle: (value: string) => void;
};

export default function TitleSection({ title, setTitle }: TitleSectionProps) {
  const onChangeTitle = (value: string) => {
    setTitle(value);
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>*제목</h2>
      <Input
        className={styles.titleInput}
        value={title}
        placeholder="제목을 입력해주세요"
        onChange={(e) => onChangeTitle(e.target.value)}
        withImage={false}
      />
    </div>
  );
}
