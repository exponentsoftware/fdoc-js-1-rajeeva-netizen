const checkUnique=(arr)=>{
    //const arrOne = [1, 4, 6, 2, 1];
    let uniqueArr = ([...new Set(arr)])
    if(arr.length === uniqueArr.length){
      console.log('true')
    }else {
      console.log('false')
    }
    console.log(uniqueArr)
    }
    
    checkUnique([1, 4, 6, 2, 1])
    checkUnique([1, 4, 6, 2, 3])