//** reverse string
const strng = "Hello";
let NewStr = "";
//NewStr = strng.split('').reverse().join('');
for( let i = strng.length -1; i >=0; i-- ){
    NewStr += strng[i];
}

for(let i of strng){
    // NewStr = i + NewStr;
}
console.log('reverce String:', NewStr);


//** flat array
const multiLblArray = [1, 2, [3, 4, 5], 5, 4, 4, 1, 1];
function flatArray(array){
  let newArray = [];
  for(let item of array){
    if(Array.isArray(item)){
      newArray = newArray.concat(flatArray(item)); // Recursively flatten [1, 2].concat([3, 4 ,5]) =[1,2,3,4,5]
      //newArray = [...newArray, ...flatArray(item)];
    }
    else{
      newArray.push(item);
      //newArray = [...newArray, item];
    }
  }
  return newArray;
}
console.log("Flat array:",flatArray(multiLblArray));


//** remove duplicate from array or string
const myArr = [5, 2, 2, 3, 4, 4, 4, 5, 1];
//const uniqueArray = new Set(myArr);
const uniqueArray = myArr.filter((item, index, array) => {
  return array.indexOf(item) === index; //keeps only first occurrences
})
console.log('remove duplicate:', [...uniqueArray]); 


//** find occurence of each number in the array
const arr = [1, 2, [3, 4, 5], 5, 4, 4, 1, 1];
const flatArr = arr.flat(Infinity);
function countAllItem(array){
  const count = {};
  for (const item of array) {
    count[item] = (count[item] || 0) + 1;
  }
  return count;
}
console.log('Letter with Count:', countAllItem(flatArr));
//output {1: 3, 2: 1, 3: 1, 4: 3, 5: 2}


//find occurence and join key value
function countLetter(arr){
  const str = arr.join('');
  const count = {};
  for(let i of str){
    count[i] = (count[i] || 0) +1;
  }
  // const output = Object.entries(count)
  // .map(([key, value])=> `${value}${key}`).join('');
  let output = "";
  for(let ch in count){
      output += count[ch] +ch;
  }
  return [output];
}
const input = ["aabbccccddab"];
console.log(countLetter(input)); //['3a3b4c2d']


//*** First Non-Repeating Character
function firstNonRepeating(str){
  const count = {};
  for(let i of str){
    count[i] = (count[i] || 0) + 1;
  }
  for(let ch of str){
    if(count[ch] === 1){
      return ch;
    }
  }
}
console.log(firstNonRepeating("aabbccdpe"));//d


//** Sort an array assending
const sortArray = uniqueArray.sort((a,b) => a - b)
console.log('Sort array:', sortArray);
//find second largest number 
const secondLarg = sortArray[sortArray.length - 2];

//sort array with string
const fruitArr = ["apple", "banana", "orange", "Agra"];
const sorted = fruitArr.sort((a, b) => 
  a.localeCompare(b));
console.log("fruit Sorted",sorted);


//** bubble sort of array
const myArray = [5, 2, 2, 3, 4, 4, 4, 5, 1];
for (let i = 0; i < myArray.length; i++) {
  for (let j = i + 1; j < myArray.length; j++) {
    if (myArray[i] > myArray[j]) {
      // swap
      const temp = myArray[i];
      myArray[i] = myArray[j];
      myArray[j] = temp;
    }
  }
}
console.log("bubble sort array",myArray); // [1, 2, 2, 3, 4, 4, 4, 5, 5]


//find Duplicate using for loop
const duplicate = (arr)=>{
    let item = [];
    for(let i = 0; i < arr.length; i++){
        for(let j = i +1; j < arr.length; j++){
            if(arr[i] === arr[j] && !item.includes(arr[i])){
                item.push(arr[i]);
            }
        }
    }
    return item;
}
const arr2 = [1, 2, 2, 3, 2, 3]; 
console.log(duplicate(arr2));


//** word count in string
const str = 'hello world hello';
function countWord(text, word) {
  const splitString = text.split(/\s+/);
  let count = 0;
  for (const item of splitString) {
    if (item === word) {
        count++;
    }
  }
  return count;
}
console.log("Count Hello:",countWord(str, 'hello'));


