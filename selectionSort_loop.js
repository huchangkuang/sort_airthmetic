let minIndex = (numbers) => {
    let index = 0
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] < numbers[index]) {
            index = i
        }
    }
    return index
}
let swap = (array, i, j) => {
    let temp = array[i]
    array[i] = array[j]
    array[j] = temp
}
let = sort = (numbers) => {
    for (let i = 0; i < numbers.length - 1; i++) {
        let index = minIndex(numbers.slice(i)) + i
        if (index !== i) { swap(numbers, index, i) }
    }
    return numbers
}
let a = sort([1, 5, 6, 9, 8, 6, 46, 1, 6, 8, 732, 416, 4, 23])
console.log(a)