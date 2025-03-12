class Tree {
    constructor(array) {
        this.array = array;
        this.root = null;
    }

    buildTree(array) {
        let noDupArray = array.filter((item, pos) => array.indexOf(item) === pos);
        let sortedArray = noDupArray.sort(function compare(a, b) {
            return a - b;
        });

    }
}

export {Tree};