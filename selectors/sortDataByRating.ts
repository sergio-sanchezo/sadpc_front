import { qHeap } from "../dataStructures/qHeap";
import { dataType } from "../types/types";

export const sortDataByRating = (data: dataType[]) => {
  const heap = new qHeap(data.length);
  data.forEach((element: any) => {
    heap.insert(element);
  });
  return heap.getHeap();
};
