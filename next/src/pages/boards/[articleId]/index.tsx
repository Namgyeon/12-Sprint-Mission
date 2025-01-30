import styles from "./index.module.css";
import { useRouter } from "next/router";
import ArticleSection from "./ArticleSection";
import InputSection from "./InputSection";
import CommentList from "./CommentList";

export default function ArticlePage() {
  const router = useRouter();
  const { articleId } = router.query;
  console.log("아이디", articleId);
  return (
    <div className={styles.container}>
      <ArticleSection articleId={Number(articleId)} />
      <InputSection />
      <CommentList articleId={Number(articleId)} />
    </div>
  );
}
