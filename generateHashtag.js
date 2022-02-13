function generateHashtag(str) {
    if (str.length == 0)
        return false
    let tmp = str
    tmp = tmp.replace('/\s/g', '');
    if (tmp.length >= 140)
        return false
    let title = str
        .trim()
        .split(' ')
        .map((subStr) => subStr[0].toUpperCase() + subStr.slice(1))
        .join('')
    title = title[0].toUpperCase() + title.slice(1)
    title[0] = title[0].toUpperCase()
    let res = '#' + title
    return res
}

console.log (generateHashtag(" hello world"))
console.log(generateHashtag(''))