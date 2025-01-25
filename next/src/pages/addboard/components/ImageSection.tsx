import { useState } from "react";
import styles from "./ImageSection.module.css";
import Image from "next/image";

export default function ImageSection() {
  const [image, setImage] = useState<string | null>(null);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]; // 첫번째 파일만 가져옴.(1개)
    if (file) {
      const reader = new FileReader(); // FileReader 브라우저에서 파일을 읽는데 사용되는 기본 API.
      reader.onloadend = () => {
        setImage(reader.result as string);
      };
      reader.readAsDataURL(file); // 파일 데이터를 Base64로 변환.
    }
  };

  const handleImageDelete = (e: React.MouseEvent<HTMLImageElement>) => {
    setImage(null);
    e.preventDefault();
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>이미지</h2>
      <label htmlFor="image-upload" className={styles.label}>
        <div className={styles.labelContent}>
          {image ? (
            <div className={styles.imageContainer}>
              <Image
                src={image}
                alt="상품이미지 미리보기"
                width={282}
                height={282}
              />
              <Image
                className={styles.delete}
                src={"/images/ic_X.svg"}
                alt="삭제 버튼이미지"
                width={24}
                height={24}
                onClick={handleImageDelete}
              />
            </div>
          ) : (
            <>
              <Image
                src={"/images/ic_plus.svg"}
                alt="플러스 이미지"
                width={48}
                height={48}
              />
              <span className={styles.span}>이미지 등록</span>
            </>
          )}
        </div>
        <input
          id="image-upload"
          type="file"
          accept="image/png, image/jpeg"
          className={styles.input}
          placeholder="이미지 등록"
          onChange={handleImageUpload}
        />
      </label>
    </div>
  );
}
