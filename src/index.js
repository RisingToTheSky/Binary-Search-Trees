import { Tree } from "./Tree"

let array = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324];
let tree = new Tree(array);
tree.insert(1);
tree.insert(2);
tree.insert(69);

// tree.deleteItem(2);
// tree.deleteItem(23);
// tree.deleteItem(1);
// tree.deleteItem(5);
// tree.deleteItem(4);
// tree.deleteItem(67);
// tree.deleteItem(324);
// tree.deleteItem(8);
tree.levelOrder((node) => console.log(node));
tree.inOrder((node) => console.log(node.data));
tree.preOrder((node) => console.log(node.data));
tree.postOrder((node) => console.log(node.data));
tree.prettyPrint(tree.root);
// tree.prettyPrint(tree.find(8));
// tree.prettyPrint(tree.find(67));


