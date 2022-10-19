
 //Check whether a string is palindrome or not.

let str = "naman"
let row1 = "";
for(let i=str.length-1;i>=0;i--){
  row1=row1+str[i];
}
let row2 = ""
for(let i=0;i<=str.length-1;i++){
  row2=row2+str[i];
}
if(row1==row2){
  console.log("Yes")
}else{
  console.log("No")
}
