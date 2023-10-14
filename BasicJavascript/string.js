// String
/*
1. javascript string are  for storing and manipulating text.
2 string are stroe zero or more character inside the quote.
string are stroed in 3 ways 
1. single quotes ''
2.double quotes ""
3. astric ``
*/

// let firstname = "samiksha"
// let lastname = "awasthi"
// console.log(firstname+" "+lastname)
// console.log(typeof(firstname+lastname))

// let number = 77
// console.log(firstname+number)
// console.log(typeof(firstname+number))

// methods of string
// String slice()=> slice method is used to extracts a part of string and
//  return extrated part in new a string
// let s = "Nazim khan"
// let d = s.slice(1,4)
// console.log(d)

// substring method => substring method is work similer to slice method 
// console.log(s.substring(1,4))


// Replace method = replace method is used to replace the value of onther value of string

// console.log(s.replace('khan', 'moh'))

// Note => replace method does'nt change the string it called on
// replace method return a new string

// By default replace method is work on case senstive . if we wirtter MICROSOFt so it is not work
// let st= "microsoft"
// let sr = st.replace("MICROSOFT","W3schools")
// console.log(sr)

// To replace case insensitive, use a regular expression with an /i flag (insensitive):
// for example
// let text ="please visit Microsoft"
// let newtext = text.replace(/MICROSOFT/i,"W3School")
// console.log(newtext)

// regular expression  is used without quotes

// converting upper and lower case
// toUpperCase() => it convert the text in upper case
// let s="samiksha awasthi"
// console.log(s.toUpperCase())

// toLowerCase => it is convert the text in lower case
// let str ="SAMIKSHA AWASTHI"
// console.log(str.toLocaleLowerCase())

//Concat method => concat method is used to merge to string
// let s1= "samiksha love"
// let s2 =" nazim"
// console.log(s1.concat(s2))


