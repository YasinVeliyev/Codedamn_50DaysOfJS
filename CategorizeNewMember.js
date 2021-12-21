function openOrSenior(data) {
  return data.map(member=>{
      if(member[0]>=55&&member[1]>7){
          return "Senior"
      }
      return "Open"
  })
}

let output = openOrSenior([
  [45, 12],
  [55, 21],
  [19, -2],
  [104, 20],
]);

console.log(output);
