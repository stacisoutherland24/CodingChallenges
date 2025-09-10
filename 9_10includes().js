function arrayDiff(arr1, arr2) {
  const answer = []
  for (let i = 0; i < arr1.length; i++){
    if(!arr2.includes(arr1[i])){
      answer.push(arr1[i])
    }
  }
  for (let j = 0; j < arr2.length; j++){
    if(!arr1.includes(arr2[j])){
      answer.push(arr2[j])
    }
  }

  console.log(answer)
  return answer.sort();
}