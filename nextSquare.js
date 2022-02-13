function findNextSquare(sq) {
  let tmp = Math.sqrt(sq);
  if (Number.isInteger(tmp)) {
    tmp += 1;
    let res = tmp * tmp;
    return res;
  } else return -1;
}

console.log(findNextSquare(144));
