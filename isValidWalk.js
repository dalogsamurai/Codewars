function isValidWalk(walk) {
    var nCount, wCount, eCount, sCount;
    nCount = wCount = eCount = sCount = 0;
    if (walk.length != 10) return false;
    else {
      for (i = 0; i != walk.length; i += 1) {
        switch (walk[i]) {
          case "n":
            nCount += 1;
            break;
          case "w":
            wCount += 1;
            break;
          case "e":
            eCount += 1;
            break;
          case "s":
            sCount += 1;
            break;
        }
      }
      if (nCount == sCount && eCount == wCount) return true;
      return false;
    }
  }