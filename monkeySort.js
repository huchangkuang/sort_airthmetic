function isOrder(arr) {
    // let is = true
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] > arr[i + 1]) {
            return false
            // is = false
            // break
        }
    }
    // return is
    return true
}
function randomSort(arr) {
    let temp, x
    for (let i = 0; i < arr.length; i++) {
        x = Math.floor(Math.random() * (arr.length - 1))
        temp = arr[i]
        arr[i] = arr[x]
        arr[x] = temp
    }
    return arr
}
function monkeySort(arr) {
    let i = 0
    while (!isOrder(arr)) {
        randomSort(arr)
        i++
        console.log(`第${i}次：` + arr)
    }
    return arr
}
monkeySort([1, 5, 3, 6, 9, 4, 2, 7])