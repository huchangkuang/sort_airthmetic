let merge = (a, b) => {
    if (a.length === 0) { return b }
    if (b.length === 0) { return a }
    return a[0] > b[0] ? [b[0]].concat(merge(a, b.slice(1))) : [a[0]].concat(merge(a.slice(1), b))
}
let mergeSort = arr => {
    let k = arr.length
    if (k === 1) { return arr }
    let left = arr.slice(0, Math.floor(k / 2))
    let right = arr.slice(Math.floor(k / 2))
    return merge(mergeSort(left), mergeSort(right))
}
let a = mergeSort([1, 5, 63, 95, 5, 6, 5, 6, 4, 6, 43, 5454])
console.log(a)