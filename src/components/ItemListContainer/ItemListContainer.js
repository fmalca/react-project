import ItemList from "../ItemList/ItemList";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import {
  collection,
  getFirestore,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import Loading from "../Loading/Loading";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { idCat } = useParams();

  useEffect(() => {
    const db = getFirestore();
    const items = idCat
      ? query(collection(db, "items"), where("category", "==", idCat))
      : collection(db, "items");

    getDocs(items)
      .then((resp) =>
        setProducts(resp.docs.map((prod) => ({ id: prod.id, ...prod.data() })))
      )
      .catch((err) => alert("Error"))
      .finally(() => setLoading(false));
  }, [idCat]);

  return <>{loading ? <Loading /> : <ItemList data={products} />}</>;
};

export default ItemListContainer;
