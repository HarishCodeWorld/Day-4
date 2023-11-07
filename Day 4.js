//1.A)
var odd = function (num){
    let final = [];
  for(let i = 0; i<num.length; i++){
      if(num[i]%2==1){
        final.push(num[i]);
        
      }
  } 
console.log(final);    
};

var num = [1,2,3,4,5];
odd(num);
//output
//[1, 3, 5]

//using IIFE

var num1 = [1,2,3,4,5];
   var final1 = [];
(function (){
    
     for(var i = 0; i<num1.length; i++){
      if(num1[i]%2==1){
          final1.push(num1[i])
        
      }
  } 
    console.log(final1);
})(num1);

//output
//[1, 3, 5]


//1.B)
//using  anonymous function
   let title = function (str) {
	
	for (var i = 0; i < str.length; i++) {
        str[i] = str[i].toLowerCase();
		str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
	}
	console.log(str.join(' '));
}

var str = ['i','aM','a','desIGn','EngiNeer.'];

title(str);
//output
//I Am A Design Engineer.


//to title case using IIFE

var str1 = ['i','aM','a','desIGn','EngiNeer.'];

(function (){
	for (var i = 0; i < str1.length; i++) {
	     str1[i] = str1[i].toLowerCase();
		str1[i] = str1[i].charAt(0).toUpperCase() + str1[i].slice(1);
	}
	console.log(str1.join(' '));
})(str1);

//output
//I Am A Design Engineer.

//1.C)
//sum of numbers using  anonymous function

let add = function (n){
    let sum = 0;
    for(let i = 0; i<n.length; i++){
        sum+=n[i];
    }
    console.log(sum);
};

var n= [1,2,3,4,5];
add(n);
//output
//15

//sum of numbers using IIFE
var n= [1,2,3,4,5];
(function (){
    let sum = 0;
    for(let i = 0; i<n.length; i++){
        sum+=n[i];
    } 
    console.log(sum);
})(n);
//output
//15

//1.D)
//Using Anonymous fucntion.

var prime=function(a){

    var  res=[];
    for(i=0;i<a.length;i++)
    {
        var count=0;
        for(j=1;j<=a[i];j++)
        {
            if(a[i]%j===0)
            {
                count++;
            }
        }
        if(count==2)
        {
            res.push(a[i]);
        }
    }
    console.log(res);
};
prime([1,2,3,4,5,6,7,8,9,11]);

//output
//[2, 3, 5, 7, 11]

//Using IIFE

(function(a1){
    var  res1=[];
    for(i=0;i<a1.length;i++){
        count1=0;
        for(j=1;j<=a1[i];j++){
            
            if(a1[i]%j===0){
                count1++;
            }
            
        }
            
        if(count1==2){
                res1.push(a1[i]);
            
        }
    }
    console.log(res1);
 
})
([1,2,3,4,5,6,7,8,9,11]);

//output
//[2, 3, 5, 7, 11]



//1.E)Return all the palindromes in an array
//anonymous function

let palindrome = function(arr){
    
    var N=arr.length;
    var out =[];
    for(let i=0;i<arr.length;i++){
        let final = arr[i];
        let str = final.split('').reverse().join('');
        if(str==arr[i])
       out.push(arr[i]);
        }
     console.log(out);
   
};
var arr =["abc", "mom", "dad", "madam", "teacher"];

palindrome(arr);
//output
//['mom', 'dad', 'madam']

//IIFE function

 
(function(){
    var arr1 =["abc", "mom", "dad", "madam", "teacher"];
    var N1=arr1.length;
    var out =[];
    for(let i=0;i<arr1.length;i++){
        let final = arr1[i];
        let str = final.split('').reverse().join('');
        if(str==arr1[i])
       out.push(arr1[i]);
        }
     console.log(out);
   
})(); 
//output
//['mom', 'dad', 'madam']


//1.F)
//anonymous function
let median = function (arr1,arr2){
    let arr = [...arr1, ...arr2];
    
    arr.sort((a,b) => a-b);
    let len = arr.length;
  
    if(len%2!==0){

 let ans = arr[Math.round(len/2)-1];
 let final = ans;

 }else{

 ans = arr[Math.round(len/2)-1]+arr[Math.round(len/2)];
 final = ans;

}
console.log(final);
};
var arr1 = [3,2,1,4,5];
var arr2 = [8,6,7,9,10];
median(arr1,arr2);
//output
//11

