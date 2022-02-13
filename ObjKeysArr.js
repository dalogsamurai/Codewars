function getKeys(A) {               //Task for ObjKeys
    var B = Object.keys(A);
    return B;
}

function less(a) {
    var res = 10;
    var c = 0;
    while (res > 9) {
        while (a > 1) {
            c += a % 10;
            a = a / 10;
        }
        res = c;
    }
    return res;
}

document.writeln(less(1000));
document.writeln(less(1234));
document.writeln(less(9100));
