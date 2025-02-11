// stack(primitive) and heap(Non primitive)
// in primitive call by value is used that means the copy of particular variable is passed but in case of non primitive , the reference to actual value is passed.

let user1="harry"
let user2=user1
user2 ="garry"

console.log(user1)
console.log(user2)

let obj1={
    email:"harru@google.com",
    age:"22",
}
let obj2=obj1
obj2.age="23"
console.log(obj1.age)
console.log(obj2.age)

