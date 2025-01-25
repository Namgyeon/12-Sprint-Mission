import styles from "./TitleSection.module.css";
import Input from "@/components/Input";
import { useState } from "react";

export default function TitleSection() {
  const [value, setValue] = useState("");
  const onChange = () => {};

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>*제목</h2>
      <Input
        className={styles.titleInput}
        value={value}
        placeholder="제목을 입력해주세요"
        onChange={onChange}
        withImage={false}
      />
    </div>
  );
}
