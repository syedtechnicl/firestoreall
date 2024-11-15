import { useEffect, useState } from "react";
import MContext from "./mycontext";
import {
  addDoc,
  collection,
  onSnapshot,
  orderBy,
  query,
  Timestamp,
} from "firebase/firestore";
import { fireDB } from "../../firebase/firebase";

const name = "syed muqtadeer";

const MyState = (props) => {
  const [products, setProducts] = useState({
    title: "",
    price: "",
    imageUrl: "",
    category: "",
    time: Timestamp.now(),
    date: new Date().toLocaleString("en-US", {
      month: "short",
      day: "2-digit",
      year: "numeric",
    }),
  });

  console.log(products);

  const [allProducts, setAllProducts] = useState([]);

  //* Add Product Function
  const addProduct = async () => {
    if (
      products.title == "" ||
      products.price == "" ||
      products.imageUrl == "" ||
      products.description == ""
    ) {
      return alert("required");
    }
    const productRef = collection(fireDB, "products");
    try {
      await addDoc(productRef, products);
      getProducts();
      alert("Product added successfully");
      setTimeout(() => {
        window.location.href = "/";
      }, 800);
      setProducts("");
    } catch (error) {
      console.log(error);
    }
  };

  // * Get Products Function
  const getProducts = async () => {
    try {
      const q = query(collection(fireDB, "products"), orderBy("time"));
      const data = onSnapshot(q, (QuerySnapshot) => {
        let productsArray = [];
        QuerySnapshot.forEach((doc) => {
          productsArray.push({ ...doc.data(), id: doc.id });
        });
        setAllProducts(productsArray);
      });
      return () => data;
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      <MContext.Provider
        value={{ products, setProducts, addProduct, allProducts, name }}
      >
        {props.children}
      </MContext.Provider>
    </>
  );
};
export default MyState;
