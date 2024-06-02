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
        let current = this.list;
        for(let i = 0; i < this.size(); i++){
            if(index === i){
                return current
            }
            current = current.nextNode;
        }
        return current
    }
    pop(){
        let current = this.list;
        for(let i = 1; i < this.size() - 1; i++){
            current = current.nextNode;
            

        }
         current.nextNode = null
    }
    contains(value){
        let current = this.list;
        for(let i = 1; i < this.size(); i++){
            if(current.value === value){
                return true
            }
            current = current.nextNode;
        }
        return false

    }
    find(value){
        let current = this.list;
        for(let i = 0; i < this.size(); i++){
            if(current.value === value){
                return i
            }
            current = current.nextNode;
        }
        return current

    }
    toString(){
        let current = this.list;
        let element;
        let stringList = '';
        for(let i = 0; i < this.size(); i++){
            if(current.value === null){
                return stringList += null
            }
            element = `(${current.value}) -> `
            stringList += element
           
            current = current.nextNode;
        }
        stringList += ' null'
       return stringList
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

console.log(myList.at(4))
myList.pop()

console.log(myList.size())
console.log(myList.head())
console.log(myList.tail())
console.log(myList.contains(21))
console.log(myList.find(44))
console.log(myList.toString())
console.log(myList)


