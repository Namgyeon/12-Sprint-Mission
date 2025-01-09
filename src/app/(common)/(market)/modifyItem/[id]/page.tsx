import { PageWrapper } from "@/components/Page";
import ProductForm from "../../_components/ProductForm";
import { getProduct } from "@/service/product";
import { auth } from "@/app/api/auth/auth";
import { redirect } from "next/navigation";
import { Suspense } from "react";
import { Message } from "@/components/ui";

export default async function ModifyItemPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const session = await auth();

  if (!session?.user) {
    redirect("/login");
  }

  const id = (await params).id;
  const detail = await getProduct(Number(id));

  return (
    <PageWrapper>
      <Suspense fallback={<Message>상품정보를 가져오는 중입니다...</Message>}>
        <ProductForm mode="edit" initialData={detail} productId={Number(id)} />
      </Suspense>
    </PageWrapper>
  );
}
