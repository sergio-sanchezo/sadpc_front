/*

    Heap

*/

export class qHeap {
  maxSize: any;
  H: any[];
  size: number;
  constructor(maxSize: any) {
    this.maxSize = maxSize + 1;
    this.H = [];
    this.size = -1;
  }

  parent(i: number) {
    return Math.trunc((i - 1) / 2);
  }

  leftChild(i: number) {
    return 2 * i + 1;
  }

  rightChild(i: number) {
    return 2 * i + 2;
  }

  swap(i: number, j: number) {
    const temp = this.H[i];
    this.H[i] = this.H[j];
    this.H[j] = temp;
  }

  shiftUp(ix: number) {
    let i = ix;
    while (i > 0 && this.H[this.parent(i)].ratings < this.H[i].ratings) {
      this.swap(this.parent(i), i);
      i = this.parent(i);
    }
  }

  shiftDown(i: number) {
    let maxIndex = i;

    //left child
    const l = this.leftChild(i);

    if (l <= this.size && this.H[l].ratings > this.H[maxIndex].ratings) {
      maxIndex = l;
    }

    const r = this.rightChild(i);

    if (r <= this.size && this.H[r].ratings > this.H[maxIndex].ratings) {
      maxIndex = r;
    }

    if (i !== maxIndex) {
      this.swap(i, maxIndex);
      this.shiftDown(maxIndex);
    }
  }

  insert(p: any) {
    this.size = this.size + 1;
    this.H[this.size] = p;
    this.shiftUp(this.size);
  }

  extractMax() {
    const result = this.H[0];
    this.H[0] = this.H[this.size];
    this.size = this.size - 1;

    this.shiftDown(0);
    return result;
  }

  changePriority(i: number, p: any) {
    // revisar que p venga de la pos 0 de la tuple
    const oldP = this.H[i][0];
    this.H[i][0] = p;

    if (p > oldP) {
      this.shiftUp(i);
    } else {
      this.shiftDown(i);
    }
  }

  getMax() {
    return this.H[0];
  }

  remove(i: number) {
    this.H[i] = this.getMax() + 1;

    this.shiftUp(i);

    this.extractMax();
  }

  getHeap() {
    const result = [];
    for (let i = 1; i < this.maxSize; i++) {
      result.push(this.extractMax());
    }
    return result;
  }
}
