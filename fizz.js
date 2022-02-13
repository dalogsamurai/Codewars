function fizz(n) {
  for (i = 1; i != n; i += 1) {
    if (i % 3 == 0) console.log("for 3\n");
    else if (i % 5 == 0) console.log("for 5\n");
    else if (i % 3 == 0 && i % 5 == 0) console.log("for 3 for 5\n");
    else console.log(i, "\n");
  }
}
