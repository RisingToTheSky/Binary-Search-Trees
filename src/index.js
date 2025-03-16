import { Tree } from "./Tree"

let array = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324];
let tree = new Tree(array);
tree.insert(1);
tree.insert(2);
tree.insert(69);
tree.find(69);
// tree.find(324);
// tree.find(8);
tree.prettyPrint(tree.root);
console.log(tree.root);


