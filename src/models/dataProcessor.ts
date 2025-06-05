type dataArray = string[] | number[]


function dataProcessor(value: dataArray): string {

    if (Array.isArray(value) && value.every(item => typeof item === 'string')) {
        return value.map(str => str.toUpperCase()).join(', ')
    } else if (Array.isArray(value) && value.every(item => typeof item === 'number')) {
        return value.map(num => num.toFixed(2)).join(', ')
    } else {
        return 'Data type is invalid'
    }   
}

const dataString: dataArray = ['pumpkin', 'kiwi', 'bananas', 'pineapples']
const dataNumber: dataArray = [438, 27.357781, 108.258, 5.00814]

console.log(dataProcessor(['coconut', 'kiwi', 'bananas', 'pineapples']))
console.log(dataProcessor([3.141527, 27.357781, 108.258, 5.00814]))

console.log(dataProcessor(dataString))
console.log(dataProcessor(dataNumber))
