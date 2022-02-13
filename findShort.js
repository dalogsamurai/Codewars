function findShort(s) {
    var str = s.split(" ");
    var len = str.length;
    var res = str[0].length;
    for (i = 1; i != str.length; i += 1) {
      if (str[i].length < res) res = str[i].length;
    }
    return res;
}