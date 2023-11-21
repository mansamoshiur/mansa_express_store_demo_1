import { FaBolt } from "react-icons/fa6";
import { Product } from "@/types";
import Container from "./ui/container";
import ProductCard from "./ui/product-card";


interface ProductListProps {
  title: string;
  items: Product[];
}
const ProductList = ({ title, items }: ProductListProps) => {
  return (
    <Container>
      <div className="space-y-4">
        <div className="flex items-center gap-x-2">
          <FaBolt size={25} className="text-[#e94560]" />
          <h3 className="font-bold text-3xl">{title}</h3>
        </div>
       <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
       {items.map((item)=>(
        <ProductCard key={item.id} data={item} />
        ))}
       </div>
      </div>
    </Container>
  );
};

export default ProductList;
