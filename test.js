let array= [2,7,4,5]

array.find((a,i)=>{
  console.log("index",i)
  if(7===a){
    array.splice(i,1,9)
    return true
  }
  return false
})
console.log(array)