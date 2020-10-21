
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let resaulMass=[];
  if(matrix==undefined){return [];}
  else {
    for(let i=0;i<matrix.length;i++){
      if(i%2==0) {
        resaulMass.push(matrix[i]);
      }
      else {
        resaulMass.push(matrix[i].reverse());
      }
    }
    return resaulMass.flat();
  }
  
}
