class Node {
    constructor(value) {
        this.value = value
        this.left = null
        this.right = null
    }

    insert(value) {
        if (value < this.value && !this.left) {
            // value is less than current node and .left is null
            this.left = new Node(value)
        } else if (value < this.value && this.left) {
            // value is less than current node and .left exists
            this.left.insert(value)
        } else if (value > this.value && !this.right) {
            // value is greater than current node and .right is null
            this.right = new Node(value)
        } else if (value > this.value && this.right) {
            // value is greater than current node and .right exists
            this.right.insert(value)
        }
    }

    search(element) {
        if (this.value === element) {
            return true
        } else if (element < this.value && this.left) {
            return this.left.search(element)
        } else if (element > this.value && this.right) {
            return this.right.search(element)
        }
        return false
    }

}
function inOrder(node) {
    node.left && inOrder(node.left)
    console.log(node.value)
    node.right && inOrder(node.right)
}

function preOrder(node) {
    console.log(node.value)
    node.left && preOrder(node.left)
    node.right && preOrder(node.right)
}

function postOrder(node) {
    node.left && preOrder(node.left)
    node.right && preOrder(node.right)
    console.log(node.value)
}