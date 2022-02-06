import { HashTable } from "../dataStructures/HashTable";
import { dataType } from "../types/types";

export const makeHash = (data: dataType[]) => {
  const ht = new HashTable();
  data.forEach((element: any) => {
    console.log(element.name);
    ht.set(element.name, { ...element });
  });
  return ht;
};
