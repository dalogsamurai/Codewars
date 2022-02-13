def createList(tmp):
    res = list(tmp.split(","))
    print(res)
    # return res


def createTuple(tmp):
    res = tuple(tmp.split(","))
    print(res)
    # return res


def createSet(str):
    tmp = input(str)
    arr = set(tmp.split(","))
    print(arr)
    # return arr


def listOfTwoSets():
    # a = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89]
    # b = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
    arrA = createList(input("Enter A List: "))
    arrB = createList(input("Enter B List: "))
    res = list(set(arrA) & set(arrB))
    print(res)
    # return res


def calculate(n):
    res = n+(n*10+n)+(n*100+n*10+n)
    return res


def letterCount(str):
    res = {letter: str.count((letter)) for letter in str}
    print(res)
    return res


def testDecorator():
    def inner():
        print('end')
    print('start')
    return inner()


def testException(num):
    try:
        10 / num
    except:
        print("Division by zero")


def main():
    print("Code test")
    print("by thelogsamurai")


main()
