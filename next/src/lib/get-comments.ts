import { baseURL } from "@/constants";
import { Comments, Comment } from "@/types";

export default async function getComments(
  articleId: number,
  limit: number = 3
): Promise<Comment[]> {
  const params = new URLSearchParams({
    limit: String(limit),
  });

  try {
    const response = await fetch(
      `${baseURL}/articles/${articleId}/comments?${params.toString()}`
    );
    if (!response.ok) {
      throw new Error(`Failed to fetch, ${response.statusText}`);
    }
    const data: Comments<Comment> = await response.json();
    return data.list;
  } catch (err) {
    console.error("댓글 가져오기 실패:", err);
    return [];
  }
}
