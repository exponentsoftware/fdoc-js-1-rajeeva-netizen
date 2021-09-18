function sevenRandomNumbers(){
    var a=[]
    lower=0
    upper=9;
  

        for(let i=0;i<=14;i++){
        
            if(a.length<=7){
            var num=Math.floor(Math.random() * (upper-lower+1))
                a.push(num)
            }
        
        }
        
        return uniqueArray=a.filter((element,index,arr)=>arr.indexOf(element)===index)
        
        
}
sevenRandomNumbers()