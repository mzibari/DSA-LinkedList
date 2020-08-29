const _Node = require('./_Node')

class LinkedList {
    constructor() {
        this.head = null
    }

    insertFirst(item) {
        this.head = new _Node(item, this.head)
    }

    insertLast(item) {
        if (this.head === null) {
            this.insertFirst(item);
        }
        else {
            let tempNode = this.head;
            while (tempNode.next !== null) {
                tempNode = tempNode.next;
            }
            tempNode.next = new _Node(item, null);
        }
    }

    insertBefore(item, beforeItem) {
        if (this.head === null) {
            return null;
        }
        let tempNode = this.head;
        if (tempNode.value === beforeItem) {
            this.insertFirst(item)
            return
        }
        while (tempNode.next !== beforeItem) {
            if (tempNode.next === null) {
                return null;
            }
            else {
                tempNode = tempNode.next;
            }
            tempNode.next = new _Node(item, beforeItem);
        }
    }

    insertAfter(item, afterItem) {
        if (this.head === null) {
            return null;
        }
        let tempNode = this.head
        if (tempNode.value === afterItem) {
            if (tempNode.next === null) {
                this.insertLast(item)
            }
            else {
                let tempNext = this.head.next
                this.head.next = new _Node(item, tempNext)
            }
            return
        }
        while (tempNode.value !== afterItem) {
            if (tempNode.next === null) {
                return null;
            }
            else {
                tempNode = tempNode.next;
            }
            tempNode.next = new _Node(item, tempNode.next);
        }
    }

    insertAt(item, pos) {
        if (this.head === null) {
            return null;
        }
        let tempNode = this.head
        for (let i = 1; i < pos - 1; i++) {
            if (!this.head) {
                return null
            }
            tempNode = tempNode.next
        }
        tempNode.next = new _Node(item, tempNode.next)
    }

    find(item) {
        // Start at the head
        let currNode = this.head;
        // If the list is empty
        if (!this.head) {
            return null;
        }
        // Check for the item 
        while (currNode.value !== item) {
            /* Return null if it's the end of the list 
               and the item is not on the list */
            if (currNode.next === null) {
                return null;
            }
            else {
                // Otherwise, keep looking 
                currNode = currNode.next;
            }
        }
        // Found it
        return currNode;
    }

    displayAll() {
        if (!this.head) {
            return null;
        }
        let tempNode = this.head
        while (tempNode) {
            console.log(tempNode.value)
            tempNode = tempNode.next
        }
        console.log('---------')
    }

    remove(item) {
        // If the list is empty
        if (!this.head) {
            return null;
        }
        // If the node to be removed is head, make the next node head
        if (this.head.value === item) {
            this.head = this.head.next;
            return;
        }
        // Start at the head
        let currNode = this.head;
        // Keep track of previous
        let previousNode = this.head;

        while ((currNode !== null) && (currNode.value !== item)) {
            // Save the previous node 
            previousNode = currNode;
            currNode = currNode.next;
        }
        if (currNode === null) {
            console.log('Item not found');
            return;
        }
        previousNode.next = currNode.next;
    }

}

module.exports = LinkedList