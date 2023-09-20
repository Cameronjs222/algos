class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class SLL {
    constructor() {
        this.head = null;
    }
    addFront(value) {
        const newNode = new Node(value);
        if(!this.head) {
            this.head = newNode;
            return this;
        }
        newNode.next = this.head;
        this.head = newNode;
        return this.head;
    }
    removeFront() {
        if(!this.head) {
            return null;
        }
        this.head = this.head.next;
        return this.head;
    }
    front() { 
        if(!this.head) {
            return null;
        }
        return this.head.value;
    }
    constains(value) {
        while(this.head) {
            if(this.head.value === value) {
                return true;
            }
            this.head = this.head.next;
        }
        return false;
    }
    length() {
        let count = 0;
        while(this.head) {
            count++;
            this.head = this.head.next;
        }
        return count;
    }
    display() {
        let str = "";
        while(this.head) {
            str += this.head.value + " ";
            this.head = this.head.next;
        }
        return str;
    }
    max() {
        let max = this.head.value;
        while(this.head) {
            if(this.head.value > max) {
                max = this.head.value;
            }
            this.head = this.head.next;
        }
        return max;
    }
    min() {
        let min = this.head.value;
        while(this.head) {
            if(this.head.value < min) {
                min = this.head.value;
            }
            this.head = this.head.next;
        }
        return min;
    }
    average() {
        let sum = 0;
        let count = 0;
        while(this.head) {
            sum += this.head.value;
            count++;
            this.head = this.head.next;
        }
        return sum/count;
    }
    splitOnValue(value) {
        let runner = this.head;
        while(runner) {
            if(runner.value === value) {
                return runner;
            }
            runner = runner.next;
        }
        return null;
    }
    removeNegatives() {
        while(this.head) {
            if(this.head.value < 0) {
                this.removeFront();
            }
            this.head = this.head.next;
        }
        return this.head;
    }
    concat(list) {
        let runner = this.head;
        while(runner.next) {
            runner = runner.next;
        }
        runner.next = list.head;
        return this.head;
    }
    partition(value) {
        let runner = this.head;
        while(runner) {
            if(runner.value < value) {
                this.addFront(runner.value);
                this.removeFront();
            }
            runner = runner.next;
        }
        return this.head;
    }
}

