let prompt=require('prompt-sync')()
let word1=prompt('enter a word:').toLowerCase()
letters=0
numbers=0
spechars=0
for (i=0;i <word1.length; i++)
{
  //if the character unicode is 97-122.increment letters/ control+shift+l to replace word in editor 
  if (word1.charCodeAt(i)>=97 && word1.charCodeAt(i) <=122)
  letters++  
  //if the character unicode is..unicode 48-57 increment numbers
  else if (word1.charCodeAt(i) >=48 && word1.charCodeAt(i) <=57)
  numbers++  
  //else increment special character
  else
  spechars++
}
console.log('there are: '+letters+' letters')
console.log('there are: '+ numbers+' numbers')
console.log('there are: '+spechars+' special characters')


