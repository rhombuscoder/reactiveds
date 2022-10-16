const ARRAYSIZE = 100
export function randomizeArray(range) {
    let array = [];
    for (let i = 0; i < ARRAYSIZE; i++) {
        array.push(randomVals(20, range))
    }
    return array

}



export function randomVals(min, max) {
    console.log(max)
    let randomVal = Math.floor(Math.random() * (max - min + 1) + min)
    return randomVal
}
