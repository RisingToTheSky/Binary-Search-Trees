import { Tree } from "./Tree"

let array = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324];
let tree = new Tree(array);
tree.insert(69);

tree.prettyPrint(tree.root);



