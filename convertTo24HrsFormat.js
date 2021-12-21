const time = '12:10AM';


function convertTo24HrsFormat(time) {
    let timeList=time.match(/[0-9]+/g)
   let reg=/[A-Z]{2}$/
   let k = time.match(reg)[0]
    if(k==="AM"){
         if(+timeList[0]+12<24){
            
        }
        else(
            timeList[0]=+timeList[0]+12-24
        )
        
    }
    else{
        if(+timeList[0]+12>=24){
            
        }
        else{
             timeList[0]=+timeList[0]+12
        }
       
    }
    timeList=timeList.map(elem=>elem.toString().padStart(2,"0"))
    return timeList.join(":")
}

console.log(`Converted time: ${convertTo24HrsFormat(time)}`)
