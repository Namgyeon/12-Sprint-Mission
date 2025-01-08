"use client";
import useComments from "./useComments";
import { Alert, Message } from "@components/ui";
import { Comment } from "./Comment";
import emptyIcon from "@assets/img/icon/icon_inquiry_empty.svg";
import styles from "./CommentList.module.scss";
import { BoardName, CommentList as CommentListType } from "@type/comment";

interface CommentListProps {
  name: BoardName;
  comments: CommentListType;
}

export function CommentList({
  name,
  comments: initialComments,
}: CommentListProps) {
  const { comments, handleLoad, isLoading, error } = useComments(
    name,
    initialComments
  );
  const { list, nextCursor } = comments;

  return (
    <div className={styles.comments}>
      {list.length === 0 ? (
        <Message icon={emptyIcon} alt="문의가 없습니다.">
          아직 문의가 없어요
        </Message>
      ) : (
        <ul className={styles.list}>
          {list?.map((comment) => (
            <Comment key={comment.id} name={name} comment={comment} />
          ))}
        </ul>
      )}
      {error && <Alert>{error.message}</Alert>}

      {nextCursor && (
        <div className={styles.control}>
          {isLoading ? (
            <Message compact>문의를 더 불러오고 있습니다.</Message>
          ) : (
            <button
              type="button"
              className={styles.button}
              onClick={handleLoad}
            >
              더보기
            </button>
          )}
        </div>
      )}
    </div>
  );
}
