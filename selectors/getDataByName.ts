import { LinkedList } from "../dataStructures/LinkedList";
import { dataType } from "../types/types";

export const getDataByName = (name = "", data: dataType[]) => {
  if (name.length === 0) {
    return [];
  }
  name = name.toLocaleLowerCase();

  const linkedList = new LinkedList();

  data.forEach((element: any) => {
    linkedList.pushBack(element);
  });

  return linkedList.FindAllByName(name);
};
