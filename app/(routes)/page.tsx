import getProducts from "@/actions/get-products";
import Banner from "@/components/banner";
import ProductList from "@/components/product-list";
import Container from "@/components/ui/container";

export const revalidate = 0;
export default async function Home() {
  const products = await getProducts();
  return (
    <>
      <Banner />
      <Container>
        <ProductList title="Featured Products" items={products} />
      </Container>
    </>
  );
}
