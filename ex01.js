// ex1 Write a program to find if a user entered string is a palindrome or not (for example "racecar" is a palindrome)
let prompt=require('prompt-sync')()
word1=prompt('enter a word:')
let res="";
let c=word1.length-1;
while (c>=0)
{
res += word1.charAt(c);
c--
}
if (word1===res)
{
    console.log(word1+" is a palindrome")
}
else{
    console.log(word1+" is not a palindrome")
}