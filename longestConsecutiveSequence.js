const longestConsecutiveSequence = (inputArray) => {
    let subsequence=[]
    let newArr=new Array(Math.max(...inputArray))
    inputArray.forEach(elem=>newArr[elem]=elem)
    let increment=1
     while(increment<parseInt(newArr.length/2)){
        let subset=new Set()
        for(let i=0;i<newArr.length;i+=increment){
                if(newArr[i+increment]-newArr[i]===increment){
                    subset.add(newArr[i])
                    subset.add(newArr[i+increment])
                }
        }
        if(subset.size>0){
            subsequence.push(subset)
        }
        increment++
    }
    return Math.max(...subsequence.map(elem=>elem.size))
}
