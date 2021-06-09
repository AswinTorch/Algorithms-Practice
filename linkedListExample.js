// Linked List Node Class
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

// Linked List Class
class LinkedList {
  constructor(head = null) {
    this.head = head;
  }

  /* 
    size() - function to get the size of the linked list
    @return - size of linked list
  */
  size() {
    let count = 0;
    let node = this.head;
    while (node) {
      count++;
      node = node.next;
    }
    return count;
  }

  /*
    clear() - function to clear all the nodes of the linked list
  */
  clear() {
    this.head = null;
  }

  /* 
    getFirst() - function to get the first node of the linked list
    @return - first node of the linked list
  */
  getFirst() {
    return this.head;
  }

  /*
    getLast() - function to get the last node of the linked list
    @return - last node of the linked list
  */
  getLast() {
    let lastNode = this.head;
    while (lastNode && lastNode.next) {
      lastNode = lastNode.next;
    }
    return lastNode;
  }
}

// Initializing and testing area for the Linked List
let node1 = new Node(1);
let node2 = new Node(2);
let node3 = new Node(3);
node1.next = node2;
node2.next = node3;
let list = new LinkedList(node1);
console.log("SIZE", list.size());
console.log("FIRST NODE: ", list.getFirst());
console.log("LAST NODE: ", list.getLast());
list.clear();
console.log("FIRST NODE: ", list.getFirst());
