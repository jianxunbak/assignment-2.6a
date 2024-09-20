import { useContext } from "react";

import styles from "./Product.module.css";
import Card from "./Card";
import ViewList from "./ViewList";
import { ProductContext } from "./context/ProductContext";
import { UserContext } from "./context/UserContext";

function Product() {
  // Step 4: Apply the useContext hook
  const productCtx = useContext(ProductContext);
  const { list, sumTotal } = productCtx;

  const userCtx = useContext(UserContext);
  const { credentials } = userCtx;

  return (
    <div className={styles.container}>
      <p> {credentials.username}</p>
      <Card />
      <ViewList list={list} sum={sumTotal} />
    </div>
  );
}
export default Product;

// 4 Steps to use React Context
// Step 1: Create a context object
// Step 2: Set up a Context Provider
// Step 3: Add Context Provider to Top Level component
// Step 4: Apply the useContext hook
