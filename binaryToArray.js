const binaryArrayToNumber = arr => {
    let res, power
    res = 0
    power = arr.length - 1
    for (i = 0; i != arr.length; i += 1) {
        if (arr[i] == 1)
            res += Math.pow(2, power)
        else;
        power -= 1
    }
    return res
};