let counter = [];
function radixSort(arr, maxDigit) {
    let mod = 10;
    let dev = 1;
    for (let i = 0; i < maxDigit; i++, dev *= 10, mod *= 10) {
        for (let j = 0; j < arr.length; j++) {
            let bucket = parseInt((arr[j] % mod) / dev); //取整,取个、十、百、千位
            if (counter[bucket] == null) {
                counter[bucket] = [];
            }
            counter[bucket].push(arr[j]);
        }
        let pos = 0;
        for (let j = 0; j < counter.length; j++) {
            let value = null;
            if (counter[j] != null) {
                while ((value = counter[j].shift()) != undefined) { //将桶中的数弹完，就不执行
                    console.log(`value:${value}`)
                    arr[pos++] = value;
                }
            }
        }
    }
    return arr;
}
let a = radixSort([15, 6984, 34, 645, 214, 336, 541, 236], 4)
console.log(a)