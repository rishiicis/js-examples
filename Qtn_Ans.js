//eclerx
console.log(typeof undefined);//undefined
console.log(typeof null);// object
console.log(null == undefined);// true
console.log(null === undefined); // false

function example() {
  if (true) {
    var x = 10;
    let y = 20;
    const z = 30;
  }
  console.log(x); //10
  console.log(y); //ref err and next line will not execute
  console.log(z);
}
example(); 

function getData(dataId){
  setTimeout(() => {
    console.log(dataId);
  }, 2000);
}
getData(1);
getData(2);
getData(3);
//solution using callback
function getData1(dataId, fn){
  setTimeout(() => {
    console.log(dataId);
    if(fn){
      fn();
    }
  }, 2000);
}
getData1(1, ()=>{
    getData1(2, ()=>{
        getData1(3);
    })
});
//eclerx end

var a =5;
(function() {
    console.log(a);
    var a = 10;
})();//Immediately Invoked Function Expression


var x = 23;
(function(){
  var x = 43;
  (function random(){
    x++;
    console.log(x);
    var x = 21;
  })();
})(); // NaN


function printFn() {
  let isTrue = false;
  return function () {
    if (!isTrue) {
      isTrue = true;
      console.log('Print');
    }
  };
};
const printOne = printFn();
for (i = 0; i < 100; i++) {
  printOne();
}
// don't use break, conditions only print once


function memoFn(a) {
  let value = a;
  function inner(newVal) {
    if (newVal !== undefined) {
      return value = newVal;
    }
    return value;
  }
  return inner;
}
var x = memoFn(500);
console.log(x());  //500 
console.log(x());  //500 
console.log(x(200));  //200 
console.log(x());  //200 
console.log(x(300));  //300 


for (var i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log(i);
  }, 1000);
} //3 3 3

for (var i = 0; i < 3; i++) {
  function myFn(a) {
    setTimeout(() => {
      console.log(a);
    }, 1000);
  }
  myFn(i);
}//0 1 2


const a = [1,2,3,4];
a.map((item)=> {if(item % 2 === 0){ return item} })//[undefined, 2, undefined, 4]
a.filter((item)=> {if(item % 2 === 0){ return item} }) // [2,4]


async function fetchData() {
    console.log("1: Fetching data...");
    const data = await new Promise((resolve) => {
        setTimeout(() => resolve("2: Data fetched"), 1000);
    });
    console.log(data);
    console.log("3: Done");
}
fetchData();
console.log("4: Outside async function");
// 1, 4, 2, 3 note after 1 await push fetchData() in micro task 


myFunc();
var myFunc = function () {
	console.log("First");
};
myFunc();
function myFunc() {
	console.log("Second");
}
myFunc();
// Second , First, First


const P1 = new Promise(res => res(2));
P1.then(v => {
    console.log(v);
    return v * 2;
})
.then(v => {
    console.log(v);
    return v * 2;
})
.finally(v => {
    console.log(v);
    return v * 2;
})
.then(v => {
    console.log(v);
});
//2, 4, undefined, 8
//.finally(), does not receive the resolved value, Its return value is ignored (unless it throws error or rejects)


async function run() {
  try {
    return 1;
  }
  finally {
    return 2;
  }
}
run().then(console.log);
// 2, A return in finally overrides everything before it.


console.log('Before everything');1

const promise1 = new Promise((resolve) => {
  console.log('Promise started');3
  setImmediate(() => {
    console.log('Inside setImmediate from promise');5
  });
  resolve('Promise resolved');
});

promise1.then((result) => {
  console.log('Promise result:', result);4
  setImmediate(() => {
    console.log('Inside setImmediate from promise then');6
  });
});

setTimeout(() => {
  console.log('Inside setTimeout');7
}, 0);

console.log('After everything');2
// Before everything
// Promise started
// After everything
// Promise result: Promise resolved
// Inside setImmediate from promise
// Inside setImmediate from promise then
// Inside setTimeout



//coforge
function debounce(fn, delay){
  let timeout;
  return function(...arg){
    clearTimeout(timeout);
    timeout = setTimeout(function() {
      fn(...arg)
    }, delay);
  }
}
const handleScroll =  debounce(()=> console.log(window.scrollY), 300);
window.addEventListener("scroll", handleScroll);

//Q2
for (var i = 0; i < 3; i++) {
  function myFn(a){
    setTimeout(function() {
      console.log(a);
    }, a * 1000);
  }
  myFn(i)
} //0, 1, 2

//Q3
function outer(){
  let c = 0;
  return()=> ++ c;
}
const count = outer();
console.log(count(), count(), count()) //1,2,3

//Q4
Promise.all([
  Promise.resolve(1),
  Promise.reject("Error"),
  Promise.resolve(3)
])
.then(console.log)
.catch(console.log);// Error

//Q5
console.log(
  [1, 2, 3].map(num => {
    if (num > 1) return;
    return num * 2;
  })
); //[2, undefined, undefined]

