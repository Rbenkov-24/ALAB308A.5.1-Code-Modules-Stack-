//this file 'index.js' imports the Stack class creates an instance and tests the methods

import Stack from "./Stack.js"; // this line is used to to bring the stack class from the Stack.js file 

// Test the Stack class
const stack = new Stack(); //this line creates an instance (object) of the Stack class

// Add elements to the stack
//push: Adds an item to the top of the stack. add 10, 20, 30 to the top of  stack. (دفع): إضافة عنصر جديد إلى أعلى الكومة (الصف)
//stack (المكدس): هيكل بيانات يخزن العناصر بترتيب معين بحيث يتم إخراج آخر عنصر تم إدخاله أولاً
stack.push(10); 	
stack.push(20); 
stack.push(30);

// Test stack operations
console.log(stack.peek());//peek: checks what is on the top of the stack.show the top item without removing it
console.log(stack.pop()); //pop: removes the top item from the stack and show it
console.log(stack.peek()); //peek: checks the top item again after removing one
console.log(stack.isEmpty()); //isEmpty: Checks if the stack is empty.
console.log(stack.size()); //size: shows how many items are in the stack

// Clear the stack and test
stack.clear(); // clear: removes all items from the stack
console.log(stack.isEmpty());// isEmpty: checks if the stack is empty after clearing it
