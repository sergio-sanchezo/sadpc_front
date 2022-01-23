import { BST } from "../dataStructures/BST";
import { dataType } from "../types/types";

export const getMaxByRating = (data: dataType[]) => {
  const bst = new BST();
  data.forEach((element: any) => {
    bst.insert(element, "rating");
  });
  return bst.getMax();
};
