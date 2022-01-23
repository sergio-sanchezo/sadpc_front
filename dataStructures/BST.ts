class NodeBST {
  label: any;
  left: NodeBST | null;
  right: NodeBST | null;
  parent: NodeBST | null;
  constructor(label: any, parent: NodeBST | null) {
    this.label = label;
    this.left = null;
    this.right = null;
    this.parent = parent;
  }

  getLabel(key: string) {
    return this.label[key];
  }

  setLabel(label: any) {
    this.label = label;
  }

  getLeft() {
    return this.left;
  }

  setLeft(left: NodeBST | null) {
    this.left = left;
  }

  getRight() {
    return this.right;
  }

  setRight(right: NodeBST | null) {
    this.right = right;
  }

  getParent() {
    return this.parent;
  }

  setParent(parent: NodeBST) {
    this.parent = parent;
  }
}

export class BST {
  root: any;
  constructor() {
    this.root = null;
  }

  empty() {
    if (this.root === null) {
      return true;
    }
    return false;
  }

  getRoot() {
    return this.root;
  }

  __isRightChildren(node: NodeBST) {
    if (node === node.getParent()?.getRight()) {
      return true;
    }
    return false;
  }

  __reassignNodes(node: NodeBST, newChildren: NodeBST | null) {
    if (newChildren !== null) {
      newChildren.setParent(node.getParent() as NodeBST);
    }
    if (node.getParent() !== null) {
      if (this.__isRightChildren(node)) {
        node.getParent()?.setRight(newChildren);
      } else {
        node.getParent()?.setLeft(newChildren);
      }
    }
  }

  getNode(label: any, key: string) {
    let curr_node: NodeBST | null = null;
    if (!this.empty()) {
      curr_node = this.getRoot();
      while (curr_node !== null && curr_node.getLabel(key) !== label) {
        if (label < curr_node.getLabel(key)) {
          curr_node = curr_node.getLeft();
        } else {
          curr_node = curr_node.getRight();
        }
      }
    }
    return curr_node;
  }

  getMax(root: NodeBST | null = null) {
    let curr_node: NodeBST;
    if (root !== null) {
      curr_node = root as NodeBST;
    } else {
      curr_node = this.getRoot() as NodeBST;
    }

    if (!this.empty()) {
      while ((curr_node as NodeBST).getRight() !== null) {
        curr_node = curr_node.getRight() as NodeBST;
      }
    }
    return curr_node;
  }

  getMin(root: NodeBST | null = null) {
    let curr_node: NodeBST;
    if (root !== null) {
      curr_node = root as NodeBST;
    } else {
      curr_node = this.getRoot() as NodeBST;
    }

    if (!this.empty()) {
      curr_node = this.getRoot();
      while ((curr_node as NodeBST).getLeft() !== null) {
        curr_node = curr_node.getLeft() as NodeBST;
      }
    }
    return curr_node;
  }

  __inOrderTraversal(curr_node: NodeBST | null) {
    let nodeList: any[] = [];
    if (curr_node !== null) {
      nodeList.splice(0, 0, curr_node);
      nodeList = nodeList.concat(this.__inOrderTraversal(curr_node.getLeft()));
      nodeList = nodeList.concat(this.__inOrderTraversal(curr_node.getRight()));
    }
    return nodeList;
  }

  inPreOrder(curr_node: NodeBST | null, key: string) {
    let nodeList: any[] = [];
    if (curr_node !== null) {
      nodeList = nodeList.concat(this.inPreOrder(curr_node.getLeft(), key));
      nodeList.splice(0, 0, curr_node.getLabel(key));
      nodeList = nodeList.concat(this.inPreOrder(curr_node.getRight(), key));
    }
    return nodeList;
  }

  traversalTree(traversalFunction: Function | null = null) {
    if (traversalFunction === null) {
      return this.__inOrderTraversal(this.root);
    } else {
      return traversalFunction(this.root);
    }
  }

  printResult(key: string) {
    const lista: any[] = this.__inOrderTraversal(this.root);
    const result: any[] = [];

    lista.forEach((element: any) => {
      result.push(element.label[key]);
    });

    return result;
  }

  insert(label: any, key: string) {
    const new_node = new NodeBST(label, null);

    if (this.empty()) {
      this.root = new_node;
    } else {
      let curr_node: NodeBST = this.root;
      let parent_node;
      while (curr_node !== null) {
        parent_node = curr_node;
        if (new_node.getLabel(key) < curr_node.getLabel(key)) {
          curr_node = curr_node.getLeft() as NodeBST;
        } else {
          curr_node = curr_node.getRight() as NodeBST;
        }
      }
      if (new_node.getLabel(key) < parent_node?.getLabel(key)) {
        parent_node?.setLeft(new_node);
      } else {
        parent_node?.setRight(new_node);
      }
      new_node.setParent(parent_node as NodeBST);
    }
  }

  delete(label: any, key: string) {
    if (!this.empty()) {
      let node = this.getNode(label, key);
      if (node !== null) {
        if (node.getLeft() === null && node.getRight() === null) {
          this.__reassignNodes(node, null);
          node = null;
        } else if (node.getLeft() === null && node.getRight() !== null) {
          this.__reassignNodes(node, node.getRight());
        } else if (node.getLeft() !== null && node.getRight() === null) {
          this.__reassignNodes(node, node.getLeft());
        } else {
          let tmpNode: NodeBST = this.getMax(node.getLeft());
          this.delete(tmpNode.getLabel(key), key);
          node.setLabel(tmpNode.getLabel(key));
        }
      }
    }
  }
}
