function insertionSort(arr) {
    let current, preindex
    for (let i = 1; i < arr.length; i++) {
        preindex = i - 1
        current = arr[i]
        while (preindex >= 0 && arr[preindex] > current) {
            arr[preindex + 1] = arr[preindex]
            preindex--
        }
        arr[preindex + 1] = current
        // console.log(arr)
    }
    return arr
}
function random_arr() {
    let arr = []
    for (let i = 0; i < 50; i++) {
        arr.push(Math.floor(Math.random() * 100))
    }
    // console.log(arr)
    return arr
}
let a = insertionSort(random_arr())
console.log(a)