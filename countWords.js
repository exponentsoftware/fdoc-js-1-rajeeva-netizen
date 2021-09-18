const countWords = (para, word1,word2)=>{
  //console.log(para.length)

  let a = para.toLowerCase().split(" ")
  // console.log(a)
 let key1 = word1.toLowerCase()
//  console.log(key1)
 let key2 = word2.toLowerCase()
//  console.log(key2)
let count = 0
let count2 = 0
 a.forEach(item =>{
   if(item == key1){
    // console.log(true)
     count++
   }else if(item == key2){
     //console.log(true)
     count2++
   }
 }
 )
  console.log(word1,count,word2, count2 )

  if(count > count2){
    console.log(word1+" has more occurance")
  }else if(count<count2){
    console.log(word2+" has more occurance")
  }else{
    console.log("both are equal")
  }
}

countWords("I love teaching. If you do not love teaching what else can you love. I love JavaScript if you do not love something which can give life to your application what else can you love.", "love", "can")