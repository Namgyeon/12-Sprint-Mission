import styles from "./index.module.css";
import ArticleSection from "./ArticleSection";
import InputSection from "./InputSection";
import CommentList from "./CommentList";
import { GetServerSideProps } from "next";
import getArticle from "@/lib/get-article";
import { Article } from "@/types";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { articleId } = context.params as { articleId: string };

  try {
    const article = await getArticle(Number(articleId));
    if (!article) {
      return { notFound: true };
    }
    return {
      props: {
        articleId: Number(articleId),
        article,
      },
    };
  } catch (error) {
    console.error("Failed to fetch article:", error);
    return { notFound: true };
  }
};

type ArticlePageProps = {
  articleId: number;
  article: Article;
};

export default function ArticlePage({ articleId, article }: ArticlePageProps) {
  console.log("아이디", articleId);
  return (
    <div className={styles.container}>
      <ArticleSection article={article} />
      <InputSection />
      <CommentList articleId={Number(articleId)} />
    </div>
  );
}
