class LinkedList {
    
    constructor(list = null){
        this.list = list
    }

    
    append(value){
        if(this.list === null){
            return this.list = new Node(value)
        };
        this.tail().nextNode = new Node(value)
    }
    prepend(value){
        if(this.list === null){
            return this.list = new Node(value)
        };
        this.list = new Node(value, this.list)
    }
    size(){
        let current = this.list;
        let length = 0;
        while(current.nextNode !== null){
            current = current.nextNode;
            length += 1
        }
        return length + 1
    }
    head(){
         return this.list
    }
    tail(){
        let current = this.list;
        while(current.nextNode !== null){
            current = current.nextNode;
        }
        return current
    }
    at(index){

    }
    pop(){

    }
    contains(value){

    }
    find(value){

    }
    toString(){
        let n = new Node()
        return "yes"
    }

}

class Node{
    constructor(value = null, nextNode = null){
        this.value = value;
        this.nextNode = nextNode;
    }
}

const myList = new LinkedList();

myList.append(21)
myList.append(12)
myList.append(44)
myList.prepend(11)
myList.append(2000)

console.log(myList.size())
console.log(myList.head())
console.log(myList.tail())
console.log(myList)


