function likes(names) {
  switch (names.length) {
    case 0:
      console.log("no one likes this");
      break;
    case 1:
      console.log(names + " likes this");
      break;
    case 2:
      console.log(names[0] + " and " + names[1] + " likes this");
      break;
    case 3:
      console.log (names[0] + ", " + names[1] + " and " + names[2] + " like this");
      break;
    default:
      console.log(
        names[0] +
          ", " +
          names[1] +
          " and " +
          (names.length - 2) +
          " more likes this"
      );
      break;
  }
}

likes([]);
likes(["Pidr", "Lox"]);
likes(["Ebanat"]);
likes(["Pidr", "Lox", "Debil"]);
likes(["Pidr", "Lox", "Debil", "Mudak"]);
