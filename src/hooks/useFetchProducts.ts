import { useEffect, useState } from "react";

export interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
}

export function useFetchProducts() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);
    fetch('https://fakestoreapi.com/products').then(r => r.json()).then(d => {
      setProducts(Array.isArray(d) ? d : []);
    }).finally(() => setLoading(false));
  }, []);

  return { products, loading };
}
