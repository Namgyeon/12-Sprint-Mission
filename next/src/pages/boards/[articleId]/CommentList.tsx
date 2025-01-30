import styles from "./CommentList.module.css";
import getComments from "@/lib/get-comments";
import { Comment as CommentType } from "@/types";
import { useEffect, useState } from "react";
import Comment from "./Comment";
import Image from "next/image";

type CommentListProps = {
  articleId: number;
};

export default function CommentList({ articleId }: CommentListProps) {
  const [comments, setComments] = useState<CommentType[]>([]);

  console.log("아이디2", articleId);
  console.log(comments);

  useEffect(() => {
    //  index페이지에서 router로 articleId를 가져올때 undefined가 출력됨.
    //  CommentList컴포넌트에서 NaN값을 갖게 되고 그 후 정상적인 articleId값을 가져옴.
    //  그에 따른 에러처리.
    if (!articleId || isNaN(articleId)) return;

    async function fetchComments() {
      try {
        const data = await getComments(articleId, 3);
        setComments(data);
      } catch (err) {
        console.error("댓글을 불러오는중 오류 발생 :", err);
      }
    }
    fetchComments();
  }, [articleId]);
  return (
    <div className={styles.container}>
      {comments.length === 0 ? (
        <Image
          src="/images/comments_null.svg"
          alt="댓글 없음"
          width={151}
          height={208}
        />
      ) : (
        comments.map((comment) => (
          <Comment key={comment.id} comment={comment} />
        ))
      )}
    </div>
  );
}
