var countBits = function (n) {
  var tmp = n.toString(2);
  var str, res;
  res = 0;
  str = tmp.trim();
  for (i = 0; i != str.length; i += 1) if (str[i] === "1") res += 1;
  return res;
};

console.log(countBits(2));
