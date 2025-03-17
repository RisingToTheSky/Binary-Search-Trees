import { Node } from "./Node";

class Tree {
    constructor(array) {
        this.array = this.sortAndNoDupsArray(array);
        this.root = this.buildTree(this.array, 0, this.array.length - 1);
    }

    buildTree(array, start, end) {
        if (start > end) {
            return null;
        }

        let mid = start + Math.floor((end - start) / 2);
        let root = new Node(array[mid]);

        root.left = this.buildTree(array, start, mid - 1);
        root.right = this.buildTree(array, mid + 1, end);

        return root;
    }

    sortAndNoDupsArray(array) {
        let noDupArray = array.filter((item, pos) => array.indexOf(item) === pos);
        let sortedArray = noDupArray.sort(function compare(a, b) {
            return a - b;
        });

        return sortedArray;
    }

    prettyPrint(node, prefix = "", isLeft = true) {
        if (node === null) {
          return;
        }
        if (node.right !== null) {
          this.prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
        }
        console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
        if (node.left !== null) {
          this.prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
        }
    };

    insert(value, root = this.root) {
        if (root.data === value) {
            return null;
        }

        if (value < root.data && root.left === null) {
            root.left = new Node(value);
        } else if (value > root.data && root.right === null) {
            root.right = new Node(value);
        }

        if (value < root.data) {
            this.insert(value, root.left);
        } else if (value > root.data) {
            this.insert(value, root.right);
        }

        return root;
    }

    deleteItem(value, root = this.root) {
        // 1. If item has no children
        if (root === null) {
            return root;
        }

        if (value < root.data) {
            root.left = this.deleteItem(value, root.left);
        } else if (value > root.data) {
            root.right = this.deleteItem(value, root.right);
        } else {
            if (root.left === null) {
                root.right = null;
                return root.right;
            } else if (root.right === null) {
                root.left = null;
                return root.left;
            }
        }

        return root;
    }
    
    find(value, root = this.root) {
        if (!root) {
            return null;
        }

        if (root.data === value) {
            return root;
        }

        if (value < root.data) {
            return this.find(value, root.left);
        } else if (value > root.data) {
            return this.find(value, root.right);
        }

        return root;
    }
}

export {Tree};