import { Tree } from "./Tree"

let array = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324];
let tree = new Tree(array);
tree.insert(1);
tree.insert(2);
tree.insert(69);
tree.insert(101);
tree.insert(102);
console.log(tree.isBalanced());
// tree.deleteItem(2);
// tree.deleteItem(23);
// tree.deleteItem(1);
// tree.deleteItem(5);
// tree.deleteItem(4);
// tree.deleteItem(67);
// tree.deleteItem(324);
// tree.deleteItem(8);
// tree.levelOrder((node) => console.log(node));
// tree.inOrder((node) => console.log(node.data));
// tree.preOrder((node) => console.log(node.data));
// tree.postOrder((node) => console.log(node.data));
console.log(tree.height(4));
console.log(tree.height(6345));
console.log(tree.height(111111));
console.log(tree.height(69));
console.log(tree.height(8));
tree.rebalance();
console.log(tree.isBalanced());
tree.prettyPrint(tree.root);
// tree.prettyPrint(tree.find(8));
// tree.prettyPrint(tree.find(67));