//input string "red:5,blue:3,green:2"
// Output [
//  { color: "red", count: 5 },
//  { color: "blue", count: 3 },
//  { color: "green", count: 2 }
// ]
const inputString = "red:5,blue:3,green:2";
const crerateObj = (str)=>{
  const createArr = input.split(",");
  const output = createArr.map((item) => {
    const [color, count] = item.split(":");
    return {color:color, count: Number(count)};
  });
  return output;
}
console.log("Array of Object", crerateObj(inputString));


//** sort Product array of object 
const products = [
  { product: "Laptop", price: 800 },
  { product: "Phone", price: 500 },
  { product: "Tablet", price: 300 }
];
const productList = products.sort((a, b) => a.price - b.price);
console.log("Object sorted",productList);


//** key array and count from array of Object 
const myObj = [{a:1, b:2},{a:2, b:3},{c:4, d:5}];
const count = {};
let newArr =[];
myObj.forEach((obj) => {
    for(let i of Object.keys(obj)){
        newArr.push(i);
        count[i] = (count[i] || 0) + 1;
    }
})
console.log("Array of Key", newArr, "Count:", count);


//** New array of vowel fruit
const fruits = ["apple", "banana", "orange","pineapple"];
const vowels = "aeiou";
const fruitArray = fruits.filter((item)=>
    vowels.includes(item[0].toLowerCase())
)
console.log("Vowel Fruit",fruitArray);


// remove given character
function removeChars(str1, str2){
  const output = str1.split('').filter(v => 
    !str2.includes(v)).join('');
  return output;
}
console.log(removeChars("battle", "bt"))   // Output: "ale"
console.log(removeChars("hello world", "ol")) // Output: "he wrd"


// create square of value in object
function square(arg){
  const sqr = Object.entries(arg).map(([key, val])=> [key, val * val]);
  const output = Object.fromEntries(sqr);
  return output;
}
const obj = { a:1,b:2,c:3};
console.log(square(obj));
// output -> {a:1,b:4,c:9}


//write code to show star rating from 1 to 10 in js
function showStar(rating){
  let stars = "";
  for(let i = 1; i <= 10; i++){
      if (i <= rating) {
          stars += "*";
      } 
      else {
          stars += "-";
      }
  }
  return stars;
}
console.log(showStar(5));


//const arr= [1,2,3,5,7] find the missing number using js(4,6) 
function findMissing(arr){
    let missing = [];
    for(let i = 0; i < arr.length -1; i++ ){
        if(arr[i + 1] - arr[i] > 1){
            missing.push(arr[i] + 1)
        }
    }
    return missing;
}
const arr1= [1,2,3,5,7];
console.log(findMissing(arr1))


const splitNumber = (num)=>{
    let newArray = [];
    let str = num.toString();
    for(let i = 0; i < str.length; i++){
        let digit = str[i];
        if(digit !== "0"){
            newArray.push(digit * Math.pow(10, str.length - i - 1))
        }
    }
    return newArray
}
console.log(splitNumber(50632));// [50000, 600, 30, 2]


// var ax = 1;
// fNa();
// fNb();
// console.log(ax);
// function fNa() 
//     var ax = 10;
//     console.log(ax);
// }
// function fNb(){
//     var ax = 100;
//     console.log(ax);
// }


//user Login
/*const handleSubmit = async (e)=>{
    e.preventDefault();
    console.log(email,passowrd);
    try{
        const response = await axios.post("http://localhost:3000/api/auth/login-user", {email, password:passowrd});
        if (response.data.success) {
            toast.success(response.data.message || 'Login successfull');
            console.log(response);
            const token = response.data.token;
            localStorage.setItem("authToken", token);
            navigate("/homeScreen")
        } 
        else {
            toast.erront(response.data.message || 'Login failed!');
        }
    }
    catch(error) {
            console.error('Error during registration:', error);
            toast.error(error.response.data.message || "Something went wrong. Please try again later.");
            reportWebVitals.js
    }
} */





const getdata = async ()=>{
        try{
            const [userResponce, orderResponce] = await Promise.all([
                fetch('https://jsonplaceholder.typicode.com/users'),
                fetch('https://jsonplaceholder.typicode.com/posts')
            ])
            const users = await userResponce.json();
            const orders = await orderResponce.json();
            
            const userWithOrderId = new Set(orders.map(order => order.userId));
            const userPlacedOrder = users.filter((user) => userWithOrderId.has(user.id));
            console.log("filter user",userPlacedOrder);
        }
        catch(error){
            console.error('Error while fetching data:', error);
        }
    }
  //getdata();