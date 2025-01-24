export interface Post {
  id: number;
  title: string;
  content: string;
  image: string | null;
  likeCount: number;
  createdAt: string;
  updatedAt: string;
  writer: {
    id: number;
    nickname: string;
  };
}

export interface Posts<T> {
  list: T[];
  totalCount: number;
}

export type OrderByValue = "recent" | "like";
