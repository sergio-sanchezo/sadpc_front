import { AVL_Tree } from "../dataStructures/AvlTree";
import { dataType } from "../types/types";

export const getMaxAvl = (data: dataType[]) => {
  const myTree = new AVL_Tree();
  let root = null as any;
  data.forEach((element: any) => {
    root = myTree.insert(root, element.ratings, element);
  });
  myTree.preOrder(root);
  return myTree.getMax(root);
};
