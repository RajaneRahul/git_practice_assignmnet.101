
 //Check whether a string is palindrome or not.

let str = "naman"
let bag = "";
for(let i=str.length-1;i>=0;i--){
  bag=bag+str[i];
}
if(str==bag){
  console.log("Yes")
}else{
  console.log("No")
}
