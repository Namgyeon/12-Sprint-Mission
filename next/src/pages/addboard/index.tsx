import { useEffect, useState } from "react";
import ContentSection from "./components/ContentSection";
import ImageSection from "./components/ImageSection";
import TitleSection from "./components/TitleSection";
import styles from "./index.module.css";
import createArticles from "@/lib/create-articles";

export default function Page() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState<string | null>(null);
  const [deactivate, setDeactivate] = useState(true);

  const handleSubmit = async (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", title);
    formData.append("content", content);
    if (image) {
      formData.append("image", image);
    }

    try {
      await createArticles(formData);
      // 상태 초기화
      setTitle("");
      setContent("");
      setImage(null);
      alert("게시글이 성공적으로 등록되었습니다!");
    } catch (error) {
      console.error("게시글 등록 실패:", error);
      alert("게시글 등록에 실패했습니다.");
    }
  };

  useEffect(() => {
    if (title && content) {
      setDeactivate(false);
    }
  }, [title, content, image]);
  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.head}>
          <h1 className={styles.title}>게시글 쓰기</h1>
          <button disabled={deactivate} type="submit" className={styles.button}>
            등록
          </button>
        </div>
        <TitleSection title={title} setTitle={setTitle} />
        <ContentSection content={content} setContent={setContent} />
        <ImageSection image={image} setImage={setImage} />
      </form>
    </div>
  );
}
