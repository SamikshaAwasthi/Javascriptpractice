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
let s = "Nazim khan"
// let d = s.slice(1,4)
// let d=s.slice(0)
// let d = s.slice(undefined,4)
// console.log(d)


// substring method => substring method is work similer to slice method 
// console.log(s.substring(1,4)) substring innore the negative value and start with 0


// Replace method = replace method is used to replace the value of onther value of string

// console.log(s.replace('khan', 'moh'))
// console.log(s)// this is not change original string

// Note => replace method does'nt change the string it called on
// replace method return a new string

// By default replace method is work on case senstive . if we wirtter MICROSOFt so it is not work
// let st= "microsoft"
// let sr = st.replace("MICROSOFT","W3schools")
// console.log(st)
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
// let s1= s.toUpperCase()
// console.log(s1)
// console.log(s)//this is not change original string


// toLowerCase => it is convert the text in lower case
// let str ="SAMIKSHA AWASTHI"
// let str1=str.toLowerCase()
// console.log(str1)
// console.log(str)
// this is not change original string

//Concat method => concat method is used to merge to string
// let s1= "samiksha love"
// let s2 =" nazim"
// console.log(s1.concat(s2))
// console.log(s1)//this is not change original string

// trim method =>  trim method is used remove whitespace both side of string
// let st = "            samiksha awasthi         "
// let newst=st.trim()
// console.log(newst)


// String trimStart()=> this method removed the whitespace of starting
// let st ="            samiksha awasthi                "
// console.log(st.trimStart())

// String trimEnd()=> this method remove white space of the end
// console.log(st.trimEnd())




// String padStart()
// String padEnd()
// String charAt()

// charAt()=> this method return the character of specified index(positin) in a string
// let st="samiksa"
// console.log(st.charAt(2))



// String charCodeAt()
// String split()

// String search method

// 1.indexof() => The indexOf() method returns the index (position) the first occurrence of a string 
// in a string:
// let st ="samiksha awasthi is a good employee of company"
// console.log(st.indexOf('employee'))

// 2.lastindexof()=> the lastindexof() method return the index last occurance of a string
// let newst = st.lastIndexOf('good')
// console.log(newst)

// Note => indexeof and lastIndexOf is return -1 if the string is not found 
// let str = st.indexOf('khan')
// let str1 = st.lastIndexOf('nazim')
// console.log(str,str1)

// both method aceept second parameter as postion of string
// let str = st.indexOf('employee',17)
// console.log(str)

// inclue mehtod => include method check the string inside of a string or not if yes thren return true otherwise false
// console.log(st.includes('awasthi'))

//split method => split method split the string using  space, comma underscore hypen any symbol character
// console.log(st.split(''))