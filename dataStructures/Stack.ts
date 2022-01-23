export class Stack {
  data: any[];
  constructor() {
    this.data = [];
  }

  getSize() {
    return this.data.length;
  }

  isEmpty() {
    return this.data.length === 0;
  }

  peek() {
    if (this.isEmpty()) {
      return;
    }
    return this.data[this.data.length - 1];
  }

  pushData(data: any) {
    this.data.push(data);
  }

  popData() {
    return this.data.pop();
  }

  undo_redo(stack: Stack) {
    const data = this.popData();
    stack.pushData(data);
  }
}
