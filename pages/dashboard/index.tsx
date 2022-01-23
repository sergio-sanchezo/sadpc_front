import React from "react";
import Layout from "../../components/Principal/Layout";
import { BST } from "../../dataStructures/BST";

const index = () => {
  const bst = new BST();
  bst.insert({ id: 8, name: "test" }, "id");
  bst.insert({ id: 3, name: "test" }, "id");
  bst.insert({ id: 6, name: "test" }, "id");
  bst.insert({ id: 1, name: "test" }, "id");
  bst.insert({ id: 10, name: "test" }, "id");
  bst.insert({ id: 14, name: "test" }, "id");
  bst.insert({ id: 13, name: "test" }, "id");
  bst.insert({ id: 4, name: "test" }, "id");
  bst.insert({ id: 7, name: "test" }, "id");
  bst.insert({ id: 20, name: "test" }, "id");
  bst.insert({ id: -17, name: "test" }, "id");
  console.log(bst.printResult("id"));
  console.log("======================");
  console.log(bst.getMin().label);
  return (
    <Layout selectedKey={["1"]}>
      <h2>Dashboard</h2>
    </Layout>
  );
};

export default React.memo(index);
