const cleanText=(str)=>{
  let sentence = str.replace(/[^a-zA-Z ]/g, "")
  console.log(sentence)
 let sentenceSplit= sentence.split(" ")
 console.log(sentenceSplit)

 let count = 0

 sentenceSplit.forEach(item=>{
   if(item.length>1){
     count++
   }
 })
 console.log(count)
}

cleanText("I $am@% a %tea@cher%, &and& I lo%#ve %tea@ching%;. There $is nothing; &as& mo@re rewarding as educa@ting &and& @emp%o@wering peo@ple. ;I found tea@ching m%o@re interesting tha@n any other %jo@bs. %Do@es thi%s mo@tivate yo@u to be a tea@cher!?")


const uniqueWord=(str)=>{
  let sentance = str.replace(/[^a-zA-Z ]/g, "")
  console.log(sentance)
  let unique = new Set(sentance.split(" "))
  console.log(unique)
  let count = 0
  unique.forEach(item=>{
 count++
    
  })
  console.log(count)
}
uniqueWord("I $am@% a %tea@cher%, &and& I lo%#ve %tea@ching%;. There $is nothing; &as& mo@re rewarding as educa@ting &and& @emp%o@wering peo@ple. ;I found tea@ching m%o@re interesting tha@n any other %jo@bs. %Do@es thi%s mo@tivate yo@u to be a tea@cher!?")