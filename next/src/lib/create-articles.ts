import { baseURL } from "@/constants";

type FormData = {
  title: string;
  content: string;
  image: string;
};

export default async function createArticles(formData: FormData) {
  console.log(baseURL);
  try {
    const response = await fetch(`${baseURL}/articles`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    if (!response.ok) {
      throw new Error("articles를 생성하는데 실패했습니다.");
    }
    const result = await response.json();
    console.log("Success:", result);
  } catch (error) {
    console.error("게시글 생성 실패", error);
  }
}
