function tooMuchScreenTime(hours) {

  for (let i = 0; i < hours.length; i++) {
    if (hours[i] >= 10)
      return true;
  }

  let totalHours = 0;
  let avgHours = 0;

  for (let i = 0; i < hours.length; i++) {
    totalHours += hours[i];
  }
  avgHours = totalHours / 7;
  if (avgHours >= 6) {
    return true;
  }

  for (let start = 0; start <= 4; start++) {
    if (hours[start] + hours[start + 1] + hours[start + 2] >= 24) {
      return true;
    }

  }
return false
}

tooMuchScreenTime([1, 2, 3, 4, 5, 6, 7])    

    

