import styles from "./InputSection.module.css";
import { useEffect, useState } from "react";
import createComment from "@/lib/create-comment";
import { useRouter } from "next/router";

export default function InputSection() {
  const [comment, setComment] = useState<string>("");
  const [articleId, setArticleId] = useState<number | null>(null);
  const router = useRouter();

  const onChangeComment = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setComment(e.target.value);
  };

  useEffect(() => {
    if (router.query.articleId) {
      setArticleId(Number(router.query.articleId));
    }
  }, [router.query.articleId]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!articleId) {
      alert("게시글 ID가 없습니다.");
      return;
    }
    try {
      await createComment(articleId, comment);
      setComment("");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.container}>
      <label className={styles.title}>댓글달기</label>
      <textarea
        className={styles.comment}
        rows={4}
        value={comment}
        placeholder="댓글을 입력해주세요"
        onChange={onChangeComment}
      />
      <button type="submit" className={styles.btn} disabled={!comment}>
        등록
      </button>
    </form>
  );
}