//using IIFE

var arr1 = [3,2,1,4,5];
var arr2 = [8,6,7,9,10];
(function (){
   
let arr = [...arr1, ...arr2];
    
    arr.sort((a,b) => a-b);
    let len = arr.length;
  
    if(len%2!==0){

 let ans = arr[Math.round(len/2)-1];
 let final = ans;

 }else{

 ans = arr[Math.round(len/2)-1]+arr[Math.round(len/2)];
 final = ans;
 }
 console.log(final);
})(arr1,arr2);
//output
//11

//1.G)
//Using anonymous function

var dup=function(arr){
    var frequency = {};
   
    for(let i = 0; i < arr.length; i++) {
       if(frequency[arr[i]]) {
         frequency[arr[i]] = frequency[arr[i]] + 1;
       } else {
         frequency[arr[i]] = 1;
       }
    }
   
   let final = [];
   for(let x in frequency) {
     if(frequency[x] === 1) {
       final.push(x);
     }
   }
   
   console.log(final); 
   
   };
   dup([1,12,11,3,4,5,12]);
   //output
   //[ '1', '3', '4', '5', '11' ]
   
   //Using IIFE
   
   (function (arr){
     var frequency = {};
   
    for(let i = 0; i < arr.length; i++) {
       if(frequency[arr[i]]) {
         frequency[arr[i]] = frequency[arr[i]] + 1;
       } else {
         frequency[arr[i]] = 1;
       }
    }
   
   let final = [];
   for(let x in frequency) {
     if(frequency[x] === 1) {
       final.push(x);
     }
   }
   
   console.log(final);   
   })([1,2,3,4,4,5,6,7,5]);
   
   //output
   //[ '1', '2', '3', '6', '7' ]


//1.H)
//Using anonymous function
let rotation = function (arr,n,d)
{
    let p = 1;
        while (p <= k) {
            let last = arr[0];
            for (let i = 0; i < n - 1; i++) {
                arr[i] = arr[i + 1];
            }
            arr[n - 1] = last;
            p++;
            
        }
         let out = [];
        for (let i = 0; i < n; i++) {
           out.push(arr[i]);
            
        }
        console.log(out);
};
var arr =[4,5,6,1,2,3];
var n = arr.length;
var k = 3;

rotation(arr, n,k);

//output
//[ 1, 2, 3, 4, 5, 6 ]

//Using IIFE

var arr =[4,5,6,1,2,3];
var n = arr.length;
var k = 3;

(function(arr,n,k){
   let p = 1;
        while (p <= k) {
            let last = arr[0];
            for (let i = 0; i < n - 1; i++) {
                arr[i] = arr[i + 1];
            }
            arr[n - 1] = last;
            p++;
            
        }
         let out = [];
        for (let i = 0; i < n; i++) {
            out.push(arr[i]);
            
        }
        console.log(out);  
})(arr,n,k);

//output
//[ 1, 2, 3, 4, 5, 6 ]




//2.A) Print odd numbers in an array

let numberArray = [1, 2, 3, 4, 5, 6, 98, 101, 467]

console.log("Odd Numbers in Number Array are: " + numberArray.filter((item) => {

    return item % 2 !== 0

}))

//2.B)Convert all the strings to title caps in a string array

let stringArray = ["Akshay", "is", "a", "smart", "developer"]

stringArray = stringArray.map((item) => {

    return item.toUpperCase()

})

console.log("Converted String Array is: " + stringArray)

//2.C)Sum of all numbers in an array
//using numArray Defined Above

let sum = numberArray.reduce((currentTotal, item) => {

    return currentTotal + item

}, 0)

console.log("Sum of elements in Number Array: " + sum)

//2.D)Return all the prime numbers in an array

console.log("Prime Number is Array are: " +
    numberArray.filter((item) => {

        for (let i = 2; i < item; i++) {
            if (item % i === 0)
                return false;
        }
        return item !== 1;

    }))

//2.E) Return all the palindromes in an array 

let arrayPallindrome = [111, 102, 505, 323, 612, 776, 707, 121]

console.log("Pallindrome Numbers in array are: " +
    arrayPallindrome.filter((item) => {

        let temp = item + "";

        if (temp.split('').reverse().join('') === item + "")
            return true

        return false

    }))

