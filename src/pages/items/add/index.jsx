import { useNavigate } from "react-router-dom";
import { useAuth } from "@/context/useAuth";
import Button from "@/components/Button";
import Container from "@/components/Container";
import { Input, Textarea, TagsInput, FileInput } from "@/components/Field";
import Section from "@/components/Section";
import useForm from "@/hooks/useForm";
import LoadingSpinner from "@/components/LoadingSpinner";
import Alert from "@/components/Alert";
import { addProduct, uploadProductImage } from "@/service/product";

const formSchema = {
  images: {
    value: undefined,
    rule: {
      required: "이미지를 업로드해주세요",
    },
  },
  tags: {
    value: "",
    rule: {
      required: "태그를 입력해주세요",
      patterns: [
        {
          regex: /^[^!@#$%^&*(),.?":{}|<>_\-+=\[\]\\\/`~';]*$/,
          message: "특수문자는 사용할 수 없습니다.",
        },
      ],
    },
  },
  name: {
    value: "",
    rule: {
      required: "상품명을 입력해주세요",
    },
  },
  description: {
    value: "",
    rule: {
      required: "상품소개를 입력해주세요",
    },
  },
  price: {
    value: 0,
    rule: {
      required: "판매 가격을 입력해주세요",
      patterns: [
        {
          regex: /^[0-9]*$/,
          message: "숫자만 입력해주세요",
        },
      ],
    },
  },
};

export default function ItemAdd() {
  const {
    formError,
    isFormValid,
    isLoading,
    handleChange,
    handleSubmit,
    register,
  } = useForm(formSchema);
  const { asyncWithAuth } = useAuth();
  const navigate = useNavigate();

  async function onSubmit(data) {
    try {
      if (data.images) {
        const imgFormData = new FormData();
        imgFormData.append("image", data.images);
        const { url } = await asyncWithAuth(uploadProductImage, imgFormData);
        data.images = [url];
      }

      if (tags) {
        data.tags = data.tags.split(" ");
      }

      const res = await asyncWithAuth(addProduct, data);
      alert("성공적으로 작성했습니다.");
      navigate("/items");
    } catch (err) {
      throw err;
    }
  }

  return (
    <Container>
      <Section>
        {isLoading && <LoadingSpinner />}
        {formError && (
          <Alert mode="error">
            {formError.message || "오류가 발생했습니다."}
          </Alert>
        )}
        <form onSubmit={handleSubmit(onSubmit)}>
          <Section.Header title="상품 등록하기">
            <Button type="submit" size="sm" disabled={!isFormValid}>
              등록
            </Button>
          </Section.Header>
          <Section.Content>
            <FileInput
              label="상품 이미지"
              {...register("images")}
              onChange={handleChange}
            />
            <Input
              type="text"
              label="상품명"
              placeholder="상품명 입력해주세요"
              {...register("name")}
            />
            <Textarea
              label="상품명"
              placeholder="상품명 입력해주세요"
              {...register("description")}
            />
            <Input
              type="number"
              label="판매 가격"
              placeholder="판매 가격을 입력해주세요"
              {...register("price")}
            />
            <TagsInput
              label="태그"
              placeholder="태그를 입력해주세요"
              {...register("tags")}
              onChange={handleChange}
            />
          </Section.Content>
        </form>
      </Section>
    </Container>
  );
}