// L2
function getUsernames(users) {
  const activeUsers = users.filter(user => {
    return user.isActive === true;
  });
  const names = activeUsers.map(user => {
    return user.name.toUpperCase();
  });
  return names;
}
const users = [
  { id: 1, name: "anurag", isActive: true },
  { id: 2, name: "rahul", isActive: false },
  { id: 3, name: "sneha", isActive: true }
];
console.log(getUsernames(users));

//L2
async function asyncFunc() {
  console.log('A');
  await new Promise(resolve => setTimeout(resolve, 1000));
  console.log('B');
}
console.log('C');
asyncFunc();
console.log('D'); //C A D B

//L2
var a = [];
var b = [];
console.log(a==b);
console.log(a===b);


//Mphasis L2
const arrUsers  = [
	{id: 1, name: 'test1', address: {countryCode: "US"}},
	{id: 2, name: 'test2', address: {countryCode: "US"}},
	{id: 3, name: 'test3'},
];

function getCountries(users){
  const countCountry ={};
    for(let item of users){
      const code = item.address?.countryCode;
        countCountry[code] = (countCountry[code] || 0) + 1;
    }
    return countCountry;
}
console.log(getCountries(arrUsers));

function getCountries(user){
    return  user.reduce((acc, u)=>{
        const getUser = u.address?.countryCode;
        acc[getUser] = (acc[getUser] || 0) + 1;
        return acc;
    }, {})
}
 
console.log(getCountries(arrUsers));
//{ US: 2, undefined: 1 }


// odd even sum
const getSum = (array)=> {
    let evenSum = 0;
    let oddSum = 0;
    for(let number of array){
        if(number % 2 === 0){
            evenSum += number;
        }
        else{
            oddSum += number;
        }
    }
    return {evenSum, oddSum}
}
console.log(getSum([1,2,11,4]));


//total of rest value
function sum(...args) {
  let total = 0;
  for(let item of args){
    total += item;
  }
  return total;
}
console.log(sum(100, 200, 300, 400));

//letter count
const string = "Hello,";
function charCount(str){
    const count={};
    for(let i of str){
        if(i !== "," && i !== " "){
            count[i] = (count[i] || 0) + 1;
        }
    }
    return count;
}
console.log("CharCount: ",charCount(string));

//unique and common array
function myFn(array){
    const Unique = [];
    const common =[];
    for(let i of array){
        if(!Unique.includes(i)){
            Unique.push(i);
        }
        else if(!common.includes(i)){
            common.push(i);
        }
    }
    return {Unique, common}
}
console.log(myFn([1,2,2,3,4,5,6,6,3,3]));



console.log("A");
async function foo(){
	console.log("B");
	setTimeout(()=>console.log("C"))
	await Promise.resolve();
	console.log("D");
	setTimeout(()=>console.log("E"))
  //the Promise never resolves "G" and "H" never appear
	await new Promise(resolve => setTimeout(console.log("F"),0));
	console.log("G");
	setTimeout(()=>console.log("H"))
}
console.log("I");
foo();
console.log("J");
// A, I, B, j, D, F, C, E, 






import React, { useState, useMemo, useEffect } from "react";

const initialArticles = [
  { id: 3, title: "Article C", date: "2024-05-01" },
  { id: 1, title: "Article A", date: "2024-05-02" },
  { id: 2, title: "Article B", date: "2024-04-20" },
];

const ArticleList = () => {
  const [articles] = useState(initialArticles);

  const [sortType, setSortType] = useState(
    () => sessionStorage.getItem("sortBy") || "date"
  );

  // persist sort preference
  useEffect(() => {
    sessionStorage.setItem("sortBy", sortType);
  }, [sortType]);

  // derive sorted list
  const sortedArticles = useMemo(() => {
    if (sortType === "date") {
      return [...articles].sort(
        (a, b) => new Date(b.date) - new Date(a.date)
      );
    }

    if (sortType === "id") {
      return [...articles].sort((a, b) => a.id - b.id);
    }

    return articles;
  }, [articles, sortType]);

  return (
    <div>
      <select value={sortType} onChange={(e) => setSortType(e.target.value)}>
        <option value="date">Sort by Date</option>
        <option value="id">Sort by ID</option>
      </select>

      <ul>
        {sortedArticles.map((article) => (
          <li key={article.id}>
            {article.title} - {article.date} (ID: {article.id})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ArticleList;


//** destructure a object
const locationInfo = {
  city: "Pune",
  coordinates: {
    lat: 18.5204,
    long: 73.8567
  },
  weather: {
    current: {
      temp: 28,
      condition: "Sunny"
    },
    forecast: [
      { day: "Mon", temp: 30 },
      { day: "Tue", temp: 29 },
      { day: "Wed", temp: 31 }
    ]
  }
};

const {city, 
  coordinates: {lat: latitiude},
  weather: {
    current: {temp: currentTemp },
    forecast: [ , , {temp: WedTemp}]
  },
} = locationInfo;

console.log(city)
console.log(latitiude)
console.log(currentTemp)
console.log(WedTemp)
