class LinkedList {
    
    constructor(list = null){
        this.list = list
    }

    
    append(value){
        if(this.list === null){
            return this.list = new Node(value)
        };
        let current = this.list
        while(current.nextNode !== null){
            current = current.nextNode;
        }
       
        current.nextNode = new Node(value);
    }
    prepend(value){

    }
    size(){

    }
    head(){
         return console.log(this.list)
    }
    tail(){
        let current = this.list;
        while(current.nextNode !== null){
            current = current.nextNode;
        }
        return console.log(current)
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
myList.append(2000)
myList.head();
myList.tail()

console.log(myList)


