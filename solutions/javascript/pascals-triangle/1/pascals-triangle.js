//
// This is only a SKELETON file for the 'Pascals Triangle' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const rows = (n) => {
  if ( n === 0 ) return [];
  let triangle = [[1]];
  
  for (let y = 1; y < n; y++) {
    triangle.push([]); 
    
    for (let x = 0; x <= y; x++) {
      let addendL = 0;
      let addendR = 1;
      
      if (x > 0) {
        addendL = 1;
        addendR = 0;

        if (x < y) {
          addendL = triangle[y - 1][x - 1];
          addendR = triangle[y - 1][x];
        }
      } 
      triangle[y].push(addendL + addendR);
    }
  }
  return triangle;
};
