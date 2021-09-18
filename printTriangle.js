const printStar=(number)=>{

let line = ""
for(let i = 1; i<=number;i++){
  for(j =1 ;j<=i;j++ ){
line+="*"
  }
 line = line + "\n"
}
return line + "\n"
}

console.log(printStar(7))


