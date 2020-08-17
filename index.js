function getName(node) {
  return node["name"];
}

function headNode(linkedList, collection) {
  return collection[linkedList];
}

function next(node, collection) {
  let nextIndex = node["next"];
  return collection[nextIndex];
}

function nodeAt(index, linkedList, collection) {
  let node = headNode(linkedList, collection);
  for (let i = 0; i < index; i++) {
    node = next(node, collection);
  }
  return node;
}

function addressAt(address, linkedList, collection) {
  let addressName = linkedList;
  for (let i = 0; i < address; i++) {
    let nextNode = nodeAt(i, linkedList, collection);
    addressName = nextNode["next"];
  }
  return addressName;
}

function indexAt(node, collection, linkedList) {
  let guessNode = headNode(linkedList, collection);
  let index = 0;
  while (guessNode != node) {
    guessNode = next(guessNode, collection);
    index++;
  }
  return index;
}

function insertNodeAt(index, address, linkedList, collection) {
  let previousNode = nodeAt(index - 1, linkedList, collection);
  let previousTarget = previousNode.next;
  previousNode.next = address;
  let newNode = collection[address];
  newNode.next = previousTarget;
  return collection;
}

function deleteNodeAt(index, linkedList, collection) {
  let previousNode = nodeAt(index - 1, linkedList, collection);
  let deleteTarget = collection[previousNode.next];
  previousNode.next = deleteTarget.next;
  deleteTarget.next = "";
  return collection;
}
