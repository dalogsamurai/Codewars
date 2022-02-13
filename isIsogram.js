function isIsogram(str) {
    var tmp;
    tmp = str.toLowerCase();
    console.log(tmp);
    for (i = 0; i != tmp.length; i += 1)
      for (j = 0; j != tmp.length; j += 1) {
        if (i != j) if (tmp[i] == tmp[j]) return false;
      }
    return true;
  }