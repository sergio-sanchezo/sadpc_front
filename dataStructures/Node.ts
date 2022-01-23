/*

    Basic Node

*/

export class Node {
  data;
  next: any;
  constructor(data: any) {
    this.data = data;
    this.next = null;
  }
}
