function findEvenIndex(arr) {
    let newArr=[...arr]
  let sum=(arr)=>{
      if(!arr.length){
          return 0
      }
      let result=0;
      for(let i of arr){
          result+=i
      }
      return result
  }
  for(let i=0;i<arr.length;i++){
      if(sum(arr.splice(0,i))===sum(arr.splice(1))){
          return i
      }
      arr=[...newArr]
  }
  return -1
}

console.log(findEvenIndex([1,100,50,-51,1,1]))
