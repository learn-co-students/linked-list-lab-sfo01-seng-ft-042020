

function getName(node) {
    return node.name
}

function headNode(name, collection) {
    return collection[name]
}

function next(node, collection) {
    return collection[node.next]
}

function nodeAt(index, head, collection) {
    let targetNode = collection[head];
    for (let i=0; i<index; i++) {
        targetNode = collection[targetNode.next]
    }
    return targetNode
}

function addressAt(index, head, collection) {
    let targetAddress = head;
    for (let i=0; i<index; i++) {
        targetAddress = collection[targetAddress].next
    }
    return targetAddress
}

function indexAt(targetNode, collection, head) {
    let node = collection[head];
    let index = 0;
    while (node.next !== null) {
        if (targetNode === node) {
            return index;
        }
        index++
        node = collection[node.next]
    }
    return null
}

function insertNodeAt(index, key, head, collection) {
    let node = head;
    let nextNode = collection[node].next
    for (let i=1; i < index; i++) {
        node = nextNode;
        nextNode = collection[node].next
    }
    collection[node].next = key
    collection[key].next = nextNode
}

function deleteNodeAt(index, head, collection) {
    let prevNode = head;
    let node = collection[prevNode].next;
    let nextNode = collection[node].next;
    for (let i=1; i < index; i++) {
        prevNode = node;
        node = nextNode;
        nextNode = collection[node].next
    }
    collection[prevNode].next = nextNode
}