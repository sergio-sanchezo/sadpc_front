class TreeNode {
  val: any;
  obj: any;
  left: any;
  right: any;
  height: number;
  constructor(val: any, obj: any) {
    this.val = val;
    this.left = null;
    this.right = null;
    this.height = 1;
    this.obj = obj;
  }
}

export class AVL_Tree {
  objMax: any;
  constructor() {
    this.objMax = null;
  }

  getHeight(root: TreeNode) {
    if (!root) {
      return 0;
    }
    return root.height;
  }

  getBalance(root: TreeNode) {
    if (!root) {
      return 0;
    }
    return this.getHeight(root.left) - this.getHeight(root.right);
  }

  rightRotate(z: any) {
    const y = z.left;
    const T3 = y.right;
    y.right = z;
    z.left = T3;

    z.height = 1 + Math.max(this.getHeight(z.left), this.getHeight(z.right));
    y.height = 1 + Math.max(this.getHeight(y.left), this.getHeight(y.right));

    return y;
  }

  leftRotate(z: any) {
    const y = z.right;
    const T2 = y.left;
    y.left = z;
    z.right = T2;

    z.height = 1 + Math.max(this.getHeight(z.left), this.getHeight(z.right));
    y.height = 1 + Math.max(this.getHeight(y.left), this.getHeight(y.right));

    return y;
  }

  insert(root: TreeNode | null, key: any, obj: any) {
    if (!root) {
      return new TreeNode(key, obj);
    } else if (key < root.val) {
      root.left = this.insert(root.left, key, obj);
    } else {
      root.right = this.insert(root.right, key, obj);
    }
    root.obj = obj;
    root.height =
      1 + Math.max(this.getHeight(root.left), this.getHeight(root.right));

    const balance = this.getBalance(root);

    if (balance > 1 && key < root.left.val) {
      return this.rightRotate(root);
    }

    if (balance < -1 && key > root.right.val) {
      return this.leftRotate(root);
    }

    if (balance > 1 && key > root.left.val) {
      root.left = this.leftRotate(root.left);
      return this.rightRotate(root);
    }

    if (balance < -1 && key < root.right.val) {
      root.right = this.rightRotate(root.right);
      return this.leftRotate(root);
    }

    return root;
  }

  preOrder(root: TreeNode) {
    if (!root) {
      return;
    }

    this.preOrder(root.left);
    this.preOrder(root.right);
  }

  findMax(root: any) {
    if (root == null || undefined) {
      return -Infinity;
    }
    this.objMax = root.obj;
    let res = root.val;
    let lRes = this.findMax(root.left);
    let rRes = this.findMax(root.right);

    if (lRes > res) {
      res = lRes;
    }
    if (rRes > res) {
      res = rRes;
    }
    return res;
  }

  getMax(root: any) {
    this.findMax(root);
    return this.objMax;
  }
}
