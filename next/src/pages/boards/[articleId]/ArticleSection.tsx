import styles from "./ArticleSection.module.css";
import getArticle from "@/lib/get-article";
import { Article } from "@/types";
import { useEffect, useState } from "react";
import Image from "next/image";
import formatDate from "@/utils/date";

type ArticleSectionProps = {
  articleId: number;
};

export default function ArticleSection({ articleId }: ArticleSectionProps) {
  const [article, setArticle] = useState<Article | null>(null);

  useEffect(() => {
    if (!articleId) return;

    const fetchData = async () => {
      try {
        const data = await getArticle(articleId);
        setArticle(data);
        console.log(article);
      } catch (err) {
        console.error("failed to fetch article", err);
      }
    };
    fetchData();
  }, [articleId]);

  if (!article) {
    return <div>로딩 중...</div>;
  }

  return (
    <div className={styles.container}>
      <div className={styles.titleSection}>
        <p className={styles.title}>{article.title}</p>
        <Image
          src="/images/ic_kebab.svg"
          alt="더보기 아이콘"
          width={24}
          height={24}
        />
      </div>
      <div className={styles.infoSection}>
        <div className={styles.user}>
          <Image
            src="/images/profile.svg"
            alt="프로필 이미지"
            width={40}
            height={40}
          />
          <p className={styles.nickname}>{article.writer.nickname}</p>
          <p className={styles.date}>{formatDate(article.createdAt)}</p>
        </div>
        <div className={styles.like}>
          <Image
            src="/images/ic_heart.svg"
            alt="하트 아이콘"
            width={32}
            height={32}
          />
          <p className={styles.likeCount}>{article.likeCount}</p>
        </div>
      </div>
      <div className={styles.contentSection}>
        <p className={styles.content}>{article.content}</p>
      </div>
    </div>
  );
}
