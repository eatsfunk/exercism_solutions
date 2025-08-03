export const toRna = (dSeq) => {
  let rNuc = '';
  let rSeq = '';
  for (let i = 0; i < dSeq.length; i++) {
      switch (dSeq[i]) {
        case 'G':
          rNuc = 'C';
          break;
        case 'C':
          rNuc = 'G';
          break;
        case 'T':
          rNuc = 'A';
          break;
        case 'A':
          rNuc = 'U';
          break;
        default: 
          rNuc = '';  
      }
      rSeq += rNuc;
  }
  return rSeq;
};
