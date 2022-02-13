def count(string):
    return {l: string.count(l) for l in string}


def scramble(s1, s2):
    dic1 = {i: s1.count(i) for i in s1}
    dic2 = {i: s2.count(i) for i in s2}


def spin_words(sentence):
    res = ''
    sentenceList = list(sentence.split(' '))
    for i in sentenceList:
        if (len(i) >= 5):
            res += (i[::-1])
        else:
            res += i
        res += ' '
    return res[:-1]


def spin_wordsV2(sentence):
    return " ".join([x[::-1] if len(x) >= 5 else x for x in sentence.split(" ")])


def longest_consec(strarr, k):
    result = ""
    if k > 0 and len(strarr) >= k:
        for index in range(len(strarr) - k + 1):
            s = ''.join(strarr[index:index+k])
            if len(s) > len(result):
                result = s
    return result


def odd_or_even(arr):
    return 'even' if sum(arr) % 2 == 0 else 'odd'


def solution(s):
    res = []
    if (len(s) % 2 == 0):
        for i in s:
            res.append[i+(i+1)]
    return res


def array_diff(a, b):
    return [i for i in a if i not in b]


def xoVer1(s):
    arrX = ''
    arrO = ''
    tmp = tuple(s)
    for i in tmp:
        if (i == 'x' or i == 'X'):
            arrX += 'x'
        if (i == 'o' or i == 'O'):
            arrO += 'o'
    return (len(arrX) == len(arrO))


def xoVer2(s):
    s = s.lower()
    return s.count('x') == s.count('o')


def is_square(n):
    if (n < 0):
        return False
    if (n ** (0.5) == int(n ** (0.5))):
        return True
    else:
        return False


def maskify(cc):
    res = ''
    tmp = list(cc)
    if (len(cc) <= 4):
        print(cc)
        return cc
    else:
        for i in range(len(cc)-4):
            res += "#"
        res += cc[-4::]
        return res


def square_digits(num):
    res = ''
    tmp = list(str(num))
    for i in tmp:
        print(i)
        res += str(int(i)**2)
    return int(res)


def main():
    print("codewars solutions")
    print("by thelogsamurai")
    print(scramble("world", "rkqodlw"))
    print(scramble("cedewaraaossoqqyt", "codewars"))
    print(scramble("katas", "steak"))


main()
