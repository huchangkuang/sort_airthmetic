let min = (numbers) => {
    if (numbers.length > 2) {
        return min([numbers[0], min(numbers.slice(1))])
    } else {
        return numbers[0] < numbers[1] ? numbers[0] : numbers[1]
    }
}
let minIndex = (numbers) => numbers.indexOf(min(numbers))
let sort = (numbers) => {
    if (numbers.length > 2) {
        let index = minIndex(numbers)
        let min = numbers[index]
        numbers.splice(index, 1)
        return [min].concat(sort(numbers))
    } else {
        return numbers[0] < numbers[1] ? [numbers[0], numbers[1]] : [numbers[1], numbers[0]]
    }
}
let a = sort([1, 5, 6, 9, 86, 3, 5, 93, 4, 9, 63, 34, 698, 7])
console.log(a)