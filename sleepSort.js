function max(arr) {
    return arr.length === 1 ? arr : Math.max(arr[0], max(arr.slice(1)))
}
function sleepSort(arr) {
    let list = []
    for (let i = 0; i < arr.length; i++) {
        setTimeout(() => {
            console.log(`第${i}个人醒了，他分配的数字是${arr[i]}`)
            number = arr[i]
            list.push(number)
        }, arr[i])
    }
    setTimeout(() => {
        console.log(list)
    }, max(arr) + 100)
    return list
}
sleepSort([5, 6, 7, 4, 2, 3, 1, 8, 9])
