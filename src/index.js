import { Tree } from "./Tree";

function generateArray() {
    let array = [];
    for (let i =0; i < 100; i++) {
        array.push(Math.floor(Math.random() * 100));
    }
    return array;
}

let array = generateArray();
let levelOrder = [];
let preOrder = [];
let postOrder = [];
let inOrder = [];
let tree = new Tree(array);
tree.prettyPrint(tree.root);
console.log(tree.isBalanced());
tree.levelOrder((node) => levelOrder.push(node.data));
tree.preOrder((node) => preOrder.push(node.data));
tree.postOrder((node) => postOrder.push(node.data));
tree.inOrder((node) => inOrder.push(node.data));
console.log(levelOrder);
console.log(preOrder);
console.log(postOrder);
console.log(inOrder);

// Unbalance tree
tree.insert(101);
tree.insert(104);
tree.insert(205);
console.log(tree.isBalanced());
tree.rebalance();
tree.prettyPrint(tree.root);
levelOrder.length = 0;
preOrder.length = 0;
postOrder.length = 0;
inOrder.length = 0;
tree.levelOrder((node) => levelOrder.push(node.data));
tree.preOrder((node) => preOrder.push(node.data));
tree.postOrder((node) => postOrder.push(node.data));
tree.inOrder((node) => inOrder.push(node.data));
console.log(levelOrder);
console.log(preOrder);
console.log(postOrder);
console.log(inOrder);