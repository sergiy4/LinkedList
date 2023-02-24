// Create node
const Node = (value=null,next=null) =>{
    

    // return value and pointer
    return{value,next}
}


const LinkedList = () =>{

    let head = null;
    let length = 0;



    // add a node to the end of the list
    const append = (value)=>{

        // create a new element(node)
        let node = Node(value)

        if(this.length === 0) this.head = node
      
        else{

            let current = this.head;

            //  go to the last node
            while(current.next){

                current = current.next
            }

            // The next node will be our news
            current.next = node
        }

        // increase the length
        this.length++;
    }

    // Add item to the begin of the list
    const prepend = (value) =>{

        let node = Node(value)

        if(this.length === 0) this.head = node
      
        else{

            let current = this.head;

            // the new head is our new node
            this.head = node
            
            // The next node is our previous head
            this.head.next = current
        }
        // increase the length
        this.length++;
    }


    const show = () =>{
        if(this.length === 0) return null;

        let current = this.head;

        while(current){
            console.log(current);
            current = current.next
        }

    }
   
    // returns the length of the list
    const size = () =>{
        return this.length;
    }

    // return the last node of the list
    const tail = () =>{
       
        if(this.length === 0) return null;
      
        else{

            let current = this.head;

            //  go to the last node
            while(current.next){

                current = current.next
            }

            //  return the last node of the list
            return current
        }

    }

    // returns the node at the given index
    const at = (index) =>{
        if(this.length === 0) return null;

        else if(index>this.length || index<0){
            return null;
        }

        else{
            let current = this.head
        
            for(let i = 0; i < index; i++){
              current = current.next
            }

            return current
        }
    }

    // removes the last element from the list
    const pop = () =>{
        if(this.length === 0) return null;
      
        else{

            let current = this.head;

            //  go to the last node
            while(current.next){

                prev = current
                current = current.next
            }

            // the pointer to the penultimate element is null
            prev.next = null
           
        }
        this.length--;
    }

    //  returns true if the passed in value is in the list and otherwise returns false.
    const contains = (value) =>{

        if(this.length === 0) return null;

        else{
            let current = this.head

            while(current){
                if(current.value === value){

                    return true
                }

                current = current.next
            }
            return false
        }
        
    }
    // returns the index of the node containing value, or null if not found. 
    const find = (value) =>{

        if(this.length === 0) return null;
        
        else{
            let current = this.head
            let index = 0;

            while(current){
                
                if(current.value === value){

                    return index
                }

                index++;
                current = current.next
            }
            return null
        }
    }

     // represents your LinkedList objects as strings, so you can print them out and preview them in the console. The format should be: ( value ) -> ( value ) -> ( value ) -> null
    const toString =()=>{
        
        if(this.length === 0) return null;
        
        else{
            let current = this.head
            let string = ``
            while(current){
                
                string+=`(${current.value}) -> `
                current = current.next
            }
            string+=`null`
            console.log(string)
            return string
        }
    }

    // that inserts a new node with the provided value at the given index.
    const insertAt = (value,index) =>{
        let node = Node(value)

        if(index>this.length || index<0) return null ;
        else if(index === 0){
            prepend(value)
            return
        }

        else{

            let current = this.head
            let step = 0;

            while(current){

                step++;
                prev = current;
                current = current.next;
               
                if(step===index){

                    node.next = current;
                    prev.next = node;

                }  

            }
        }
        this.length++;
    }

    return {append, 
            prepend, 
            show, 
            size,
            tail,
            at,
            pop,
            contains,
            find,
            toString,
            insertAt}

}


let firstList = LinkedList()

firstList.append('Sergiy');
firstList.append('Yulia');
firstList.append('post');

firstList.prepend('pre');

firstList.toString()//(pre) -> (Sergiy) -> (Yulia) -> (post) -> null

firstList.insertAt('INSERT',3)

firstList.toString()//(pre) -> (Sergiy) -> (Yulia) -> (INSERT) -> (post) -> null

console.log(firstList.size())// 5

console.log(firstList.find('pre'))//0

firstList.pop()

firstList.toString()//(pre) -> (Sergiy) -> (Yulia) -> (INSERT) -> null

console.log(firstList.tail())//{value: 'INSERT', next: null}

console.log(firstList.contains('Yulia'))//true

console.log(firstList.at(1))//{value: 'Sergiy', next: {…}}







