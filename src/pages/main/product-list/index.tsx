import React from "react";
import { Dessert } from "@/constants/type";
import ProductCard from "@/components/product-card";

const ProductList: React.FC = () => {
  const [data, setData] = React.useState<Dessert[]>([]);

  React.useEffect(() => {
    fetch("datas/data.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setData(data);
      });
  }, []);

  return (
    <div className="grid grid-cols-3 gap-x-4 gap-y-4 max-lg:grid-cols-1">
      {data.map((data, index) => (
        <React.Fragment key={index}>
          <ProductCard data={data} />
        </React.Fragment>
      ))}
    </div>
  );
};

export default ProductList;
