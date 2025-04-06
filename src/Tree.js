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
                // skip over child node, in other words, point current node to new child
                if (root.right !== null) {
                    root.left = root.right;
                    return root.right;
                } else {
                    root.right = null;
                    return root.right;
                }
            } else if (root.right === null) {
                if (root.left !== null) {
                    root.right = root.left;
                    return root.right;
                } else {
                    root.left = null;
                    return root.left;
                }
            } else {
                let closest = root.right;
                closest = this.getClosest(value, closest);
                root.data = closest.data;
                root.right = this.deleteItem(closest.data, root.right);
                return root;
            }
        }

        return root;
    }

    getClosest(value, closest) {
        if (closest.left === null) {
            return closest;
        } else {
            return this.getClosest(value, closest.left);
        }
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

    levelOrder(callback, root = this.root) {
        if (typeof callback !== 'function') {
            throw new Error("function not provided!");
        }
        if (root === null) return;
        let queue = [];
        queue.push(root);
        while (queue.length > 0) {
            let current = queue.shift();
            callback(current);
            if (current.left !== null) {
                queue.push(current.left);
            }
            if (current.right !== null) {
                queue.push(current.right);
            }
        }

    }

    inOrder(callback, root = this.root) {
        if (typeof callback !== 'function') {
            throw new Error("function not provided!");
        }

        if (root === null) return;
        this.inOrder(callback, root.left);
        callback(root);
        this.inOrder(callback, root.right);
    }

    preOrder(callback, root = this.root) {
        if (typeof callback !== 'function') {
            throw new Error("function not provided!");
        }

        if (root === null) return;
        callback(root);
        this.preOrder(callback, root.left);
        this.preOrder(callback, root.right);
    }

    postOrder(callback, root = this.root) {
        if (typeof callback !== 'function') {
            throw new Error("function not provided!");
        }

        if (root === null) return;
        this.postOrder(callback, root.left);
        this.postOrder(callback, root.right);
        callback(root);
    }

    height(node) {
        if (typeof node === 'number') {
            node = this.find(node);
        }

        if (node === null || !node) {
            return -1;
        }
        
        return Math.max(this.height(node.left), this.height(node.right)) + 1;
    }

    depth(node, root = this.root) {
        if (!this.find(node)) {
            return "node not found";
        }

        if (node === root.data) {
            return 0;
        }

        if (node < root.data) {
            return this.depth(node, root.left) + 1;
        } else if (node > root.data) {
            return this.depth(node, root.right) + 1;
        }
    }

    isBalanced(root = this.root) {
        if (root === null) return true;

        let leftHeight = this.height(root.left);
        let rightHeight = this.height(root.right);

        if (Math.abs(leftHeight - rightHeight) > 1) {
            return false;
        }

        return this.isBalanced(root.left) && this.isBalanced(root.right);
    }

    rebalance() {
        let array = [];
        this.inOrder((root) => {
            array.push(root.data);
        })

        this.array = array;
        this.root  = this.buildTree(this.array, 0, this.array.length - 1);
    }
}

export {Tree};