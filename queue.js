/** A basic doubly linked list, useful for visiting each cell */
module.exports = class Queue {
    #head = null;
    #tail = null;

    /** Adds a value at the end of the queue */
    enqueue(value) {
        const node = new Node(value);
        if (this.isEmpty()) {
            this.#head = node;
            this.#tail = node;
            return;
        }
        this.#tail.next = node;
        node.prev = this.#tail;
        this.#tail = node;
    }

    /** Pops the head of the queue and returns its value */
    dequeue() {
        if (this.isEmpty()) throw new Error("Can't dequeue, queue is empty");
        const value = this.#head.value;
        this.#head = this.#head.next;
        if (!this.isEmpty()) this.#head.prev = null;
        return value;
    }

    /** Returns `true` if the queue is empty, otherwise returns `false` */
    isEmpty() {
        return this.#head === null;
    }
};

/** A node of the queue, with `value` and references to the next and
 * previous elements */
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}
