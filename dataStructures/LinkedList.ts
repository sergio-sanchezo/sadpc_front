/*

    Single Linked List with Tail

*/

import { Node } from "./Node";

export class LinkedList {
  head: any;
  tail: any;
  size: number;
  constructor(head = null) {
    this.head = head;
    this.tail = null;
    this.size = 0;
  }

  clear() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  pushFront(data: any) {
    const newNode = new Node(data);
    newNode.next = this.head;
    this.head = newNode;
    if (this.tail === null) {
      this.tail = this.head;
    }
    this.size = this.size + 1;
  }

  popFront() {
    if (this.head === null) {
      return "Empty list";
    }
    this.head = this.head.next;
    if (this.head === null) {
      this.tail = null;
    }
    this.size = this.size - 1;
  }

  pushBack(data: any) {
    const newNode = new Node(data);
    newNode.next = null;
    if (this.tail === null) {
      this.head = this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.size = this.size + 1;
  }

  popBack() {
    if (this.head === null) {
      return "Empty list";
    }
    if (this.head === this.tail) {
      this.head = this.tail = null;
    } else {
      let temp = this.head;
      while (temp.next.next !== null) {
        temp = temp.next;
      }
      temp.next = null;
      this.tail = temp;
    }
    this.size = this.size - 1;
  }

  getData() {
    let temp = this.head;
    while (temp !== null) {
      console.log(temp.data);
      temp = temp.next;
    }
  }

  FindAllByName(key: string) {
    let temp = this.head;
    const result = [];
    while (temp !== null) {
      if (temp.data.name.toLocaleLowerCase().includes(key)) {
        result.push(temp.data);
      }
      temp = temp.next;
    }
    return result;
  }
}
