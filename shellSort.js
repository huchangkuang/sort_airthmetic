function shellSort(arr) {
    let len = arr.length,
        temp,
        gap = 1,
        j
    while (gap < len / 3) { //动态定义间隔
        gap = gap * 3 + 1
    }
    for (gap; gap > 0; gap = Math.floor(gap / 3)) {
        console.log(`gap:${gap}`)
        for (let i = gap; i < len; i++) { //插入排序实现
            temp = arr[i]
            console.log(`temp:${temp} `)
            for (j = i - gap; j >= 0 && arr[j] > temp; j -= gap) {
                arr[j + gap] = arr[j]
                console.log(`arr[j+gap]:${arr[j + gap]}`)
            }
            arr[j + gap] = temp
        }
    }
    return arr
}
let a = shellSort([5, 3, 9, 53, 6, 7, 43, 1, 15])
console.log(a)