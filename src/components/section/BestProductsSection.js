import { useEffect, useState, useCallback } from "react";
import { Link } from "react-router-dom";
import { fetchProducts } from "../../api/product.js";
import ItemCard from "../ui/Item/ItemCard.js";
import "./BestProductsSection.css";

const getPageSize = () => {
  const width = window.innerWidth;
  if (width > 1199) {
    return 4;
  } else if (width > 768) {
    return 2;
  } else {
    return 1;
  }
};

function BestProductsSection() {
  const [items, setItems] = useState([]);
  const [pageSize, setPageSize] = useState(null);

  const getProducts = async () => {
    if (pageSize !== null) {
      const { list } = await fetchProducts("favorite", pageSize);
      setItems(list);
    }
  };

  const handleResize = useCallback(() => {
    const newPageSize = getPageSize();
    if (newPageSize !== pageSize) {
      setPageSize(newPageSize);
    }
  }, [pageSize]);

  useEffect(() => {
    const initialPageSize = getPageSize();
    setPageSize(initialPageSize);

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [handleResize]);

  useEffect(() => {
    getProducts();
  }, [pageSize]);

  return (
    <section className="best-products">
      <h2 className="best-products-title">베스트 상품</h2>
      <div className="best-product-list">
        {items?.map((item) => (
          <Link to="/items" className="item-link">
            <ItemCard item={item} key={item.id}></ItemCard>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default BestProductsSection;
