import { Node } from "./Node";

class Tree {
    constructor(array) {
        this.array = this.sortAndNoDupsArray(array);
        this.root = this.buildTree(this.array, 0, this.array.length - 1);
    }

    buildTree(array, start, end) {
        if (start > end) return null;

        let mid = start + Math.floor((end - start) / 2);
        let root = new Node(array[mid]);

        root.left = this.buildTree(array, mid + 1, end);
        root.right = this.buildTree(array, start, mid - 1);

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

    insert(value) {
        if (!this.root.left || !this.root.right) {
            this.root.data = value;
        }

        if (value < this.root.data) {
            this.root = this.root.left;
            this.insert(value);
        } else if (value > this.root.data) {
            this.root = this.root.right;
            this.insert(value);
        }

        return this.root;
    }
}

export {Tree};